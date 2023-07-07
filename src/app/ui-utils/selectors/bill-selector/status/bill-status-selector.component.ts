import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BillStatus } from 'src/app/enums/bill-status';

@Component({
  selector: 'bill-status-selector',
  templateUrl: './bill-status-selector.component.html',
})
export class BillStatusSelectorComponent implements OnInit {
  billStatuses: string[] = [];
  billStatus = BillStatus;
  @Input() selectedStatus: BillStatus = BillStatus.Registered;
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  onChanged(event: string) {
    this.onChange.emit(event);
  }
  ngOnInit(): void {
    this.billStatuses = Object.keys(this.billStatus).filter((x) => !!!+x);
  }
}
