import { Component, OnInit } from '@angular/core';

enum Category {
  NanoSim = 'NanoSIM',
  ESim = 'ESim'
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name!: string;
  description!: string;
  price!: number
  category!: Category;
  isAvailable!: boolean;
  colors: String[] = ['Graphite', 'Pacific Blue', 'Silver', 'Gold'];
  memory: Array<Number> = [128, 256, 512];

  constructor() { }

  ngOnInit(): void {
    this.name = 'Apple iPhone 12 Pro Max';
    this.description = 'Wi‑Fi 802.11ax (Wi-Fi 6), MIMO 2x2, Bluetooth 5.0, NFC';
    this.price = 50499;
    this.category = Category.NanoSim;
    this.isAvailable = true;
  }

}
