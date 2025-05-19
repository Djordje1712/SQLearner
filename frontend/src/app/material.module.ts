import { NgModule } from '@angular/core';
import { MatButtonModule }     from '@angular/material/button';
import { MatToolbarModule }    from '@angular/material/toolbar';
import { MatIconModule }       from '@angular/material/icon';
import { MatSidenavModule }    from '@angular/material/sidenav';
import { MatTooltipModule }    from '@angular/material/tooltip';
import { MatMenuModule }       from '@angular/material/menu';
import { MatCardModule }       from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule }    from '@angular/material/divider';
import { MatListModule }       from '@angular/material/list';
import { MatInputModule }      from '@angular/material/input';
import { MatFormFieldModule }  from '@angular/material/form-field';

/**
 * MaterialModule imports and exports Angular Material modules.
 * This allows for easy access to commonly used Material components throughout the application.
 * 
 * @module MaterialModule
 */
@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatMenuModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }