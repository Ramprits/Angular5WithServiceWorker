import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "o-human-resource",
  templateUrl: "./human-resource.component.html",
  styleUrls: ["./human-resource.component.scss"]
})
export class HumanResourceComponent implements OnInit {
  constructor(private title: Title) {
    this.title.setTitle("Human Resource");
  }

  ngOnInit() {}
}
