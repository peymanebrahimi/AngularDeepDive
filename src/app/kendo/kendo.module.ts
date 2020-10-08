import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';

const components = [
  DateInputsModule,
  ButtonsModule,
  DropDownsModule,
  InputsModule,
  LayoutModule,
];


@NgModule({

  imports: [components],
  exports: [components]
})
export class KendoModule { }
