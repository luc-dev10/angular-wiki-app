import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();

  term: string = '';

  constructor() {}

  ngOnInit(): void {}

  termOnChange(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }
}
