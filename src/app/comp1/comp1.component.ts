import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [Comp1Component],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Comp1Component {
@Input() childprop !: string
@Output() evntemit = new EventEmitter<string>
emit(){
 this.evntemit.emit('Value from child')
}
}
