import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home-page/home-page';
import { ComponentsModule } from '../components/components-module';
import { TranslateModule } from '@ngx-translate/core';

const components = [
  HomePage
];

@NgModule({
  declarations: [...components ],
  exports: [...components, TranslateModule],
  imports: [
    CommonModule,
    ComponentsModule,
    TranslateModule
  ]
})
export class PagesModule { }
