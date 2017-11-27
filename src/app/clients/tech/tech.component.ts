import { Component, OnInit } from '@angular/core';
import { TechService } from './tech.service';
import { ITech } from './ITech';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'o-tech',
  templateUrl: './tech.component.html'
})
export class TechComponent implements OnInit {
  technologies: ITech[];
  constructor(private title: Title, private texhService: TechService) {
    this.title.setTitle('Technologies');
  }

  ngOnInit() {
    this.getTech();
  }
  getTech() {
    this.texhService.getTech().subscribe(tech => { this.technologies = tech; });
  }
}
