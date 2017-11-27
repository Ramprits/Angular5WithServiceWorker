import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'o-arctech',
  templateUrl: './arctech.component.html'
})
export class ArctechComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Arctech Info Pvt Ltd.');
  }


  ngOnInit() {
  }

}
