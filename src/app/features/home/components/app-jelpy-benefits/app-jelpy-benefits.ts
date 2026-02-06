import { Component } from '@angular/core';

@Component({
  selector: 'app-jelpy-benefits',
  templateUrl: './app-jelpy-benefits.html',
  styleUrl: './app-jelpy-benefits.scss',
  standalone: false
})
export class AppJelpyBenefits {

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
  }, {
    //TODO (Carlos Salas): Rellenar la seccion 4 con info real de Jelpy
    icon: "flaticon-credit-card",
    title: "Make Transaction",
    info: "Feugiat primis ligula risus neque auctor egestas",
    delay: "1s"
  }]
}
