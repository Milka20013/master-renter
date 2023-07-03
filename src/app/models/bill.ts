export class Bill {
  type: string;
  amount: number;
  dueTo: Date;
  description: string;
  constructor(type: string, amount: number, dueTo: Date, description: string) {
    this.type = type;
    this.amount = amount;
    this.dueTo = dueTo;
    this.description = description;
  }
}
