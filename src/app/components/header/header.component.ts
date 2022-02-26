import { Component, ViewChild } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  carouselImgs = ['hero-img-1.png', 'hero-img-2.jpg', 'hero-img-3.png'];

  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  @ViewChild('carousel') carousel!: NzCarouselComponent;

  size: NzButtonSize = 'large';
}
