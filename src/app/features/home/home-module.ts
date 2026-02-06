import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeContainer } from './components/app-home-container/app-home-container';
import { AppFooterContainer } from '../../core/components/app-footer-container/app-footer-container';
import { AppHeaderContainer } from '../../core/components/app-header-container/app-header-container';
import { TranslateModule } from '@ngx-translate/core';
import { AppJelpyBenefits } from './components/app-jelpy-benefits/app-jelpy-benefits';



@NgModule({
  declarations: [AppHomeContainer, AppJelpyBenefits], //DEclaraciones son los componentes propios del modulo, 
  imports: [ //Importaciones son componentes o modulos que necesita este modulo que son externos haciendo uso de sus componentes EXPORTABLES
    //Modulos
    CommonModule,
    TranslateModule,
    //Standalone
    AppFooterContainer,
    AppHeaderContainer,
  ],
  exports: [AppHomeContainer] // Son los compopnentes que otros modulos pueden hacer uso al importar
})
export class HomeModule { }
