import { Component, Input } from '@angular/core';
import { Tenant } from 'src/app/models/tenant';

export interface TenantChartData {
  name: string;
  series: { value: string; name: string }[];
}
@Component({
  selector: 'tenant-chart',
  templateUrl: './tenant-chart.component.html',
  styleUrls: ['./tenant-chart.component.less'],
})
export class TenantChartComponent {
  @Input() tenantData: TenantChartData[] = [];

  public static ConvertTenantsToPlottableData(
    tenants: Tenant[]
  ): TenantChartData[] {
    let tenantData: TenantChartData[] = [];
    let seriesData: { value: string; name: string }[] = [];
    let dates: Date[] = this.GetDateSteps(
      tenants[0].entryDate,
      new Date(Date.now()),
      1000 * 3600 * 24 * 30
    );
    let numbers: number[] = this.GetNumberOfTenantsByDates(tenants, dates);
    for (let i = 0; i < dates.length; i++) {
      seriesData.push({
        value: numbers[i].toString(),
        name: dates[i].toLocaleDateString(),
      });
    }
    tenantData.push({ name: 'Data', series: seriesData });
    return tenantData;
  }

  private static GetDateSteps(start: Date, end: Date, step: number): Date[] {
    let dates: Date[] = [];
    let difference = end.getTime() - start.getTime();
    let newDate = new Date(start);

    for (let i = 0; i < difference / step; i++) {
      dates.push(newDate);
      newDate = this.RoundToMonth(new Date(newDate.getTime() + step));
    }

    return dates;
  }

  private static RoundToMonth(date: Date): Date {
    let upperYear = date.getFullYear();
    let upperMonth = date.getMonth() + 2;
    if (upperMonth == 13) {
      upperMonth = 1;
      upperYear++;
    }
    let upperDate: Date = new Date(
      upperYear.toString() + '/' + upperMonth.toString()
    );
    let lowerDate: Date = new Date(
      date.getFullYear().toString() + '/' + (date.getMonth() + 1).toString()
    );
    if (
      Math.abs(date.getTime() - upperDate.getTime()) <=
      Math.abs(date.getTime() - lowerDate.getTime())
    ) {
      return upperDate;
    } else {
      return lowerDate;
    }
  }

  private static GetNumberOfTenantsByDates(
    tenants: Tenant[],
    dates: Date[]
  ): number[] {
    let numbers: number[] = [];
    let temp: number = 0;
    for (const date of dates) {
      for (const tenant of tenants) {
        if (
          tenant.exitDate.getTime() >= date.getTime() &&
          tenant.entryDate.getTime() <= date.getTime()
        ) {
          temp++;
        }
      }
      numbers.push(temp);
      temp = 0;
    }
    return numbers;
  }

  yAxisFormat(val: number) {
    if (val % 1 == 0) {
      return val.toLocaleString();
    } else {
      return '';
    }
  }
}
