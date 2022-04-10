import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  numberOfVotes: number = 0;
  downvotes_: number = 0;

  upvoteButtonClick() {
    this.numberOfVotes++;
  }
  downvoteButtonClick() {
    this.downvotes_++;
  }

  // votesup(){
  //   return this.upvoteButtonClick
  // }

  // votesdown(){
  //   return this.downvoteButtonClick
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
