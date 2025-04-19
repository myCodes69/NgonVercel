import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { ChangePipe } from '../change.pipe';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [Comp2Component],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Comp2Component {
 public val :any[]=[1,2,3]
}
