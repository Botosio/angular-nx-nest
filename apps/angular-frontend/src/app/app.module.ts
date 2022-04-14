import { FrontendTodoModule } from '@frontend/todo';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
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
