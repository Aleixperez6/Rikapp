import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';




const MaterialComponents: any[] | Type<any> | ModuleWithProviders<{}> = [];


@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatChipsModule,

  ],
  exports: [
    MaterialComponents,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatChipsModule,
    
  ]
})
export class MaterialModule { }
