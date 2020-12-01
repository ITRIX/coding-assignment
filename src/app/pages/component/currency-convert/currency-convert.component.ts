import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.scss']
})
export class CurrencyConvertComponent implements OnInit {
  currencyForm: FormGroup;
  historyDataSet: any[];
  result: string;
  today: Date;
  constructor(private fb: FormBuilder, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.today = new Date();
    this.historyDataSet = [];
    this.currencyForm = this.fb.group({
      currencyText: ['1'],
      from: [],
      to: []
    });
  }

  loadData() {
    const fromValue = this.currencyForm.controls.from.value;
    const toValue = this.currencyForm.controls.to.value;
    const input = this.currencyForm.controls.currencyText.value;
    this.currencyService.convert(fromValue).subscribe((res: any) => {
      this.result = `${input * res.rates[toValue]} ${toValue}`;
      this.historyDataSet.push({
        date: res.date,
        currencyText: `${input} ${fromValue}`,
        convertValue: this.result
      });
    });
  }

  convertCurrency() {
    this.loadData();
  }



}
