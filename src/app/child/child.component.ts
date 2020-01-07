import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  childMsg = 'Msg From Child';

  constructor() { }


  @Input() msg: string;
  @Output() sendMsg = new EventEmitter<string>();

  ngOnInit() {

  }

  sendData() {
    this.sendMsg.emit(this.childMsg);
  }

}
