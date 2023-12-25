import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  showBurgerMenu = false;

  toggleBurgerMenu() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }

  @Input() burgerPath: string = '../../assets/icons/icons.svg#icon-burger';
  @Input() logoUrl: string = '../../assets/icons/logo.svg';

  @Input() links: { label: string; url: string }[] = [
    { label: 'Сервіси', url: '#' },
    { label: 'Послуги', url: '#' },
    { label: 'Клієнти', url: '#' },
    { label: 'Новини', url: '#' },
    { label: 'Про нас', url: '#' },
  ];
}
