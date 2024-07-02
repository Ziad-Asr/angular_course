import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardDataInterface } from '../app.component.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  // @Input() title: string = '';

  @Input({ required: true }) cardData: CardDataInterface =
    {} as CardDataInterface;

  @Output() viewCourseEvent = new EventEmitter<CardDataInterface>();

  viewCourse(course: CardDataInterface): void {
    this.viewCourseEvent.emit(this.cardData);
  }
}
