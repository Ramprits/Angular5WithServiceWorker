import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'o-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Porfolio');
  }


  ngOnInit() {
  }

}
