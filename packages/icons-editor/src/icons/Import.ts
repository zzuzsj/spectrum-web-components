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
export const ImportIcon = (): string | TemplateResult => {
    return html`
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 10.25C4.69665 10.25 4.42318 10.4327 4.30709 10.7129C4.191 10.9932 4.25517 11.3158 4.46967 11.5303L11.4697 18.5303C11.6103 18.6709 11.8011 18.75 12 18.75C12.1989 18.75 12.3897 18.6709 12.5303 18.5303L19.5303 11.5303C19.7448 11.3158 19.809 10.9932 19.6929 10.7129C19.5768 10.4327 19.3033 10.25 19 10.25L15.7635 10.25C15.8214 8.72802 16.0675 7.68207 16.5387 6.78677C17.091 5.73735 17.9926 4.81578 19.4801 3.57613C19.7054 3.38842 19.8006 3.08667 19.7239 2.80368C19.6471 2.52069 19.4125 2.30837 19.1233 2.26017C15.9274 1.72752 13.1974 2.52149 11.2619 4.18052C9.51297 5.67961 8.45958 7.84535 8.27812 10.25H5ZM17.1893 11.75L12 16.9393L6.81066 11.75H9C9.41421 11.75 9.75 11.4142 9.75 11C9.75 8.70145 10.6671 6.66594 12.2381 5.31941C13.4757 4.25857 15.1549 3.5951 17.1908 3.59558C16.3435 4.40203 15.685 5.18813 15.2113 6.08815C14.5062 7.42788 14.25 8.94116 14.25 11C14.25 11.1989 14.329 11.3896 14.4697 11.5303C14.6103 11.6709 14.8011 11.75 15 11.75L17.1893 11.75ZM20 21.75V20.25H4V21.75H20Z"
            />
        </svg>
    `;
};
