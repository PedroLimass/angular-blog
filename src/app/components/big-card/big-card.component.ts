import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  constructor() { }

  @Input() UrlContet:string = ''
  @Input() Title:string = ''
  @Input() contentText:string = ''
  ngOnInit(): void {
  }

}
