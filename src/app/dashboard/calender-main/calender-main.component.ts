import { Input, OnInit, TemplateRef } from '@angular/core';
import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { colors } from '../demo-utils/colors';


@Component({
  selector: 'app-calender-main',
  templateUrl: './calender-main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./calender-main.component.css']
  // styles: [
  //   `
  //     .my-custom-class span {
  //       color: pink !important;
  //     }
  //   `,
  // ],

})
export class CalenderMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  @Input() hourSegmentTemplate!: TemplateRef<any>;


  // events: CalendarEvent[] = [
  //   {
  //     title: 'Has custom class',
  //     color: colors.yellow,
  //     start: new Date(),
  //     cssClass: 'my-custom-class',
  //   },
  // ];

}
