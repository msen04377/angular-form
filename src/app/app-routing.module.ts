import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormTaskComponent} from '../app/modules/form-task/form-task.component'
import {AppComponent} from '../app/app.component'

const routes: Routes = [
  { path: 'add_form', component:FormTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [FormTaskComponent]
