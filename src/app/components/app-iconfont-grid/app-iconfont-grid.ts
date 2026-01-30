import { Component } from '@angular/core';

@Component({
  selector: 'app-iconfont-grid',
  templateUrl: './app-iconfont-grid.html',
  styleUrl: './app-iconfont-grid.scss',
  standalone: false
})
export class AppIconfontGrid {
  public copyToClipboard(texto: string): void {
    const textoCopiado: string = "<span class='" + texto + "'></span>";
    navigator.clipboard.writeText(textoCopiado)
      .then(() => {
        console.log("Texto copiado correctamente ✅");
      })
      .catch(err => {
        console.error("Error al copiar ❌", err);
      });
  }
}
