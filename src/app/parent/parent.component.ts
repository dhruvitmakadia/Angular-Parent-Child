import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})


export class ParentComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildComponent, { static: false }) child;

  constructor() { }


  parentMsg = 'Msg From parent';
  message: string;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.message = this.child.childMsg;
  }

  viewMsg(e: string) {
    console.log(e);

  }
}
