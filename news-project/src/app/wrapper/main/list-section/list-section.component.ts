import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-section.component.html',
  styleUrls: ['./list-section.component.css'],
})
export class ListSectionComponent {
  @Input() items: { text: string }[] = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn aliqua. Libero id faucibus nisl tincidunt eget nullam non nisi. Nibh tellus molestie nunc non blandit massa enim nec.',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non nisi. Nibh tellus molestie nunc non blandit massa enim nec.',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non nisi. Nibh tellus molestie nunc non blandit massa enim nec.',
    },
  ];
}
