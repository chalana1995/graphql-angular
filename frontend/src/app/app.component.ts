import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const GET_QUOTES = gql`
{
  quotes {
    quotes {
      _id
      quote
      author
    }
  }
}
`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  quotes: Observable<any>

  constructor(private apollo: Apollo) {}

  ngOnInit() {

  }
}
