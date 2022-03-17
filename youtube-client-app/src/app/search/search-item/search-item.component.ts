import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() toggleSettings: any = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
