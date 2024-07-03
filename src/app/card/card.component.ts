import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CardDataInterface } from '../app.component.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  encapsulation: ViewEncapsulation.None, // Added this to make dynamic classes (first-class) work
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  // @Input() title: string = '';

  @Input({ required: true }) cardData: CardDataInterface =
    {} as CardDataInterface;

  @Output() viewCourseEvent = new EventEmitter<CardDataInterface>();

  viewCourse(): void {
    this.viewCourseEvent.emit(this.cardData);
  }
}
