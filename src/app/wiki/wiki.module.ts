import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WikiComponent } from './wiki.component';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    WikiComponent,
    PageListComponent,
    SearchBarComponent
  ],
  imports: [CommonModule],
})
export class WikiModule {}
