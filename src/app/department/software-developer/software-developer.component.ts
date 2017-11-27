import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'o-software-developer',
  templateUrl: './software-developer.component.html'
})
export class SoftwareDeveloperComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Software Developer');
  }

  ngOnInit() {
  }

}
