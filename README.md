## color-selector

This is a unique angular color picker where it allows developers/users to input colors to the picker element. It is developed with material CDK(OverlayModule, A11yModule) where page alignments, tabbable contents are taken care of. It supports all color formats such as names, or RGB, HEX, HSL, RGBA, HSLA.

#### Installation

```
$ npm install color-selector
```

Import `ColorSelectorModule` into your AppModule so that your app knows how to render `<app-dialog>`.

```
  import { ColorSelectorModule } from 'color-selector';
...
```

```
imports:[
    ...
...
ColorSelectorModule,
...
],
```

Then your app should look something like this:

```
<color-selector [selectedColor]="IselectedColor" [colors]="Icolors" (colorSelectedEvent)="selColor($event)"></color-selector>
```

```
IselectedColor: string = '#333';

Icolors = [
    '#333',
    '#F44336',
    '#673AB7',
    '#F44337',
    '#673AB8',
    '#F44339',
    '#673A23',
    '#F44365',
    '#673A45',
    '#F44389',
    '#673A09',
    '#F44300',
    '#673A81',
    '#F44567',
    '#673189'
  ];

  selColor(color: string) {
    console.log(color);     -------------selected color emitted by color-selector.
  }
```

#### `[selectedColor]`.

[selectedColor] is an optional string input to the color-selector where it will be useful in setting a color as default selected color when required.

#### `[colors]`.

[colors] is a string array input to the color-selector, which is an array of color(supports almost all formats) to be displayed in color picker element later available for end users to pick.

#### `(colorSelectedEvent)`.

(colorSelectedEvent) is an event emitter from color-selector emitting selected color (string) from the picker.
