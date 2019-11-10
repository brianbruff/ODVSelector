import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-version-sel',
  templateUrl: './version-sel.component.html',
  styleUrls: ['./version-sel.component.scss']
})
export class VersionSelComponent implements OnInit {
  @Input() versions: Observable<Array<string>>;

  constructor() { }

  ngOnInit() {
  }

}
