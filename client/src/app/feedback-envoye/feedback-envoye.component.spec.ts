import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FeedbackEnvoyeComponent } from './feedback-envoye.component';

describe('FeedbackEnvoyeComponent', () => {
  let component: FeedbackEnvoyeComponent;
  let fixture: ComponentFixture<FeedbackEnvoyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackEnvoyeComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackEnvoyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('il doit y avoir au moins un test', ()=>{
    expect(1).toBe(1);
  })
});
