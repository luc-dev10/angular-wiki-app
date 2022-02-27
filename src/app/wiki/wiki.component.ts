import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';
import { WikiResponse } from './WikiResponse';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
})
export class WikiComponent implements OnInit {
  pages: {}[] = [];

  constructor(private wikiService: WikiService) {}

  ngOnInit(): void {}

  onTerm(term: string) {
    if (term != null && term != '')
      this.wikiService.search(term).subscribe((pages) => {
        this.pages = pages;
      });
    else this.pages = [];
  }
}
