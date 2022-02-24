import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListComponent } from './page-list/page-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WikiComponent } from './wiki.component';
@NgModule({
  declarations: [WikiComponent, PageListComponent, SearchBarComponent],
  imports: [CommonModule],
  exports: [WikiComponent],
})
export class WikiModule {}
