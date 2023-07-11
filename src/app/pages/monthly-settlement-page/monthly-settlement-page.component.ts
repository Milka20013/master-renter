import { Component, Input } from '@angular/core';
import { Bill } from 'src/app/models/bill';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import { BillType } from 'src/app/enums/bill-type';
import { BillStatus } from 'src/app/enums/bill-status';
@Component({
  selector: 'monthly-settlement-page',
  templateUrl: './monthly-settlement-page.component.html',
  styleUrls: ['./monthly-settlement-page.component.less'],
})
export class MonthlySettlementPageComponent {
  @Input() bills: Bill[] = [];

  billType = BillType;
  billStatus = BillStatus;
  exportSettlement() {
    var pdf = new jsPDF();
    domtoimage
      .toPng(<Node>document.getElementById('bill-table'))
      .then(function (dataUrl: string) {
        const imgProps = pdf.getImageProperties(dataUrl);
        pdf.addImage(
          dataUrl,
          'png',
          20,
          30,
          imgProps.width / 4,
          imgProps.height / 4
        );
        pdf.save('monthly-settlement.pdf');
      });
  }
}
