## Description

An `<sp-color-area>` allows users to visually select two properties of a color simultaneously. It's commonly used together with a color slider or color wheel.

### Usage

[![See it on NPM!](https://img.shields.io/npm/v/@iliad-ui/color-area?style=for-the-badge)](https://www.npmjs.com/package/@iliad-ui/color-area)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@iliad-ui/color-area?style=for-the-badge)](https://bundlephobia.com/result?p=@iliad-ui/color-area)
[![Try it on webcomponents.dev](https://img.shields.io/badge/Try%20it%20on-webcomponents.dev-green?style=for-the-badge)](https://webcomponents.dev/edit/collection/fO75441E1Q5ZlI0e9pgq/crxLSSCXLFPpmUsM6GJQ/src/index.ts)

```
yarn add @iliad-ui/color-area
```

Import the side effectful registration of `<sp-color-area>` via:

```
import '@iliad-ui/color-area/sp-color-area.js';
```

When looking to leverage the `ColorArea` base class as a type and/or for extension purposes, do so via:

```
import { ColorArea } from '@iliad-ui/color-area';
```

## Color Formatting

When using the color elements, use `el.color` to access the `color` property, which should manage itself in the colour format supplied. For example, If you supply a color in `rgb()` format, `el.color` should return the color in `rgb()` format, as well. In ColorArea, colours are formatted as hex values.

The current color formats supported are as follows:

-   Hex3, Hex4, Hex6, Hex8
-   HSV, HSVA
-   HSL, HSLA
-   RGB, RGBA
-   Strings (eg "red", "blue")

## Standard

```html
<sp-color-area></sp-color-area>
```

## Variants

### Disabled

An `<sp-color-area>` in a disabled state shows that an input exists, but is not available in that circumstance. This can be used to maintain layout continuity and communicate that the area may become available later.

```html
<sp-color-area disabled></sp-color-area>
```

### Sized

An `<sp-color-area>`’s height and width can be customized appropriately for its context.

```html
<sp-color-area
    style="
        width: var(--spectrum-global-dimension-size-900); 
        height: var(--spectrum-global-dimension-size-900)"
></sp-color-area>
```

## Labels

An `<sp-color-area>` renders accessible labels for each axis: _"saturation"_ and _"luminosity"_.
Specify `label-x` and `label-y` attributes to override these defaults.

The `label` attribute is **deprecated** in favor of separately labeling each axis.

```html
<sp-color-area
    label-x="Color intensity"
    label-y="Color brightness"
></sp-color-area>
```
