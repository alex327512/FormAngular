import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatListModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatDialogModule,
    MatListModule,
  ],
})
export class MaterialModule {}
