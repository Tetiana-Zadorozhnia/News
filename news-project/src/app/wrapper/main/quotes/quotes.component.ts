import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent {
  @Input() textParagraph: { text: string }[] = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Libero id faucibus nisl tincidunt eget nullam non nisi. Nibh tellus molestie nunc non blandit massa enim nec. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.',
    },
    {
      text: 'augue neque gravida in. Nunc mattis enim ut tellus elementum sagittis vitae et. Viverra justo nec ultrices dui sapien eget. Arcu dictum varius duis at consectetur lorem. Diam quam nulla porttitor massa id. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.',
    },
  ];

  @Input() violetAccent: { text: string } = {
    text: 'Tellus orci ac auctor augue mauris',
  };

  @Input() quotes: string = '../assets/icons/quote.svg';

  @Input() blackBlock: { text: string } = {
    text: 'Non blandit massa enim nec. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Nibh ipsum consequat nisl vel pretium lectus quam id.',
  };
}
