import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "o-web-developer",
  templateUrl: "./web-developer.component.html"
})
export class WebDeveloperComponent implements OnInit {
  constructor(private title: Title) {
    this.title.setTitle("Web Developer");
  }

  ngOnInit() {}
}
