import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  upvotes_: number = 0;
  downvotes_: number = 0;

  upvoteButtonClick() {
    this.upvotes_++;
  }

    downvoteButtonClick() {
    this.downvotes_++;
  }

    constructor() { }

  ngOnInit(): void {
  }

}
