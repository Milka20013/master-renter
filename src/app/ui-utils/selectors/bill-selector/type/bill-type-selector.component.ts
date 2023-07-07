import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BillType } from 'src/app/enums/bill-type';

@Component({
  selector: 'bill-type-selector',
  templateUrl: './bill-type-selector.component.html',
})
export class BillTypeSelectorComponent implements OnInit {
  billTypes: string[] = [];
  billType = BillType;
  @Input() selectedType: BillType = BillType.None;

  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  onChanged(event: string) {
    this.onChange.emit(event);
  }

  ngOnInit(): void {
    this.billTypes = this.billTypes = Object.keys(BillType).filter(
      (x) => !!!+x
    );
  }
}
