## Description

An `<sp-status-light>` is a great way to convey semantic meaning, such as statuses and categories.

### Usage

[![See it on NPM!](https://img.shields.io/npm/v/@iliad-ui/status-light?style=for-the-badge)](https://www.npmjs.com/package/@iliad-ui/status-light)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@iliad-ui/status-light?style=for-the-badge)](https://bundlephobia.com/result?p=@iliad-ui/status-light)
[![Try it on webcomponents.dev](https://img.shields.io/badge/Try%20it%20on-webcomponents.dev-green?style=for-the-badge)](https://webcomponents.dev/edit/collection/fO75441E1Q5ZlI0e9pgq/9rvftzUUo2pNorfAypRl/src/index.stories.js)

```
yarn add @iliad-ui/status-light
```

Import the side effectful registration of `<sp-status-light>` via:

```
import '@iliad-ui/status-light/sp-status-light.js';
```

When looking to leverage the `StatusLight` base class as a type and/or for extension purposes, do so via:

```
import { StatusLight } from '@iliad-ui/status-light';
```

## Sizes

<sp-tabs selected="m" auto label="Size Attribute Options">
<sp-tab value="s">Small</sp-tab>
<sp-tab-panel value="s">

```html
<sp-status-light size="s" variant="positive">approved</sp-status-light>
```

</sp-tab-panel>
<sp-tab value="m">Medium</sp-tab>
<sp-tab-panel value="m">

```html
<sp-status-light size="m" variant="positive">approved</sp-status-light>
```

</sp-tab-panel>
<sp-tab value="l">Large</sp-tab>
<sp-tab-panel value="l">

```html
<sp-status-light size="l" variant="positive">approved</sp-status-light>
```

</sp-tab-panel>
<sp-tab value="xl">Extra Large</sp-tab>
<sp-tab-panel value="xl">

```html
<sp-status-light size="xl" variant="positive">approved</sp-status-light>
```

</sp-tab-panel>
</sp-tabs>

### Variants

There are many variants to choose from in Spectrum. The `variant`
attribute controls the main variant of the status light, and `neutral` being the default. Following are the supported variants:

-   positive
-   negative
-   notice
-   info
-   neutral
-   yellow
-   fuchsia
-   indigo
-   seafoam
-   chartreuse
-   magenta
-   celery
-   purple

### Disabled

```html
<sp-status-light variant="positive" disabled>disabled</sp-status-light>
```
