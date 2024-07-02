import { Component, EventEmitter, Input, Output } from '@angular/core';
import { testDataInterface } from '../app.component.model';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  title: string = 'test title';

  // Change the title
  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  // Prop drilling
  @Input({ required: true }) testData: testDataInterface =
    {} as testDataInterface;

  // Lifting state up
  @Output() testEventEmmiter = new EventEmitter<string>();
  leftStateUp(): void {
    this.testEventEmmiter.emit(this.title);
  }
}
