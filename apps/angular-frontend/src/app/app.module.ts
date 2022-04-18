
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontendTodoModule } from '@frontend/todo';
import { OAuthModule } from 'angular-oauth2-oidc';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    OAuthModule.forRoot({
      resourceServer: {
        sendAccessToken: true,
       // allowedUrls: ['http://localhost:3333/api/']
      }
    }),
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    FrontendTodoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
