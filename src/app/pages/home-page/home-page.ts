import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AppIconfontGrid } from '../../components/app-iconfont-grid/app-iconfont-grid';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  standalone: false
})
export class HomePage {
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
   * Detects the language change from the select and updates the app.
   * I also save the preference in localStorage so Jelpy remembers it.
   *
   * @param {Event} event - The change event from the select element
   * @returns {void}
   */
  public switchLang(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    
    if (lang) {
      this.translate.use(lang);
      this.currentLang = lang;
      localStorage.setItem('jelpy_lang', lang);
      console.log(`Language switched to: ${lang}`); // Log para debug en desarrollo
    }
  }

  /**
   * Esta función la mantenemos por si necesitas una lógica extra para el selector
   */
  public openLenguaje(): void {
    // Aquí podrías poner lógica para abrir un modal de idiomas personalizado
  }
}