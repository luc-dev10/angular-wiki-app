import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css'],
})
export class WikiComponent implements OnInit {
  pages = [];

  constructor(private wikiService: WikiService) {}

  ngOnInit(): void {}

  onTerm(term: string) {
    this.wikiService.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
      console.log(this.pages);
    });
  }
}
