import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-section2",
  templateUrl: "./section2.component.html",
  styleUrls: ["./section2.component.scss"]
})
export class Section2Component implements OnInit {
  images: Images[];
  constructor() {}

  ngOnInit() {
    this.images = [
      { class: "men", text: "Shop Mens Fashion" },
      { class: "women", text: "Shop Womens Fashion" },
      { class: "kids", text: "Shop Kids Fashion" }
    ];
  }
}

interface Images {
  class: string;
  text: string;
}
