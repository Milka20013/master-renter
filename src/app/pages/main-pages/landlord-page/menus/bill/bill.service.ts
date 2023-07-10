import { Injectable } from '@angular/core';
import { BillType } from 'src/app/enums/bill-type';
import { Apartment } from 'src/app/models/apartment';
import { Bill } from 'src/app/models/bill';
import { ApartmentService } from '../apartment/apartment.service';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  private _bills: Bill[] = [
    new Bill(
      this.newId(),
      BillType.Electric,
      400,
      new Date('2023/07/30'),
      'You have to pay lmao',
      this.apartmentService.getApartmentById(1)
    ),
  ];
  constructor(private apartmentService: ApartmentService) {}

  public newId(): number {
    let maxId = -1;
    for (let index = 0; index < this._bills?.length; index++) {
      if (maxId < this._bills[index].id) {
        maxId = this._bills[index].id;
      }
    }
    return maxId + 1;
  }
  registerBill(bill: Bill) {
    this._bills.push(bill);
  }

  unRegisterBill(bill: Bill) {
    const index = this._bills.indexOf(bill);
    this._bills.splice(index, 1);
  }

  public get bills() {
    for (let index = 0; index < this._bills.length; index++) {
      this._bills[index].checkStatus();
    }
    return this._bills;
  }

  getBillById(id: number): Bill {
    return this._bills.filter((x) => x.id == id)[0];
  }

  getBills(apartment: Apartment): Bill[] {
    return this.bills.filter((x) => x.apartment == apartment);
  }

  generateRentBill(apartment: Apartment, dueTo: Date): Bill {
    let rentBill = new Bill(
      this.newId(),
      BillType.Rent,
      apartment.rent,
      dueTo,
      'Rent',
      apartment
    );
    this.registerBill(rentBill);
    return rentBill;
  }
}
