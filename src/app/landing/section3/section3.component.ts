import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-section3",
  templateUrl: "./section3.component.html",
  styleUrls: ["./section3.component.scss"]
})
export class Section3Component implements OnInit {
  gallery: Gallery[];

  constructor() {}

  ngOnInit() {
    this.gallery = [
      {
        src:
          "https://images.pexels.com/photos/975668/pexels-photo-975668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        src:
          "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        src:
          "https://images.pexels.com/photos/864938/pexels-photo-864938.png?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        src:
          "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      },
      {
        src:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        src:
          "https://images.pexels.com/photos/1191118/pexels-photo-1191118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      },
      {
        src:
          "https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        src:
          "https://images.pexels.com/photos/12703/pexels-photo-12703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        src:
          "https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ];
  }
}

interface Gallery {
  src: string;
}
