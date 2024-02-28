import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { delay, first, map, of, switchMap } from 'rxjs';
import { EmployeeService } from '../shared/employee/employee.service';

@Component({
  selector: 'app-no-manager-dialog',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './no-manager-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class NoManagerDialogComponent implements AfterViewInit {
  private employeeService = inject(EmployeeService);

  private dialog = inject(MatDialog);

  private document = inject(DOCUMENT);

  @ViewChild('templateRef') templateRef!: TemplateRef<unknown>;

  private readonly delay = 30_000; // 30s

  private readonly expiryDuration = 604_800_000; // 7 days

  private readonly expiryDateKey = 'no-manager-dialog-expiry-date';

  ngAfterViewInit(): void {
    if (!this.shouldOpenDialog()) {
      return;
    }

    this.employeeService.next$
      .pipe(
        delay(this.delay),
        map(() => !!this.employeeService.data().managerEmail),
      )
      .pipe(
        switchMap((hasManager) => {
          if (hasManager) {
            return of(false);
          }
          return this.dialog.open(this.templateRef, { width: '500px', disableClose: true }).afterClosed();
        }),
        first(),
      )
      .subscribe(() => this.storeDialogExpiryDate());
  }

  private shouldOpenDialog() {
    return Date.now() > this.getDialogExpiryDate();
  }

  private getDialogExpiryDate() {
    const storedDate = this.document.defaultView?.localStorage.getItem(this.expiryDateKey);
    return storedDate ? Number(storedDate) : 0;
  }

  private storeDialogExpiryDate() {
    const dialogExpiryDateValue = Date.now() + this.expiryDuration;
    this.document.defaultView?.localStorage.setItem(this.expiryDateKey, dialogExpiryDateValue.toString());
  }
}
