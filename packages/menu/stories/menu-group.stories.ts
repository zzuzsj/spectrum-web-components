/*
Copyright 2020 Adobe. All rights reserved.
Copyright 2021 Gaoding. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { html, TemplateResult } from '@iliad-ui/base';

import { MenuGroup } from '..';
import '../sp-menu.js';
import '../sp-menu-divider.js';
import '@iliad-ui/popover/sp-popover.js';
import '@iliad-ui/menu/sp-menu.js';
import '@iliad-ui/menu/sp-menu-item.js';
import '@iliad-ui/menu/sp-menu-divider.js';
import '@iliad-ui/menu/sp-menu-group.js';

export default {
    component: 'sp-menu',
    title: 'Menu Group',
};

export const mixed = (): TemplateResult => {
    let style = 'italic';
    let weight = '700';
    let color = 'blue';
    let decoration = 'overline';
    const styleRules = ({
        style,
        weight,
        color,
        decoration,
    }: {
        style: string;
        weight: string;
        color: string;
        decoration: string;
    }): string => {
        return `
        .style-rule {
            font-weight: ${weight};
            font-style: ${style};
            color: ${color};
            text-decoration: ${decoration};
        }
        `;
    };
    const update = (event: Event): void => {
        const { value, id } = event.target as MenuGroup;
        switch (id) {
            case 'font':
                const values = value.split(',');
                style = values.indexOf('italic') > -1 ? 'italic' : 'normal';
                weight = values.indexOf('bold') > -1 ? '700' : '400';
                break;
            case 'color':
                color = value;
                break;
            case 'decoration':
                decoration = value;
                break;
        }
        (document.querySelector('#output') as HTMLElement).textContent =
            styleRules({
                style,
                weight,
                color,
                decoration,
            });
    };
    return html`
        <style>
            sp-popover {
                position: static;
                float: left;
            }
        </style>
        <sp-popover open>
            <sp-menu label="Style/Color" @change=${update}>
                <sp-menu-group label="Font Style" selects="multiple" id="font">
                    <sp-menu-item value="bold" selected>Bold</sp-menu-item>
                    <sp-menu-item value="italic" selected>Italic</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group label="Text Color" selects="single" id="color">
                    <sp-menu-item value="black">Black</sp-menu-item>
                    <sp-menu-item value="blue" selected>Blue</sp-menu-item>
                    <sp-menu-item value="red">Red</sp-menu-item>
                    <sp-menu-item value="green">Green</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group
                    label="Text Decoration"
                    selects="single"
                    id="decoration"
                >
                    <sp-menu-item value="none">None</sp-menu-item>
                    <sp-menu-item value="overline" selected>
                        Overline
                    </sp-menu-item>
                    <sp-menu-item value="line-through">
                        Line-through
                    </sp-menu-item>
                    <sp-menu-item value="underline">Underline</sp-menu-item>
                </sp-menu-group>
            </sp-menu>
        </sp-popover>
        <pre id="output">
            ${styleRules({ style, weight, color, decoration })}
        </pre
        >
    `;
};

export const inherit = (): TemplateResult => {
    return html`
        <style>
            sp-popover {
                position: static;
                float: left;
            }
        </style>
        <sp-popover open>
            <sp-menu label="Groceries" selects="multiple">
                <sp-menu-group label="Juice" selects="inherit">
                    <sp-menu-item selected>Orange</sp-menu-item>
                    <sp-menu-item selected>Apple</sp-menu-item>
                    <sp-menu-item>Grape</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group label="Vegetables" selects="inherit">
                    <sp-menu-item>Carrots</sp-menu-item>
                    <sp-menu-item selected>Summer Squash</sp-menu-item>
                    <sp-menu-item>Zuccini</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group label="Dry Goods" selects="inherit">
                    <sp-menu-item>Ceral</sp-menu-item>
                    <sp-menu-item selected>Flour</sp-menu-item>
                    <sp-menu-item>Salt</sp-menu-item>
                    <sp-menu-item>Sugar</sp-menu-item>
                </sp-menu-group>
            </sp-menu>
        </sp-popover>
    `;
};
