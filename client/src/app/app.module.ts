import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { DemandeFeedbackComponent } from './demande-feedback/demande-feedback.component';
import { FeedbackEnvoyeComponent } from './feedback-envoye/feedback-envoye.component';
import { DemandeEnvoyeComponent } from './demande-envoye/demande-envoye.component';
import { SendFeedbackFormComponent } from './send-feedback-form/send-feedback-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SendAskFeedbackResultComponent } from './send-ask-feedback-result/send-ask-feedback-result.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemandeFeedbackComponent,
    FeedbackEnvoyeComponent,
    DemandeEnvoyeComponent,
    SendAskFeedbackResultComponent,
    SendFeedbackFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ApolloModule,
    HttpClientModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: environment.serverApi
          })
        }
      },
      deps: [HttpLink],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
