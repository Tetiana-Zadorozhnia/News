import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-button',
  standalone: true,
  imports: [CommonModule],
  template: `demo-button`,
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.css'],
})
export class DemoButtonComponent {
  @Input() link: { label: string; url: string } = {
    label: 'Демо версія',
    url: '#',
  };

  @Input() eyes: { eyesSrc: string; url: string } = {
    eyesSrc: '../assets/icons/eyes.svg',
    url: '#',
  };
}
