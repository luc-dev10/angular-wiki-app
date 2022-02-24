import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
})
export class WikiComponent implements OnInit {
  private wikiService: WikiService;

  constructor(wikiService: WikiService) {
    this.wikiService = wikiService;
  }

  ngOnInit(): void {}

  onTerm(term: string) {
    this.wikiService.search(term);
    console.log(term);
  }
}
