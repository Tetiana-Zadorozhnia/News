import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subtitle-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subtitle-section.component.html',
  styleUrls: ['./subtitle-section.component.css'],
})
export class SubtitleSectionComponent {
  @Input() subTitle1: { label: string } = { label: 'Підзаголовок' };

  @Input() paragraph: { text: string } = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Libero id faucibus nisl tincidunt eget nullam non nisi.Nibh tellus molestie nunc non blandit massa enim nec.Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.Tellus orci ac auctor augue mauris augue neque gravidain.Nunc mattis enim ut tellus elementum sagittis vitae et. Viverra justo nec ultrices dui sapien eget. Arcu dictum variusduis at consectetur lorem. Diam quam nulla porttitor massa id. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.',
  };

  @Input() violetBlock: { text: string } = {
    text: 'Non blandit massa enim nec. Eleifend donec pretium vulputatesapien nec sagittis aliquam malesuada bibendum. Nibh ipsum consequat nisl vel pretium lectus quam id.',
  };

  @Input() blackAccent: { text: string }[] = [
    { text: 'Виділення в тексті' },
    { text: 'Виділення в тексті' },
  ];

  @Input() dynamicTexts: { text: string }[] = [
    {
      text: 'ullamcorper a lacus vestibulum sed. Netus et malesuada fames acturpis egestas sed tempus urna. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Vel fringilla est ullamcorper egetnulla facilisi. Arcu odio ut sem nulla pharetra diam sit amet nisl. Bibendum est ultricies integer quis auctor elit sed vulputate mi.',
    },
    {
      text: 'ullamcorper a lacus vestibulum sed. Netus et malesuada fames acturpis egestas sed tempus urna. Bibendum arcu vitae elementum curabitur vitae nunc sed velit. Vel fringilla est ullamcorper egetnulla facilisi. Arcu odio ut sem nulla pharetra diam sit amet nisl. Bibendum est ultricies integer quis auctor elit sed vulputate mi.',
    },
  ];
  @Input() subTitle2: { label: string } = { label: 'Підзаголовок' };

  @Input() dynamicParagraph: { text: string } = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Libero id faucibus nisl tincidunt eget nullam non nisi.Nibh tellus molestie nunc non blandit massa enim nec.Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Condimentum vitae sapien pellentesque habitant morbi tristique senectus.Tellus orci ac auctor augue mauris augue neque gravidain.Nunc mattis enim ut tellus elementum sagittis vitae et. Viverra justo nec ultrices dui sapien eget. Arcu dictum variusduis at consectetur lorem. Diam quam nulla porttitor massa id. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.',
  };
}
