import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Comp2Component } from './comp2/comp2.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PComponent } from './p/p.component';
import { ChangePipe } from './change.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Comp2Component,ReactiveFormsModule,CommonModule,PComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'my-app';
  formgrp !: FormGroup;
  issubmit : boolean = false
  constructor(){
    this.formgrp = new FormGroup({
      name:new FormControl('',[Validators.required]),
      pass:new FormControl('',[Validators.minLength(8)]),
      cpass:new FormControl('',[this.customvalidator])
    })
  }
  customvalidator(control:AbstractControl): { [key: string]: any } | null{
    if(control.get('pass')?.value === control.get('cpass')?.value)
    {
      return null
    }
    else
     return { 'matcherr' : 'password should match' }
  }
  mysubmit(){
    this.issubmit = true 
    if(this.formgrp.valid)
      console.log(this.formgrp.value);
    return 
      
  }
}
