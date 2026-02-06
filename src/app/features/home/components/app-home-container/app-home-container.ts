import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AppIconfontGrid } from '../../../../shared/components/app-iconfont-grid/app-iconfont-grid';
import { AppHeaderContainer } from "../../../../core/components/app-header-container/app-header-container";
import { AppFooterContainer } from "../../../../core/components/app-footer-container/app-footer-container";

@Component({
  selector: 'app-home-container',
  templateUrl: './app-home-container.html',
  styleUrl: './app-home-container.scss',
  standalone: false
})
export class AppHomeContainer {
  // Inyectamos los servicios necesarios
  private readonly dialog = inject(MatDialog);
  private readonly translate = inject(TranslateService);

  // Propiedad para controlar el idioma en el selector
  public currentLang: string;

  constructor() {
    // Inicializamos el idioma actual basado en lo que el servicio tenga activo
    this.currentLang = this.translate.currentLang || 'es';
  }

  /**
   * Opens Icons Dialog with fixed dimensions for Jelpy branding
   *
   * @returns {void}
   * @author Christian Lira
   * 29/Jan/2026
   */
  public openDialog(): void {
    this.dialog.open(AppIconfontGrid, {
      width: "1000px",
      maxWidth: "1000px",
      height: "500px",
      maxHeight: "500px",
    });
  }



  /**
   * Esta función la mantenemos por si necesitas una lógica extra para el selector
   */
  public openLenguaje(): void {
    // Aquí podrías poner lógica para abrir un modal de idiomas personalizado
  }
}
