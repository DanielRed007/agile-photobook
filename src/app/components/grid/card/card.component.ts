import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardData;
  @Output() cardId = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  sendCardId(value) {
    this.cardId.emit(value);
  }
}
