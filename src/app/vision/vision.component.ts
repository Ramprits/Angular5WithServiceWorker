import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'o-vision',
  templateUrl: './vision.component.html'
})
export class VisionComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Vision');
  }

  ngOnInit() {
  }

}
