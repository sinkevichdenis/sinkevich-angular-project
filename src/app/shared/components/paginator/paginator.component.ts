import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';

interface PageState {
  low: number;
  high: number;
}

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.sass']
})
export class PaginatorComponent {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Input() length: number;
  @Input() pageSize: number;
  @Input() lowValue: number;
  @Input() highValue: number;
  @Output() page: EventEmitter<PageState> = new EventEmitter();

  getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    this.page.emit({low: this.lowValue, high: this.highValue});
    return event;
  }
}
