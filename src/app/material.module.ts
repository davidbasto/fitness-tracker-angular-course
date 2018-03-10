import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatCheckboxModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatTabsModule,
         MatCardModule,
         MatSelectModule,
         MatProgressSpinnerModule,
         MatDialogModule,
         MatTableModule,
         MatSortModule,
         MatPaginatorModule,
         MatPaginatorIntl} from '@angular/material';

import { MatPaginatorImplPtBr } from './mat-paginator-intl-pt-br';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorImplPtBr }
  ]
})
export class MaterialModule { }
