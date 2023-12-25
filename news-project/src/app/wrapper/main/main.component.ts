import { Component } from '@angular/core';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { UpdateSectionComponent } from './update-section/update-section.component';
import { TitleSectionComponent } from './title-section//title-section.component';
import { SubtitleSectionComponent } from './subtitle-section//subtitle-section.component';
import { SliderComponent } from './slider/slider.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ListSectionComponent } from './list-section/list-section.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeroSectionComponent,
    UpdateSectionComponent,
    TitleSectionComponent,
    SubtitleSectionComponent,
    SliderComponent,
    QuotesComponent,
    ListSectionComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
