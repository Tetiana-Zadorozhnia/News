import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressComponent } from './address/address.component';
import { FooterIconsComponent } from './footer-icons/footer-icons.component';
import { FooterLogoComponent } from './footer-logo/footer-logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    AddressComponent,
    FooterIconsComponent,
    FooterLogoComponent,
  ],
  template: `footer`,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {}
