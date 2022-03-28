import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent implements OnInit {
  exampleForm: any;
  exampleFormtwo: any;

  constructor() { }

  ngOnInit(): void {
    this.exampleForm= new FormGroup({
      // 'userDetailtwo': new FormGroup({
        // 'userDetail': new FormGroup({
            'username':new FormControl('',Validators.required),
            'name':new FormControl('',Validators.required),
        // }),
        'add': new FormArray([
          new FormControl(null,Validators.required),

        ]),
      // }),
      'addform': new FormArray([
        new FormControl(null,Validators.required)
      ]),
    })
  }

  onSubmit(){
    console.table("data",this.exampleForm)
  }
  onAddform(f:any){
    // console.log(this.exampleForm.get('addform').push(new FormControl(null)))
    console.log("**",this.exampleForm.get('addform'))
    console.log("**",this.exampleForm.get('addform').push(new FormControl('',Validators.required)))
    //  (<FormArray>this.exampleForm.get('addform')).push(new FormControl(null))
  }

  onAdd(i:any){
    console.log('*',i)
    // console.log(this.exampleForm.value['userDetail'])
    // console.log(this.exampleForm.value['add'].push(new FormControl('')))
    console.log("**",this.exampleForm.get('add'))
      console.log("***",this.exampleForm.get('add').push(new FormControl('' + i,Validators.required)))
    // this.exampleForm.get('add').push(new FormGroup({
    //   'add':new FormControl(null,Validators.required)
    // }))
  }
}
