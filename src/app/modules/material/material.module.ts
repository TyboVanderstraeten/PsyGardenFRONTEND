import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatPasswordStrengthModule
  ],
  exports: [
    MatButtonModule,
    FlexLayoutModule,
    LayoutModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatPasswordStrengthModule
  ]
})
export class MaterialModule { }