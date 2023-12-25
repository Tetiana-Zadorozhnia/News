import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-logo.component.html',
  styleUrl: './footer-logo.component.css',
})
export class FooterLogoComponent {
  @Input() logoUrl: string = '../../assets/icons/logo.svg';
}
