import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [HeaderComponent, HighlightDirective],
  imports: [CommonModule],
  exports: [HeaderComponent, HighlightDirective]
})
export class SharedModule {}
