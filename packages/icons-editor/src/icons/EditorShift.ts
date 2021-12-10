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

import { tag as html, TemplateResult } from '../custom-tag.js';
export { setCustomTemplateLiteralTag } from '../custom-tag.js';
export const EditorShiftIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3.25C12.2073 3.25 12.4054 3.33581 12.5471 3.48704L20.0471 11.487C20.2516 11.7051 20.307 12.0238 20.1882 12.2981C20.0693 12.5725 19.7989 12.75 19.5 12.75H16.25V19C16.25 19.4142 15.9142 19.75 15.5 19.75H8.49999C8.08577 19.75 7.74999 19.4142 7.74999 19V12.75H4.49999C4.20104 12.75 3.93064 12.5725 3.81179 12.2981C3.69295 12.0238 3.74837 11.7051 3.95283 11.487L11.4528 3.48704C11.5946 3.33581 11.7927 3.25 12 3.25ZM6.23116 11.25H8.49999C8.9142 11.25 9.24999 11.5858 9.24999 12V18.25H14.75V12C14.75 11.5858 15.0858 11.25 15.5 11.25H17.7688L12 5.09659L6.23116 11.25Z"
                fill="#1F1F1F"
            />
        </svg>
    `;
};
