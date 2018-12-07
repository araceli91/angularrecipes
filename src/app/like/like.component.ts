import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.scss"]
})
export class LikeComponent implements OnInit {
  @Input() isLiked = false;
  clickedLiked(e: MouseEvent, num) {
    console.log("Click", this.isLiked);
    this.isLiked = !this.isLiked;
    console.log("DopoClick", this.isLiked);
    e.preventDefault();
  }
  constructor() {}

  ngOnInit() {}
}
