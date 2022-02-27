import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs';
import { WikiResponse } from './WikiResponse';
@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor(private httpClient: HttpClient) {}

  // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=space

  // Search method
  search(term: string) {
    let url: string = 'https://en.wikipedia.org/w/api.php';

    return this.httpClient
      .get<WikiResponse>(url, {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
