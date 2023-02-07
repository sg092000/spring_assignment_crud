import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  ConversionForm = new FormGroup({
    inputValue : new FormControl<any>(1),
    from : new FormControl('USD'),
    to : new FormControl('USD')
  })

  result : any = -1;
  convertCurrency()
  {
    if(this.ConversionForm.value.from === 'USD' && this.ConversionForm.value.to === 'USD')
    this.result = this.ConversionForm.value.inputValue!;
    if(this.ConversionForm.value.from === 'USD' && this.ConversionForm.value.to === 'INR')
    this.result = this.ConversionForm.value.inputValue!*80.98;
    if(this.ConversionForm.value.from === 'USD' && this.ConversionForm.value.to === 'CAD')
    this.result = this.ConversionForm.value.inputValue!*1.34;
    if(this.ConversionForm.value.from === 'USD' && this.ConversionForm.value.to === 'JPY')
    this.result = this.ConversionForm.value.inputValue!*129.56;
    if(this.ConversionForm.value.from === 'USD' && this.ConversionForm.value.to === 'EUR')
    this.result = this.ConversionForm.value.inputValue!*0.92;
    
    if(this.ConversionForm.value.from === 'INR' && this.ConversionForm.value.to === 'USD')
    this.result = this.ConversionForm.value.inputValue!*0.012;
    if(this.ConversionForm.value.from === 'INR' && this.ConversionForm.value.to === 'INR')
    this.result = this.ConversionForm.value.inputValue!;
    if(this.ConversionForm.value.from === 'INR' && this.ConversionForm.value.to === 'CAD')
    this.result = this.ConversionForm.value.inputValue!*0.017;
    if(this.ConversionForm.value.from === 'INR' && this.ConversionForm.value.to === 'JPY')
    this.result = this.ConversionForm.value.inputValue!*1.60;
    if(this.ConversionForm.value.from === 'INR' && this.ConversionForm.value.to === 'EUR')
    this.result = this.ConversionForm.value.inputValue!*0.011;

    
    if(this.ConversionForm.value.from === 'CAD' && this.ConversionForm.value.to === 'USD')
    this.result = this.ConversionForm.value.inputValue!*0.75;
    if(this.ConversionForm.value.from === 'CAD' && this.ConversionForm.value.to === 'INR')
    this.result = this.ConversionForm.value.inputValue!*60.46;
    if(this.ConversionForm.value.from === 'CAD' && this.ConversionForm.value.to === 'CAD')
    this.result = this.ConversionForm.value.inputValue!;
    if(this.ConversionForm.value.from === 'CAD' && this.ConversionForm.value.to === 'JPY')
    this.result = this.ConversionForm.value.inputValue!*96.73;
    if(this.ConversionForm.value.from === 'CAD' && this.ConversionForm.value.to === 'EUR')
    this.result = this.ConversionForm.value.inputValue!*0.69;
    
    if(this.ConversionForm.value.from === 'EUR' && this.ConversionForm.value.to === 'USD')
    this.result = this.ConversionForm.value.inputValue!*1.09;
    if(this.ConversionForm.value.from === 'EUR' && this.ConversionForm.value.to === 'INR')
    this.result = this.ConversionForm.value.inputValue!*88.08;
    if(this.ConversionForm.value.from === 'EUR' && this.ConversionForm.value.to === 'CAD')
    this.result = this.ConversionForm.value.inputValue!*1.45;
    if(this.ConversionForm.value.from === 'EUR' && this.ConversionForm.value.to === 'JPY')
    this.result = this.ConversionForm.value.inputValue!*140.92;
    if(this.ConversionForm.value.from === 'EUR' && this.ConversionForm.value.to === 'EUR')
    this.result = this.ConversionForm.value.inputValue!;

    if(this.ConversionForm.value.from === 'JPY' && this.ConversionForm.value.to === 'USD')
    this.result = this.ConversionForm.value.inputValue!*0.0077;
    if(this.ConversionForm.value.from === 'JPY' && this.ConversionForm.value.to === 'INR')
    this.result = this.ConversionForm.value.inputValue!*0.63;
    if(this.ConversionForm.value.from === 'JPY' && this.ConversionForm.value.to === 'CAD')
    this.result = this.ConversionForm.value.inputValue!*0.010;
    if(this.ConversionForm.value.from === 'JPY' && this.ConversionForm.value.to === 'JPY')
    this.result = this.ConversionForm.value.inputValue!;
    if(this.ConversionForm.value.from === 'JPY' && this.ConversionForm.value.to === 'EUR')
    this.result = this.ConversionForm.value.inputValue!*0.0071;
    
  }

}
