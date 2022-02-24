import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor() {}

  // Search method
  search(term: string) {
    console.log('I am who I is', term);
  }
}
