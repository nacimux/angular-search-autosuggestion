import { Component, OnInit } from '@angular/core';
import { ApiService } from '../search/api.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  template: `
  <section class="filter-wrapper">
 <div class="keyword-wrapper">
<input [formControl]="queryField" type="text" id="keyword" placeholder="search for artists..." autofocus/>
  </div>
<ul class="filter-select">
  <li *ngFor="let result of results" class="filter-select-list"><img src="{{result.images['2']?.url}}" alt="" width="50" height="50"><p class="artist-name">
    {{result.name}}</p>

    <span class="tags" *ngFor='let genre of result?.genres  | slice:0:6'>{{genre}}</span>
</ul>
</section>
  
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: any[] = [];
  queryField: FormControl = new FormControl();
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.queryField.valueChanges
    .debounceTime(200)
    .distinctUntilChanged()
    .switchMap((query) =>  this._apiService.search(query))
    .subscribe( result => {  if (result.status === 400) { return; } else { this.results = result.json().artists.items; }
  });
  }
}
