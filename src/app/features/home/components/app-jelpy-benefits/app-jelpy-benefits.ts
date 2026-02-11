import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-jelpy-benefits',
  templateUrl: './app-jelpy-benefits.html',
  styleUrl: './app-jelpy-benefits.scss',
  standalone: false
})
export class AppJelpyBenefits {
  private readonly translate = inject(TranslateService);
  public currentLang: string;

  constructor() {
    // Inicializamos el idioma actual basado en lo que el servicio tenga activo
    this.currentLang = this.translate.currentLang || 'es';
  }
  public benefits = [{
    icon: "flaticon-man",
    title: "Crea tu perfil en segundos",
    info: "Personaliza tu experiencia con tu perfil",
    delay: "0.4s"
  },
  {
    icon: "flaticon-control",
    title: "Guarda tus negocios favoritos",
    info: "Agregalos a tus favoritos y consultalos cuando quieras",
    delay: "0.6s"
  },
  {
    icon: "flaticon-coin",
    title: "Revisa y compara",
    info: "Jelpy te ayuda a comparar precios de productos y servicios de manera sencilla",
    delay: "0.8s"
  },
  {
    icon: "flaticon-success",
    title: "Información clara y actualizada",
    info: "Siempre encontrarás las información mas actual de tus negocios favoritos",
    delay: "1s"
  }, {
    icon: "flaticon-success",
    title: "HOME.HERO_SUBTITLE",
    info: "Siempre encontrarás las información mas actual de tus negocios favoritos",
    delay: "1.2s"
  }]
}
