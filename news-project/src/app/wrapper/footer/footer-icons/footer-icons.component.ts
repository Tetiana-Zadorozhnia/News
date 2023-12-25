import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer-icons.component.html',
  styleUrls: ['./footer-icons.component.css'],
})
export class FooterIconsComponent {
  links = [
    { linkSrc: '../assets/icons/icons.svg#icon-linkedin', url: '#' },
    { linkSrc: '../assets/icons/icons.svg#icon-facebook', url: '#' },
    { linkSrc: '../assets/icons/icons.svg#icon-instagram', url: '#' },
  ];
}
