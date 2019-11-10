import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-day-sel',
  templateUrl: './day-sel.component.html',
  styleUrls: ['./day-sel.component.scss']
})
export class DaySelComponent implements OnInit {
  @Input() days: Observable<Array<number>>;

  constructor() { }

  ngOnInit() {
  }

}
