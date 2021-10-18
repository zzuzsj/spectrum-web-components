/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import '@lliad-ui/split-button/sp-split-button.js';
import '@lliad-ui/menu/sp-menu-item.js';
import { html } from '@lliad-ui/base';
import { measureFixtureCreation } from '../../../../test/benchmark/helpers.js';

measureFixtureCreation(html`
    <sp-split-button open>
        <sp-menu-item>Action 1</sp-menu-item>
        <sp-menu-item>Action 2</sp-menu-item>
        <sp-menu-item>Action 3</sp-menu-item>
    </sp-split-button>
`);
