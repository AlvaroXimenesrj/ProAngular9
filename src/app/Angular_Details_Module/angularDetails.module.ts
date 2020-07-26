import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppDetailsComponent } from './angularDetails.components';

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot([
      {path: "details", component: AppDetailsComponent}
    ]),],
  providers: [],
  declarations: [AppDetailsComponent],
  exports:[AppDetailsComponent]
 
})

export class AppDetailsModule { }