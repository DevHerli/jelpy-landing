import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_SCROLL_STRATEGY, MatDialog } from '@angular/material/dialog';
import { AppIconfontGrid } from '../../components/app-iconfont-grid/app-iconfont-grid';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  standalone: false
})
export class HomePage {
  readonly dialog = inject(MatDialog);
  /**
   * Opens Icons Dialog
   *
   * @returns {void} returns nothing
   *
   * @author Christian Lira
   * 29/Jan/2026
   */
  openDialog(): void {
    // this.dialog.open(AppIconfontGrid);
    this.dialog.open(AppIconfontGrid, {
      width: "1000px",
      maxWidth: "1000px",
      height: "500px",
      maxHeight: "500px",
    })
  }
}

