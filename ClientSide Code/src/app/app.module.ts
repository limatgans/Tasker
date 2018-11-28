import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

// Components
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';

// Routes - For Routing
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
