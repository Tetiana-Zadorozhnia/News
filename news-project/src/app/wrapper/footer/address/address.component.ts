import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  contacts = [
    { text: '044 687 56 32', link: 'tel:+380446875632' },
    { text: 'loyaltysystem@gmail.com', link: 'mailto:loyaltysystem@gmail.com' },
    {
      text: 'м. Бровари вул. Козацька 23',
      link: 'https://maps.app.goo.gl/CfNWq3EuKphE1V5k9',
    },
  ];
}
