import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { CardDataInterface } from '../app.component.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None, // Added this to make dynamic classes (first-class) work
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  ngOnChanges(changes: SimpleChanges): void {
    // Trigger changes in (((input - output)))
    // Called on each change made
    console.log('changes: ', changes);
  }

  ngOnInit(): void {
    // Called on initialization only
    console.log('ngOnInit: ', this.cardData.title);
  }

  ngDoCheck(): void {
    // Called afetr initialization and after each change in (input - output)
    // after (OnChanges) and (OnInit)
    // Used if on runtime some changes igonred , so now I should check if they have done.
    //******** Have some performance issues.
  }

  ngAfterContentInit(): void {
    // Called only (one time) after the first time (DoCheck) called.
    // Usually used on sending html content from component to another {Content projection}. (trach it)
  }

  ngAfterContentChecked(): void {
    // usually used with {Content projection}.
    // 1) Called first time after (ngAfterContentInit)
    // 2) Then called each time after (ngDoCheck)
  }

  ngAfterViewInit(): void {
    // Make sure that the current component and it's children views get initialized
    // Called {one time} on (after) views initialization of current component and it's children
  }

  ngAfterViewChecked(): void {
    // Called 1) (one time) after (ngAfterViewInit)
    // 2) Then called each time after (ngAfterContentChecked)
  }

  ngOnDestroy() {
    // Called only when theis component removed from the screen (view).
    // used to avoid memoty leack
    // Used because the grabage collector may did not remove all garbage.
    // ex: remove timers, remove subscriptions, ....
  }

  // ##################################################################################
  // Any thing from here called more than (one time) => {{{Has performance issues}}} ##
  // ##################################################################################

  @Input({ required: true }) title: string = '';
  @Input({ required: true }) cardData: CardDataInterface =
    {} as CardDataInterface;
  @Output() viewCourseEvent = new EventEmitter<CardDataInterface>();

  viewCourse(): void {
    this.viewCourseEvent.emit(this.cardData);
  }

  // Dynamic classess
  getCSSClasses(): string {
    return 'test-class';
  }
}
