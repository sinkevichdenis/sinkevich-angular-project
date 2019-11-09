import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { CpaPayment } from '../../../core/models/cpa-payment.interface';
import { CpaCategory } from '../../../core/models/cpa-category.interface';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.sass']
})
export class HistoryListComponent implements OnChanges {
  @Input() payments$: null | Observable<CpaPayment[]>;
  @Input() categories$: null | Observable<CpaCategory[]>;
  @Input() statusFilter: boolean;
  private categories: CpaCategory[];
  paymentList: any[] = [];

  ngOnChanges() {
    if ( this.categories$ && this.payments$) {
      this.filterStream(this.categories$).subscribe(items => {
        this.categories = items;
        this.payments$ = this.filterStream(this.payments$);
        this.payments$.subscribe(itemsPay => {
          this.separatePayments(itemsPay);
        });
      });
    }
  }

  filterStream(stream: Observable<any[]>): Observable<any[]> {
    return stream.pipe(
      map(items => {
        return items.filter(item => item.status === this.statusFilter);
      })
    );
  }

  getTitle(id: string): string {
    if (this.categories) {
      const elem = this.categories.find(item => {
        return item.id === id;
      });
      return !!elem && elem.title;
    }
  }

  getTotalValue(items: CpaPayment[]) {
    return items.reduce((acc, curr) => {
      return acc + curr.value;
    }, 0);
  }

  private separatePayments(items: CpaPayment[]): void {
    const elem = {};
    items.forEach(item => {
      if (typeof elem[item.catId] === 'undefined') {
        elem[item.catId] = [];
      }
      elem[item.catId].push(item);
    });

    this.paymentList = Object.keys(elem).map( key => elem[key].reverse());
  }
}
