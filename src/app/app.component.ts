import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm= new FormGroup({
    'userDetail': new FormGroup({
      username:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required)
    })
  })
  // constructor(){
  // }
  // --------start Teamplate Driven -------------
  // onSubmit(data: any){
  //   console.log("data")
  //   console.log(data)
  // }
  // --------end template driven --------------

  onSubmit(){
    console.table("data",this.loginForm.value)
  }
  
}
