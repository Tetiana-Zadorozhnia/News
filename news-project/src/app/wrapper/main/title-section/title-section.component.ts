import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.css'],
})
export class TitleSectionComponent {
  @Input() title: { label: string } = { label: 'Мультибонусний рахунок' };

  @Input() paragraphs: { text: string }[] = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non nisi. Nibh tellus molestie nunc non blandit massa enim nec. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Tellus orci ac auctor augue mauris augue neque gravida in. Nunc mattis enim ut tellus elementum sagittis vitae et. Viverra justo nec ultrices dui sapien eget. Arcu dictum varius duis at consectetur lorem. Diam quam nulla porttitor massa id. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.',
    },
    {
      text: 'Non blandit massa enim nec. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Nibh ipsum consequat nisl vel pretium lectus quam id. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Netus et malesuada fames ac turpis egestas sed tempus urna. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Vel fringilla est ullamcorper eget nulla facilisi. Arcu odio ut sem nulla pharetra diam sit amet nisl. Bibendum est ultricies integer quis auctor elit sed vulputate mi.',
    },
  ];
}
