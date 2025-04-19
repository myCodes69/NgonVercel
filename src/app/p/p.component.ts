import { Component } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';

@Component({
  selector: 'app-p',
  templateUrl: './p.component.html',
  styleUrls: ['./p.component.css'],
  imports:[Comp1Component],
  standalone:true
})
export class PComponent {
 public name : string = 'Soumya'
 str !:string
 m1(data:string){
 this.str = data
 }
}
