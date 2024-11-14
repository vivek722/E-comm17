import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit {
  Title : string | undefined;
  TreandingTitle="Trending Products"
  Filter : string | undefined;
  FilterData:any[]=[];
  constructor(){}
  ngOnInit(): void {

  }
}
