import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle', { static: false })
  title!: ElementRef<HTMLHeadingElement>;

  constructor() {}

  ngAfterViewInit(): void {
    this.title.nativeElement.textContent = 'TopShop';
  }

  ngOnInit(): void {}
}
