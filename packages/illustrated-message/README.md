## Description

An `<sp-illustrated-message>` displays an illustration icon and a message, usually in an empty state or on an error page. It is also used inside a DropZone.

### Usage

[![See it on NPM!](https://img.shields.io/npm/v/@iliad-ui/illustrated-message?style=for-the-badge)](https://www.npmjs.com/package/@iliad-ui/illustrated-message)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@iliad-ui/illustrated-message?style=for-the-badge)](https://bundlephobia.com/result?p=@iliad-ui/illustrated-message)
[![Try it on webcomponents.dev](https://img.shields.io/badge/Try%20it%20on-webcomponents.dev-green?style=for-the-badge)](https://webcomponents.dev/edit/collection/fO75441E1Q5ZlI0e9pgq/pUGMQGhJjaNs0KxKxTpU/src/index.ts)

```
yarn add @iliad-ui/illustrated-message
```

Import the side effectful registration of `<sp-illustrated-message>` via:

```
import '@iliad-ui/illustrated-message/sp-illustrated-message.js';
```

When looking to leverage the `IllustratedMessage` base class as a type and/or for extension purposes, do so via:

```
import { IllustratedMessage } from '@iliad-ui/illustrated-message';
```

## Example

```html
<sp-illustrated-message
    heading="Drag and Drop Your File"
    description="This message has italics"
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 103"
        width="150"
        height="103"
        viewBox="0 0 150 103"
    >
        <path
            d="M133.7,8.5h-118c-1.9,0-3.5,1.6-3.5,3.5v27c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5V23.5h119V92c0,0.3-0.2,0.5-0.5,0.5h-118c-0.3,0-0.5-0.2-0.5-0.5V69c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v23c0,1.9,1.6,3.5,3.5,3.5h118c1.9,0,3.5-1.6,3.5-3.5V12C137.2,10.1,135.6,8.5,133.7,8.5z M15.2,21.5V12c0-0.3,0.2-0.5,0.5-0.5h118c0.3,0,0.5,0.2,0.5,0.5v9.5H15.2z M32.6,16.5c0,0.6-0.4,1-1,1h-10c-0.6,0-1-0.4-1-1s0.4-1,1-1h10C32.2,15.5,32.6,15.9,32.6,16.5z M13.6,56.1l-8.6,8.5C4.8,65,4.4,65.1,4,65.1c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l8.6-8.5l-8.6-8.5c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l8.6,8.5l8.6-8.5c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1L15.8,54l8.6,8.5c0.6,0.6,0.6,1.5,0,2.1c-0.3,0.3-0.7,0.4-1.1,0.4c-0.4,0-0.8-0.1-1.1-0.4L13.6,56.1z"
        ></path>
    </svg>
</sp-illustrated-message>
```

## Variants

### CTA variant

In this variant, the description text is not italisized.

```html
<sp-illustrated-message
    heading="Drag and Drop Your File"
    description="This message has no italics"
    cta
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 150 103"
        width="150"
        height="103"
        viewBox="0 0 150 103"
    >
        <path
            d="M133.7,8.5h-118c-1.9,0-3.5,1.6-3.5,3.5v27c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5V23.5h119V92c0,0.3-0.2,0.5-0.5,0.5h-118c-0.3,0-0.5-0.2-0.5-0.5V69c0-0.8-0.7-1.5-1.5-1.5s-1.5,0.7-1.5,1.5v23c0,1.9,1.6,3.5,3.5,3.5h118c1.9,0,3.5-1.6,3.5-3.5V12C137.2,10.1,135.6,8.5,133.7,8.5z M15.2,21.5V12c0-0.3,0.2-0.5,0.5-0.5h118c0.3,0,0.5,0.2,0.5,0.5v9.5H15.2z M32.6,16.5c0,0.6-0.4,1-1,1h-10c-0.6,0-1-0.4-1-1s0.4-1,1-1h10C32.2,15.5,32.6,15.9,32.6,16.5z M13.6,56.1l-8.6,8.5C4.8,65,4.4,65.1,4,65.1c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l8.6-8.5l-8.6-8.5c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l8.6,8.5l8.6-8.5c0.6-0.6,1.5-0.6,2.1,0c0.6,0.6,0.6,1.5,0,2.1L15.8,54l8.6,8.5c0.6,0.6,0.6,1.5,0,2.1c-0.3,0.3-0.7,0.4-1.1,0.4c-0.4,0-0.8-0.1-1.1-0.4L13.6,56.1z"
        ></path>
    </svg>
</sp-illustrated-message>
```

## Content

The popover accepts an svg into its default slot. This svg is displayed as an illustration above the heading and description
