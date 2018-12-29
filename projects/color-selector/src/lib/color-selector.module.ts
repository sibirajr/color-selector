import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { ColorSelectorComponent } from './color-selector.component';

@NgModule({
  imports: [CommonModule, OverlayModule, A11yModule],
  declarations: [ColorSelectorComponent],
  exports: [ColorSelectorComponent]
})
export class ColorSelectorModule {}
