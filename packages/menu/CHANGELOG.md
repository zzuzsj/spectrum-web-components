# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.15.1](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/menu@0.15.0...@iliad-ui/menu@0.15.1) (2021-10-21)

**Note:** Version bump only for package @iliad-ui/menu

# 0.15.0 (2021-10-21)

### Bug Fixes

-   **menu:** cache item parent element to correct disconnecting event dispatch ([f375510](https://github.com/gaoding-inc/iliad-ui/commit/f3755109ebf64623ba4884871ad8f6eb3b02bc33))
-   add "value" slot to sp-menu-item ([e1bd264](https://github.com/gaoding-inc/iliad-ui/commit/e1bd2646a5198d9ef64710ad0a3749606f08c74e))
-   add icon present and icon-only support to Picker ([f6887a3](https://github.com/gaoding-inc/iliad-ui/commit/f6887a34e228473e33893c81017492bf3e8fd6c3))
-   add value/selection checks to the tests and fix up the value logic ([933106f](https://github.com/gaoding-inc/iliad-ui/commit/933106f88dfa99f22fc1046c1395eb53f051b5c4))
-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/gaoding-inc/iliad-ui/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))
-   include default export in the "exports" fields ([f32407d](https://github.com/gaoding-inc/iliad-ui/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/gaoding-inc/iliad-ui/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   simplify focus application in Menu ([6140169](https://github.com/gaoding-inc/iliad-ui/commit/61401699b36298b6f11cc80703aff664cbb867a7))
-   **menu:** allow for settign "selected" async from above ([9d7f622](https://github.com/gaoding-inc/iliad-ui/commit/9d7f6220313278a90d0482f27a507519a77df549))
-   **menu:** ensure active descendant is in view when activated ([6edc351](https://github.com/gaoding-inc/iliad-ui/commit/6edc3518fd305cbd35b74f013546bb32aef7616b))
-   **menu:** manage tabindex and focus entry correctly ([3b1a250](https://github.com/gaoding-inc/iliad-ui/commit/3b1a250c0ec4ad2b3553bbf100c8c7015ff3cbc6))
-   **split-button:** hide "selected" item from menu ([322a966](https://github.com/gaoding-inc/iliad-ui/commit/322a96655855f42b390ba2c94d0b017bf93aebd9))
-   prevent infinite loops when all children are [disabled] ([2deac3d](https://github.com/gaoding-inc/iliad-ui/commit/2deac3d88ea7f2f27e74d60793e253952d0d765f))
-   style clean up ([49e1537](https://github.com/gaoding-inc/iliad-ui/commit/49e15377f3a839d0ed5dc2504dd71396aa156eb5))
-   update role application logic to not overwrite menu\* roles ([94b6aec](https://github.com/gaoding-inc/iliad-ui/commit/94b6aecffc1e5686feab09361d4e07ec3e854726))
-   **menu:** clarify menu internal focus management via preventScroll option ([9ae092c](https://github.com/gaoding-inc/iliad-ui/commit/9ae092c7d09ef9359dbf9ed9373aef0650967f40))
-   **menu:** only scrollIntoView when keyboard navigating ([f4e9278](https://github.com/gaoding-inc/iliad-ui/commit/f4e9278048287a45bba2da25144834b0b8297c66))
-   **menu:** pass current focus visibility to menu items ([2d3bf80](https://github.com/gaoding-inc/iliad-ui/commit/2d3bf8046379fe8caff926af81e62806e77f6a49))
-   address a11y issues raised by updating our dependencies ([4f06477](https://github.com/gaoding-inc/iliad-ui/commit/4f0647782eea7fdd85560e1bcb2f8b892f30bc33))
-   correctly delivery visuals and mouse interactions for litAnchor and extensions ([0ae889a](https://github.com/gaoding-inc/iliad-ui/commit/0ae889a8aab9b3417a021b917dfc817a8310f50f))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/gaoding-inc/iliad-ui/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/gaoding-inc/iliad-ui/commit/1a8d716f2f787deb8d868a78bd28c8e62fe90e21))
-   normalize "event" and "error" argument names ([8d382cd](https://github.com/gaoding-inc/iliad-ui/commit/8d382cdac98282c886f23c4a8d6cf4910c4a606c))
-   remove <sp-menu> usage where deprecated ([387db3b](https://github.com/gaoding-inc/iliad-ui/commit/387db3be95c98ab220e517fe12a4db7a2496fe5f))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/gaoding-inc/iliad-ui/commit/369388f8cc147543891087991c569f849ddb9b38))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/gaoding-inc/iliad-ui/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/gaoding-inc/iliad-ui/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   use icons without "size" values ([3fc7c91](https://github.com/gaoding-inc/iliad-ui/commit/3fc7c91713793a928082eae15fc3d9dec638a31a))
-   **menu:** prevent infinite loop when focus() ([e4e98a3](https://github.com/gaoding-inc/iliad-ui/commit/e4e98a358a1991c1d6048b01e2899dd28d56dc7e))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/gaoding-inc/iliad-ui/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   **dropdown:** improve accessibility ([389d9d9](https://github.com/gaoding-inc/iliad-ui/commit/389d9d94a13bf31e10f58ee498bd848929e9d67c))
-   update side effect listings ([8160d3a](https://github.com/gaoding-inc/iliad-ui/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   **menu:** include all direct dependencies ([aa7327f](https://github.com/gaoding-inc/iliad-ui/commit/aa7327f748b829fa6f6eec2412ac104e9dbeff76))
-   **menu:** support menu item list change in deep decendents ([b2b47f3](https://github.com/gaoding-inc/iliad-ui/commit/b2b47f305cab9720d29b4214b3330b95f33a56d3))

### Features

-   add selects attribute to menu ([bdf2578](https://github.com/gaoding-inc/iliad-ui/commit/bdf25780e56c7b92368904dce2a02f2594c364a2))
-   update lit-\* dependencies, wip ([aad74d6](https://github.com/gaoding-inc/iliad-ui/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/gaoding-inc/iliad-ui/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **action-group:** manage "one" and "multiple" selections ([6fad59e](https://github.com/gaoding-inc/iliad-ui/commit/6fad59e0df1210108fe6b54ab075c0cbd94cae78))
-   **menu:** update spectrum css input ([8c7e18a](https://github.com/gaoding-inc/iliad-ui/commit/8c7e18ac16f2747bd2f10173bcac0d5e53a0bcac))
-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/gaoding-inc/iliad-ui/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))
-   add screenshot regression testing to CI ([8205dfe](https://github.com/gaoding-inc/iliad-ui/commit/8205dfe33c725e13f74f411779c2ff3b6061a913))
-   allow dir management by sp-theme elements ([2d10158](https://github.com/gaoding-inc/iliad-ui/commit/2d1015883bc0c3a03862c0de8b4d996cd954291f))
-   leverage "exports" field in package.json ([321abd7](https://github.com/gaoding-inc/iliad-ui/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/gaoding-inc/iliad-ui/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))
-   use latest exports specification ([a7ecf4b](https://github.com/gaoding-inc/iliad-ui/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/gaoding-inc/iliad-ui/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **overlay:** manage focus throwing and tab trapping ([27a0b53](https://github.com/gaoding-inc/iliad-ui/commit/27a0b53ea94d19bb18b7d3f89763b06dc1b42b59))
-   **split-button:** add split-button pattern ([4833a59](https://github.com/gaoding-inc/iliad-ui/commit/4833a598bb3da3552d194586350a3888dba79543))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/gaoding-inc/iliad-ui/commit/11c6fc77960de8e57dd9c49bb7669df689f0ebaa))
-   use @adobe/spectrum-css@2.15.1 ([3918888](https://github.com/gaoding-inc/iliad-ui/commit/39188887afad9bec52ef48d4e22596f9b757a9fe))

### Performance Improvements

-   reorganize inheritance and composition in Menu Items ([d96ccb6](https://github.com/gaoding-inc/iliad-ui/commit/d96ccb621833277444d69535126c3669343c2eaf))
-   use "sideEffects" listing in package.json ([7271614](https://github.com/gaoding-inc/iliad-ui/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))
-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/gaoding-inc/iliad-ui/commit/cc2bd0accd643c2f35cbf1ba809b54f52c25628d))

### Reverts

-   Revert "chore: release new versions" ([a6d655d](https://github.com/gaoding-inc/iliad-ui/commit/a6d655d1435ee6427a3778b89f1a6cf9fe4beb9d))

## [0.14.3](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/menu@0.14.2...@iliad-ui/menu@0.14.3) (2021-10-20)

**Note:** Version bump only for package @iliad-ui/menu

## [0.14.3-alpha.0](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/menu@0.14.2...@iliad-ui/menu@0.14.3-alpha.0) (2021-10-20)

**Note:** Version bump only for package @iliad-ui/menu

## [0.14.2](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/menu@0.14.1...@iliad-ui/menu@0.14.2) (2021-10-20)

**Note:** Version bump only for package @iliad-ui/menu

## [0.14.2](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/menu@0.14.1...@iliad-ui/menu@0.14.2) (2021-10-19)

**Note:** Version bump only for package @iliad-ui/menu

## [0.14.1](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/menu@0.14.0...@iliad-ui/menu@0.14.1) (2021-10-19)

**Note:** Version bump only for package @iliad-ui/menu

## [0.14.1](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/menu@0.14.0...@iliad-ui/menu@0.14.1) (2021-10-18)

**Note:** Version bump only for package @iliad-ui/menu

# 0.14.0 (2021-10-18)

### Bug Fixes

-   **menu:** cache item parent element to correct disconnecting event dispatch ([f375510](https://github.com/gaoding-inc/iliad-ui/commit/f3755109ebf64623ba4884871ad8f6eb3b02bc33))
-   add "value" slot to sp-menu-item ([e1bd264](https://github.com/gaoding-inc/iliad-ui/commit/e1bd2646a5198d9ef64710ad0a3749606f08c74e))
-   add icon present and icon-only support to Picker ([f6887a3](https://github.com/gaoding-inc/iliad-ui/commit/f6887a34e228473e33893c81017492bf3e8fd6c3))
-   add value/selection checks to the tests and fix up the value logic ([933106f](https://github.com/gaoding-inc/iliad-ui/commit/933106f88dfa99f22fc1046c1395eb53f051b5c4))
-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/gaoding-inc/iliad-ui/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))
-   include default export in the "exports" fields ([f32407d](https://github.com/gaoding-inc/iliad-ui/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/gaoding-inc/iliad-ui/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   simplify focus application in Menu ([6140169](https://github.com/gaoding-inc/iliad-ui/commit/61401699b36298b6f11cc80703aff664cbb867a7))
-   **menu:** allow for settign "selected" async from above ([9d7f622](https://github.com/gaoding-inc/iliad-ui/commit/9d7f6220313278a90d0482f27a507519a77df549))
-   **menu:** ensure active descendant is in view when activated ([6edc351](https://github.com/gaoding-inc/iliad-ui/commit/6edc3518fd305cbd35b74f013546bb32aef7616b))
-   **menu:** manage tabindex and focus entry correctly ([3b1a250](https://github.com/gaoding-inc/iliad-ui/commit/3b1a250c0ec4ad2b3553bbf100c8c7015ff3cbc6))
-   **split-button:** hide "selected" item from menu ([322a966](https://github.com/gaoding-inc/iliad-ui/commit/322a96655855f42b390ba2c94d0b017bf93aebd9))
-   prevent infinite loops when all children are [disabled] ([2deac3d](https://github.com/gaoding-inc/iliad-ui/commit/2deac3d88ea7f2f27e74d60793e253952d0d765f))
-   style clean up ([49e1537](https://github.com/gaoding-inc/iliad-ui/commit/49e15377f3a839d0ed5dc2504dd71396aa156eb5))
-   update role application logic to not overwrite menu\* roles ([94b6aec](https://github.com/gaoding-inc/iliad-ui/commit/94b6aecffc1e5686feab09361d4e07ec3e854726))
-   **menu:** clarify menu internal focus management via preventScroll option ([9ae092c](https://github.com/gaoding-inc/iliad-ui/commit/9ae092c7d09ef9359dbf9ed9373aef0650967f40))
-   **menu:** only scrollIntoView when keyboard navigating ([f4e9278](https://github.com/gaoding-inc/iliad-ui/commit/f4e9278048287a45bba2da25144834b0b8297c66))
-   **menu:** pass current focus visibility to menu items ([2d3bf80](https://github.com/gaoding-inc/iliad-ui/commit/2d3bf8046379fe8caff926af81e62806e77f6a49))
-   address a11y issues raised by updating our dependencies ([4f06477](https://github.com/gaoding-inc/iliad-ui/commit/4f0647782eea7fdd85560e1bcb2f8b892f30bc33))
-   correctly delivery visuals and mouse interactions for litAnchor and extensions ([0ae889a](https://github.com/gaoding-inc/iliad-ui/commit/0ae889a8aab9b3417a021b917dfc817a8310f50f))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/gaoding-inc/iliad-ui/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/gaoding-inc/iliad-ui/commit/1a8d716f2f787deb8d868a78bd28c8e62fe90e21))
-   normalize "event" and "error" argument names ([8d382cd](https://github.com/gaoding-inc/iliad-ui/commit/8d382cdac98282c886f23c4a8d6cf4910c4a606c))
-   remove <sp-menu> usage where deprecated ([387db3b](https://github.com/gaoding-inc/iliad-ui/commit/387db3be95c98ab220e517fe12a4db7a2496fe5f))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/gaoding-inc/iliad-ui/commit/369388f8cc147543891087991c569f849ddb9b38))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/gaoding-inc/iliad-ui/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/gaoding-inc/iliad-ui/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   use icons without "size" values ([3fc7c91](https://github.com/gaoding-inc/iliad-ui/commit/3fc7c91713793a928082eae15fc3d9dec638a31a))
-   **menu:** prevent infinite loop when focus() ([e4e98a3](https://github.com/gaoding-inc/iliad-ui/commit/e4e98a358a1991c1d6048b01e2899dd28d56dc7e))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/gaoding-inc/iliad-ui/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   **dropdown:** improve accessibility ([389d9d9](https://github.com/gaoding-inc/iliad-ui/commit/389d9d94a13bf31e10f58ee498bd848929e9d67c))
-   update side effect listings ([8160d3a](https://github.com/gaoding-inc/iliad-ui/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   **menu:** include all direct dependencies ([aa7327f](https://github.com/gaoding-inc/iliad-ui/commit/aa7327f748b829fa6f6eec2412ac104e9dbeff76))
-   **menu:** support menu item list change in deep decendents ([b2b47f3](https://github.com/gaoding-inc/iliad-ui/commit/b2b47f305cab9720d29b4214b3330b95f33a56d3))

### Features

-   add selects attribute to menu ([bdf2578](https://github.com/gaoding-inc/iliad-ui/commit/bdf25780e56c7b92368904dce2a02f2594c364a2))
-   update lit-\* dependencies, wip ([aad74d6](https://github.com/gaoding-inc/iliad-ui/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/gaoding-inc/iliad-ui/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **action-group:** manage "one" and "multiple" selections ([6fad59e](https://github.com/gaoding-inc/iliad-ui/commit/6fad59e0df1210108fe6b54ab075c0cbd94cae78))
-   **menu:** update spectrum css input ([8c7e18a](https://github.com/gaoding-inc/iliad-ui/commit/8c7e18ac16f2747bd2f10173bcac0d5e53a0bcac))
-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/gaoding-inc/iliad-ui/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))
-   add screenshot regression testing to CI ([8205dfe](https://github.com/gaoding-inc/iliad-ui/commit/8205dfe33c725e13f74f411779c2ff3b6061a913))
-   allow dir management by sp-theme elements ([2d10158](https://github.com/gaoding-inc/iliad-ui/commit/2d1015883bc0c3a03862c0de8b4d996cd954291f))
-   leverage "exports" field in package.json ([321abd7](https://github.com/gaoding-inc/iliad-ui/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/gaoding-inc/iliad-ui/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))
-   use latest exports specification ([a7ecf4b](https://github.com/gaoding-inc/iliad-ui/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/gaoding-inc/iliad-ui/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **overlay:** manage focus throwing and tab trapping ([27a0b53](https://github.com/gaoding-inc/iliad-ui/commit/27a0b53ea94d19bb18b7d3f89763b06dc1b42b59))
-   **split-button:** add split-button pattern ([4833a59](https://github.com/gaoding-inc/iliad-ui/commit/4833a598bb3da3552d194586350a3888dba79543))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/gaoding-inc/iliad-ui/commit/11c6fc77960de8e57dd9c49bb7669df689f0ebaa))
-   use @adobe/spectrum-css@2.15.1 ([3918888](https://github.com/gaoding-inc/iliad-ui/commit/39188887afad9bec52ef48d4e22596f9b757a9fe))

### Performance Improvements

-   reorganize inheritance and composition in Menu Items ([d96ccb6](https://github.com/gaoding-inc/iliad-ui/commit/d96ccb621833277444d69535126c3669343c2eaf))
-   use "sideEffects" listing in package.json ([7271614](https://github.com/gaoding-inc/iliad-ui/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))
-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/gaoding-inc/iliad-ui/commit/cc2bd0accd643c2f35cbf1ba809b54f52c25628d))

### Reverts

-   Revert "chore: release new versions" ([a6d655d](https://github.com/gaoding-inc/iliad-ui/commit/a6d655d1435ee6427a3778b89f1a6cf9fe4beb9d))

# 0.13.0 (2021-10-18)

### Bug Fixes

-   **menu:** cache item parent element to correct disconnecting event dispatch ([f375510](https://github.com/gaoding-inc/iliad-ui/commit/f3755109ebf64623ba4884871ad8f6eb3b02bc33))
-   add "value" slot to sp-menu-item ([e1bd264](https://github.com/gaoding-inc/iliad-ui/commit/e1bd2646a5198d9ef64710ad0a3749606f08c74e))
-   add icon present and icon-only support to Picker ([f6887a3](https://github.com/gaoding-inc/iliad-ui/commit/f6887a34e228473e33893c81017492bf3e8fd6c3))
-   add value/selection checks to the tests and fix up the value logic ([933106f](https://github.com/gaoding-inc/iliad-ui/commit/933106f88dfa99f22fc1046c1395eb53f051b5c4))
-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/gaoding-inc/iliad-ui/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))
-   include default export in the "exports" fields ([f32407d](https://github.com/gaoding-inc/iliad-ui/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/gaoding-inc/iliad-ui/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   simplify focus application in Menu ([6140169](https://github.com/gaoding-inc/iliad-ui/commit/61401699b36298b6f11cc80703aff664cbb867a7))
-   **menu:** allow for settign "selected" async from above ([9d7f622](https://github.com/gaoding-inc/iliad-ui/commit/9d7f6220313278a90d0482f27a507519a77df549))
-   **menu:** ensure active descendant is in view when activated ([6edc351](https://github.com/gaoding-inc/iliad-ui/commit/6edc3518fd305cbd35b74f013546bb32aef7616b))
-   **menu:** manage tabindex and focus entry correctly ([3b1a250](https://github.com/gaoding-inc/iliad-ui/commit/3b1a250c0ec4ad2b3553bbf100c8c7015ff3cbc6))
-   **split-button:** hide "selected" item from menu ([322a966](https://github.com/gaoding-inc/iliad-ui/commit/322a96655855f42b390ba2c94d0b017bf93aebd9))
-   prevent infinite loops when all children are [disabled] ([2deac3d](https://github.com/gaoding-inc/iliad-ui/commit/2deac3d88ea7f2f27e74d60793e253952d0d765f))
-   style clean up ([49e1537](https://github.com/gaoding-inc/iliad-ui/commit/49e15377f3a839d0ed5dc2504dd71396aa156eb5))
-   update role application logic to not overwrite menu\* roles ([94b6aec](https://github.com/gaoding-inc/iliad-ui/commit/94b6aecffc1e5686feab09361d4e07ec3e854726))
-   **menu:** clarify menu internal focus management via preventScroll option ([9ae092c](https://github.com/gaoding-inc/iliad-ui/commit/9ae092c7d09ef9359dbf9ed9373aef0650967f40))
-   **menu:** only scrollIntoView when keyboard navigating ([f4e9278](https://github.com/gaoding-inc/iliad-ui/commit/f4e9278048287a45bba2da25144834b0b8297c66))
-   **menu:** pass current focus visibility to menu items ([2d3bf80](https://github.com/gaoding-inc/iliad-ui/commit/2d3bf8046379fe8caff926af81e62806e77f6a49))
-   address a11y issues raised by updating our dependencies ([4f06477](https://github.com/gaoding-inc/iliad-ui/commit/4f0647782eea7fdd85560e1bcb2f8b892f30bc33))
-   correctly delivery visuals and mouse interactions for litAnchor and extensions ([0ae889a](https://github.com/gaoding-inc/iliad-ui/commit/0ae889a8aab9b3417a021b917dfc817a8310f50f))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/gaoding-inc/iliad-ui/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/gaoding-inc/iliad-ui/commit/1a8d716f2f787deb8d868a78bd28c8e62fe90e21))
-   normalize "event" and "error" argument names ([8d382cd](https://github.com/gaoding-inc/iliad-ui/commit/8d382cdac98282c886f23c4a8d6cf4910c4a606c))
-   remove <sp-menu> usage where deprecated ([387db3b](https://github.com/gaoding-inc/iliad-ui/commit/387db3be95c98ab220e517fe12a4db7a2496fe5f))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/gaoding-inc/iliad-ui/commit/369388f8cc147543891087991c569f849ddb9b38))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/gaoding-inc/iliad-ui/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/gaoding-inc/iliad-ui/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   use icons without "size" values ([3fc7c91](https://github.com/gaoding-inc/iliad-ui/commit/3fc7c91713793a928082eae15fc3d9dec638a31a))
-   **menu:** prevent infinite loop when focus() ([e4e98a3](https://github.com/gaoding-inc/iliad-ui/commit/e4e98a358a1991c1d6048b01e2899dd28d56dc7e))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/gaoding-inc/iliad-ui/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   **dropdown:** improve accessibility ([389d9d9](https://github.com/gaoding-inc/iliad-ui/commit/389d9d94a13bf31e10f58ee498bd848929e9d67c))
-   update side effect listings ([8160d3a](https://github.com/gaoding-inc/iliad-ui/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   **menu:** include all direct dependencies ([aa7327f](https://github.com/gaoding-inc/iliad-ui/commit/aa7327f748b829fa6f6eec2412ac104e9dbeff76))
-   **menu:** support menu item list change in deep decendents ([b2b47f3](https://github.com/gaoding-inc/iliad-ui/commit/b2b47f305cab9720d29b4214b3330b95f33a56d3))

### Features

-   add selects attribute to menu ([bdf2578](https://github.com/gaoding-inc/iliad-ui/commit/bdf25780e56c7b92368904dce2a02f2594c364a2))
-   update lit-\* dependencies, wip ([aad74d6](https://github.com/gaoding-inc/iliad-ui/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/gaoding-inc/iliad-ui/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **action-group:** manage "one" and "multiple" selections ([6fad59e](https://github.com/gaoding-inc/iliad-ui/commit/6fad59e0df1210108fe6b54ab075c0cbd94cae78))
-   **menu:** update spectrum css input ([8c7e18a](https://github.com/gaoding-inc/iliad-ui/commit/8c7e18ac16f2747bd2f10173bcac0d5e53a0bcac))
-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/gaoding-inc/iliad-ui/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))
-   add screenshot regression testing to CI ([8205dfe](https://github.com/gaoding-inc/iliad-ui/commit/8205dfe33c725e13f74f411779c2ff3b6061a913))
-   allow dir management by sp-theme elements ([2d10158](https://github.com/gaoding-inc/iliad-ui/commit/2d1015883bc0c3a03862c0de8b4d996cd954291f))
-   leverage "exports" field in package.json ([321abd7](https://github.com/gaoding-inc/iliad-ui/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/gaoding-inc/iliad-ui/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))
-   use latest exports specification ([a7ecf4b](https://github.com/gaoding-inc/iliad-ui/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/gaoding-inc/iliad-ui/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **overlay:** manage focus throwing and tab trapping ([27a0b53](https://github.com/gaoding-inc/iliad-ui/commit/27a0b53ea94d19bb18b7d3f89763b06dc1b42b59))
-   **split-button:** add split-button pattern ([4833a59](https://github.com/gaoding-inc/iliad-ui/commit/4833a598bb3da3552d194586350a3888dba79543))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/gaoding-inc/iliad-ui/commit/11c6fc77960de8e57dd9c49bb7669df689f0ebaa))
-   use @adobe/spectrum-css@2.15.1 ([3918888](https://github.com/gaoding-inc/iliad-ui/commit/39188887afad9bec52ef48d4e22596f9b757a9fe))

### Performance Improvements

-   reorganize inheritance and composition in Menu Items ([d96ccb6](https://github.com/gaoding-inc/iliad-ui/commit/d96ccb621833277444d69535126c3669343c2eaf))
-   use "sideEffects" listing in package.json ([7271614](https://github.com/gaoding-inc/iliad-ui/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))
-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/gaoding-inc/iliad-ui/commit/cc2bd0accd643c2f35cbf1ba809b54f52c25628d))

### Reverts

-   Revert "chore: release new versions" ([a6d655d](https://github.com/gaoding-inc/iliad-ui/commit/a6d655d1435ee6427a3778b89f1a6cf9fe4beb9d))

## [0.12.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.12.0...@iliad-ui/menu@0.12.1) (2021-10-15)

**Note:** Version bump only for package @iliad-ui/menu

# 0.12.0 (2021-10-14)

### Bug Fixes

-   **menu:** cache item parent element to correct disconnecting event dispatch ([f375510](https://github.com/adobe/spectrum-web-components/commit/f3755109ebf64623ba4884871ad8f6eb3b02bc33))
-   add "value" slot to sp-menu-item ([e1bd264](https://github.com/adobe/spectrum-web-components/commit/e1bd2646a5198d9ef64710ad0a3749606f08c74e))
-   add icon present and icon-only support to Picker ([f6887a3](https://github.com/adobe/spectrum-web-components/commit/f6887a34e228473e33893c81017492bf3e8fd6c3))
-   add value/selection checks to the tests and fix up the value logic ([933106f](https://github.com/adobe/spectrum-web-components/commit/933106f88dfa99f22fc1046c1395eb53f051b5c4))
-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/adobe/spectrum-web-components/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))
-   include default export in the "exports" fields ([f32407d](https://github.com/adobe/spectrum-web-components/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/adobe/spectrum-web-components/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   simplify focus application in Menu ([6140169](https://github.com/adobe/spectrum-web-components/commit/61401699b36298b6f11cc80703aff664cbb867a7))
-   **menu:** allow for settign "selected" async from above ([9d7f622](https://github.com/adobe/spectrum-web-components/commit/9d7f6220313278a90d0482f27a507519a77df549))
-   **menu:** ensure active descendant is in view when activated ([6edc351](https://github.com/adobe/spectrum-web-components/commit/6edc3518fd305cbd35b74f013546bb32aef7616b))
-   **menu:** manage tabindex and focus entry correctly ([3b1a250](https://github.com/adobe/spectrum-web-components/commit/3b1a250c0ec4ad2b3553bbf100c8c7015ff3cbc6))
-   **split-button:** hide "selected" item from menu ([322a966](https://github.com/adobe/spectrum-web-components/commit/322a96655855f42b390ba2c94d0b017bf93aebd9))
-   prevent infinite loops when all children are [disabled] ([2deac3d](https://github.com/adobe/spectrum-web-components/commit/2deac3d88ea7f2f27e74d60793e253952d0d765f))
-   style clean up ([49e1537](https://github.com/adobe/spectrum-web-components/commit/49e15377f3a839d0ed5dc2504dd71396aa156eb5))
-   update role application logic to not overwrite menu\* roles ([94b6aec](https://github.com/adobe/spectrum-web-components/commit/94b6aecffc1e5686feab09361d4e07ec3e854726))
-   **menu:** clarify menu internal focus management via preventScroll option ([9ae092c](https://github.com/adobe/spectrum-web-components/commit/9ae092c7d09ef9359dbf9ed9373aef0650967f40))
-   **menu:** only scrollIntoView when keyboard navigating ([f4e9278](https://github.com/adobe/spectrum-web-components/commit/f4e9278048287a45bba2da25144834b0b8297c66))
-   **menu:** pass current focus visibility to menu items ([2d3bf80](https://github.com/adobe/spectrum-web-components/commit/2d3bf8046379fe8caff926af81e62806e77f6a49))
-   address a11y issues raised by updating our dependencies ([4f06477](https://github.com/adobe/spectrum-web-components/commit/4f0647782eea7fdd85560e1bcb2f8b892f30bc33))
-   correctly delivery visuals and mouse interactions for litAnchor and extensions ([0ae889a](https://github.com/adobe/spectrum-web-components/commit/0ae889a8aab9b3417a021b917dfc817a8310f50f))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/adobe/spectrum-web-components/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/adobe/spectrum-web-components/commit/1a8d716f2f787deb8d868a78bd28c8e62fe90e21))
-   normalize "event" and "error" argument names ([8d382cd](https://github.com/adobe/spectrum-web-components/commit/8d382cdac98282c886f23c4a8d6cf4910c4a606c))
-   remove <sp-menu> usage where deprecated ([387db3b](https://github.com/adobe/spectrum-web-components/commit/387db3be95c98ab220e517fe12a4db7a2496fe5f))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/adobe/spectrum-web-components/commit/369388f8cc147543891087991c569f849ddb9b38))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/adobe/spectrum-web-components/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/adobe/spectrum-web-components/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   use icons without "size" values ([3fc7c91](https://github.com/adobe/spectrum-web-components/commit/3fc7c91713793a928082eae15fc3d9dec638a31a))
-   **menu:** prevent infinite loop when focus() ([e4e98a3](https://github.com/adobe/spectrum-web-components/commit/e4e98a358a1991c1d6048b01e2899dd28d56dc7e))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/adobe/spectrum-web-components/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   **dropdown:** improve accessibility ([389d9d9](https://github.com/adobe/spectrum-web-components/commit/389d9d94a13bf31e10f58ee498bd848929e9d67c))
-   update side effect listings ([8160d3a](https://github.com/adobe/spectrum-web-components/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   **menu:** include all direct dependencies ([aa7327f](https://github.com/adobe/spectrum-web-components/commit/aa7327f748b829fa6f6eec2412ac104e9dbeff76))
-   **menu:** support menu item list change in deep decendents ([b2b47f3](https://github.com/adobe/spectrum-web-components/commit/b2b47f305cab9720d29b4214b3330b95f33a56d3))

### Features

-   add selects attribute to menu ([bdf2578](https://github.com/adobe/spectrum-web-components/commit/bdf25780e56c7b92368904dce2a02f2594c364a2))
-   update lit-\* dependencies, wip ([aad74d6](https://github.com/adobe/spectrum-web-components/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/adobe/spectrum-web-components/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **action-group:** manage "one" and "multiple" selections ([6fad59e](https://github.com/adobe/spectrum-web-components/commit/6fad59e0df1210108fe6b54ab075c0cbd94cae78))
-   **menu:** update spectrum css input ([8c7e18a](https://github.com/adobe/spectrum-web-components/commit/8c7e18ac16f2747bd2f10173bcac0d5e53a0bcac))
-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/adobe/spectrum-web-components/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))
-   add screenshot regression testing to CI ([8205dfe](https://github.com/adobe/spectrum-web-components/commit/8205dfe33c725e13f74f411779c2ff3b6061a913))
-   allow dir management by sp-theme elements ([2d10158](https://github.com/adobe/spectrum-web-components/commit/2d1015883bc0c3a03862c0de8b4d996cd954291f))
-   leverage "exports" field in package.json ([321abd7](https://github.com/adobe/spectrum-web-components/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/adobe/spectrum-web-components/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))
-   use latest exports specification ([a7ecf4b](https://github.com/adobe/spectrum-web-components/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/adobe/spectrum-web-components/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **overlay:** manage focus throwing and tab trapping ([27a0b53](https://github.com/adobe/spectrum-web-components/commit/27a0b53ea94d19bb18b7d3f89763b06dc1b42b59))
-   **split-button:** add split-button pattern ([4833a59](https://github.com/adobe/spectrum-web-components/commit/4833a598bb3da3552d194586350a3888dba79543))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/adobe/spectrum-web-components/commit/11c6fc77960de8e57dd9c49bb7669df689f0ebaa))
-   use @adobe/spectrum-css@2.15.1 ([3918888](https://github.com/adobe/spectrum-web-components/commit/39188887afad9bec52ef48d4e22596f9b757a9fe))

### Performance Improvements

-   reorganize inheritance and composition in Menu Items ([d96ccb6](https://github.com/adobe/spectrum-web-components/commit/d96ccb621833277444d69535126c3669343c2eaf))
-   use "sideEffects" listing in package.json ([7271614](https://github.com/adobe/spectrum-web-components/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))
-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/adobe/spectrum-web-components/commit/cc2bd0accd643c2f35cbf1ba809b54f52c25628d))

### Reverts

-   Revert "chore: release new versions" ([a6d655d](https://github.com/adobe/spectrum-web-components/commit/a6d655d1435ee6427a3778b89f1a6cf9fe4beb9d))

# [0.11.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.9.6...@iliad-ui/menu@0.11.0) (2021-10-14)

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/adobe/spectrum-web-components/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))

# [0.10.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.9.6...@iliad-ui/menu@0.10.0) (2021-10-14)

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/adobe/spectrum-web-components/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))

## [0.9.6](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.9.5...@iliad-ui/menu@0.9.6) (2021-10-12)

**Note:** Version bump only for package @iliad-ui/menu

## [0.9.5](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.9.4...@iliad-ui/menu@0.9.5) (2021-10-05)

### Bug Fixes

-   **menu:** cache item parent element to correct disconnecting event dispatch ([f375510](https://github.com/adobe/spectrum-web-components/commit/f3755109ebf64623ba4884871ad8f6eb3b02bc33))

## [0.9.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.9.3...@iliad-ui/menu@0.9.4) (2021-09-20)

**Note:** Version bump only for package @iliad-ui/menu

## [0.9.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.9.2...@iliad-ui/menu@0.9.3) (2021-09-13)

### Bug Fixes

-   simplify focus application in Menu ([6140169](https://github.com/adobe/spectrum-web-components/commit/61401699b36298b6f11cc80703aff664cbb867a7))

## [0.9.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.9.1...@iliad-ui/menu@0.9.2) (2021-08-24)

### Bug Fixes

-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/adobe/spectrum-web-components/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))

## [0.9.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.9.0...@iliad-ui/menu@0.9.1) (2021-08-17)

### Performance Improvements

-   reorganize inheritance and composition in Menu Items ([d96ccb6](https://github.com/adobe/spectrum-web-components/commit/d96ccb621833277444d69535126c3669343c2eaf))

# [0.9.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.10...@iliad-ui/menu@0.9.0) (2021-08-03)

### Bug Fixes

-   add value/selection checks to the tests and fix up the value logic ([933106f](https://github.com/adobe/spectrum-web-components/commit/933106f88dfa99f22fc1046c1395eb53f051b5c4))
-   **split-button:** hide "selected" item from menu ([322a966](https://github.com/adobe/spectrum-web-components/commit/322a96655855f42b390ba2c94d0b017bf93aebd9))

### Features

-   add selects attribute to menu ([bdf2578](https://github.com/adobe/spectrum-web-components/commit/bdf25780e56c7b92368904dce2a02f2594c364a2))

## [0.8.10](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.9...@iliad-ui/menu@0.8.10) (2021-07-22)

### Bug Fixes

-   style clean up ([49e1537](https://github.com/adobe/spectrum-web-components/commit/49e15377f3a839d0ed5dc2504dd71396aa156eb5))

## [0.8.9](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.8...@iliad-ui/menu@0.8.9) (2021-07-01)

### Bug Fixes

-   add "value" slot to sp-menu-item ([e1bd264](https://github.com/adobe/spectrum-web-components/commit/e1bd2646a5198d9ef64710ad0a3749606f08c74e))
-   add icon present and icon-only support to Picker ([f6887a3](https://github.com/adobe/spectrum-web-components/commit/f6887a34e228473e33893c81017492bf3e8fd6c3))

## [0.8.8](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.7...@iliad-ui/menu@0.8.8) (2021-06-16)

### Bug Fixes

-   update role application logic to not overwrite menu\* roles ([94b6aec](https://github.com/adobe/spectrum-web-components/commit/94b6aecffc1e5686feab09361d4e07ec3e854726))

## [0.8.7](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.6...@iliad-ui/menu@0.8.7) (2021-06-07)

### Bug Fixes

-   **menu:** clarify menu internal focus management via preventScroll option ([9ae092c](https://github.com/adobe/spectrum-web-components/commit/9ae092c7d09ef9359dbf9ed9373aef0650967f40))

## [0.8.6](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.5...@iliad-ui/menu@0.8.6) (2021-05-24)

**Note:** Version bump only for package @iliad-ui/menu

## [0.8.5](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.4...@iliad-ui/menu@0.8.5) (2021-05-12)

### Bug Fixes

-   **menu:** pass current focus visibility to menu items ([2d3bf80](https://github.com/adobe/spectrum-web-components/commit/2d3bf8046379fe8caff926af81e62806e77f6a49))

## [0.8.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.3...@iliad-ui/menu@0.8.4) (2021-04-15)

### Bug Fixes

-   **menu:** manage tabindex and focus entry correctly ([3b1a250](https://github.com/adobe/spectrum-web-components/commit/3b1a250c0ec4ad2b3553bbf100c8c7015ff3cbc6))
-   **menu:** only scrollIntoView when keyboard navigating ([f4e9278](https://github.com/adobe/spectrum-web-components/commit/f4e9278048287a45bba2da25144834b0b8297c66))

## [0.8.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.2...@iliad-ui/menu@0.8.3) (2021-04-09)

**Note:** Version bump only for package @iliad-ui/menu

## [0.8.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.1...@iliad-ui/menu@0.8.2) (2021-03-29)

**Note:** Version bump only for package @iliad-ui/menu

## [0.8.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.8.0...@iliad-ui/menu@0.8.1) (2021-03-22)

**Note:** Version bump only for package @iliad-ui/menu

# [0.8.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.7.1...@iliad-ui/menu@0.8.0) (2021-03-22)

### Bug Fixes

-   correctly delivery visuals and mouse interactions for litAnchor and extensions ([0ae889a](https://github.com/adobe/spectrum-web-components/commit/0ae889a8aab9b3417a021b917dfc817a8310f50f))
-   remove <sp-menu> usage where deprecated ([387db3b](https://github.com/adobe/spectrum-web-components/commit/387db3be95c98ab220e517fe12a4db7a2496fe5f))

### Features

-   **picker:** process field-label content for more accurate a11y tree ([dc9df54](https://github.com/adobe/spectrum-web-components/commit/dc9df54d052edc46c2399f0f7b12d3b5d4aff740))

## [0.7.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.7.0...@iliad-ui/menu@0.7.1) (2021-03-05)

**Note:** Version bump only for package @iliad-ui/menu

# [0.7.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.6.3...@iliad-ui/menu@0.7.0) (2021-03-04)

### Bug Fixes

-   **menu:** ensure active descendant is in view when activated ([6edc351](https://github.com/adobe/spectrum-web-components/commit/6edc3518fd305cbd35b74f013546bb32aef7616b))

### Features

-   use latest exports specification ([a7ecf4b](https://github.com/adobe/spectrum-web-components/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))

## [0.6.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.6.2...@iliad-ui/menu@0.6.3) (2021-02-11)

### Bug Fixes

-   update to latest spectrum-css packages ([a5ca19f](https://github.com/adobe/spectrum-web-components/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))

## [0.6.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.6.1...@iliad-ui/menu@0.6.2) (2021-02-02)

**Note:** Version bump only for package @iliad-ui/menu

## [0.6.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.6.0...@iliad-ui/menu@0.6.1) (2021-01-28)

**Note:** Version bump only for package @iliad-ui/menu

# [0.6.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.4.4...@iliad-ui/menu@0.6.0) (2021-01-21)

### Bug Fixes

-   address a11y issues raised by updating our dependencies ([4f06477](https://github.com/adobe/spectrum-web-components/commit/4f0647782eea7fdd85560e1bcb2f8b892f30bc33))
-   include the "types" entry in package.json files ([b432f59](https://github.com/adobe/spectrum-web-components/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   prevent infinite loops when all children are [disabled] ([2deac3d](https://github.com/adobe/spectrum-web-components/commit/2deac3d88ea7f2f27e74d60793e253952d0d765f))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/adobe/spectrum-web-components/commit/369388f8cc147543891087991c569f849ddb9b38))
-   use icons without "size" values ([3fc7c91](https://github.com/adobe/spectrum-web-components/commit/3fc7c91713793a928082eae15fc3d9dec638a31a))
-   **menu:** prevent infinite loop when focus() ([e4e98a3](https://github.com/adobe/spectrum-web-components/commit/e4e98a358a1991c1d6048b01e2899dd28d56dc7e))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/adobe/spectrum-web-components/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/adobe/spectrum-web-components/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))

### Features

-   **action-button:** add action button pattern ([03ac00a](https://github.com/adobe/spectrum-web-components/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **action-group:** manage "one" and "multiple" selections ([6fad59e](https://github.com/adobe/spectrum-web-components/commit/6fad59e0df1210108fe6b54ab075c0cbd94cae78))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/adobe/spectrum-web-components/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **menu:** update spectrum css input ([8c7e18a](https://github.com/adobe/spectrum-web-components/commit/8c7e18ac16f2747bd2f10173bcac0d5e53a0bcac))

# [0.5.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.4.4...@iliad-ui/menu@0.5.0) (2021-01-13)

### Bug Fixes

-   include the "types" entry in package.json files ([b432f59](https://github.com/adobe/spectrum-web-components/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   prevent infinite loops when all children are [disabled](<[2deac3d](https://github.com/adobe/spectrum-web-components/commit/2deac3d88ea7f2f27e74d60793e253952d0d765f)>)
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/adobe/spectrum-web-components/commit/369388f8cc147543891087991c569f849ddb9b38))
-   use icons without "size" values ([3fc7c91](https://github.com/adobe/spectrum-web-components/commit/3fc7c91713793a928082eae15fc3d9dec638a31a))
-   **menu:** prevent infinite loop when focus() ([e4e98a3](https://github.com/adobe/spectrum-web-components/commit/e4e98a358a1991c1d6048b01e2899dd28d56dc7e))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/adobe/spectrum-web-components/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/adobe/spectrum-web-components/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))

### Features

-   **action-button:** add action button pattern ([03ac00a](https://github.com/adobe/spectrum-web-components/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **action-group:** manage "one" and "multiple" selections ([6fad59e](https://github.com/adobe/spectrum-web-components/commit/6fad59e0df1210108fe6b54ab075c0cbd94cae78))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/adobe/spectrum-web-components/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **menu:** update spectrum css input ([8c7e18a](https://github.com/adobe/spectrum-web-components/commit/8c7e18ac16f2747bd2f10173bcac0d5e53a0bcac))

## [0.4.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.4.3...@iliad-ui/menu@0.4.4) (2020-10-12)

**Note:** Version bump only for package @iliad-ui/menu

## [0.4.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.4.2...@iliad-ui/menu@0.4.3) (2020-10-12)

### Bug Fixes

-   include default export in the "exports" fields ([f32407d](https://github.com/adobe/spectrum-web-components/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   **dropdown:** improve accessibility ([389d9d9](https://github.com/adobe/spectrum-web-components/commit/389d9d94a13bf31e10f58ee498bd848929e9d67c))

## [0.4.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.4.1...@iliad-ui/menu@0.4.2) (2020-09-25)

### Bug Fixes

-   update side effect listings ([8160d3a](https://github.com/adobe/spectrum-web-components/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))

## [0.4.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.4.0...@iliad-ui/menu@0.4.1) (2020-09-14)

**Note:** Version bump only for package @iliad-ui/menu

# [0.4.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.3.2...@iliad-ui/menu@0.4.0) (2020-08-31)

### Features

-   allow dir management by sp-theme elements ([2d10158](https://github.com/adobe/spectrum-web-components/commit/2d1015883bc0c3a03862c0de8b4d996cd954291f))
-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/adobe/spectrum-web-components/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))
-   **split-button:** add split-button pattern ([4833a59](https://github.com/adobe/spectrum-web-components/commit/4833a598bb3da3552d194586350a3888dba79543))

## [0.3.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.3.1...@iliad-ui/menu@0.3.2) (2020-08-19)

**Note:** Version bump only for package @iliad-ui/menu

## [0.3.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.3.0...@iliad-ui/menu@0.3.1) (2020-08-13)

### Bug Fixes

-   **menu:** include all direct dependencies ([aa7327f](https://github.com/adobe/spectrum-web-components/commit/aa7327f748b829fa6f6eec2412ac104e9dbeff76))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/adobe/spectrum-web-components/commit/f4e59f76f86369593810463c6406565e28ad97e9))

# [0.3.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.2.7...@iliad-ui/menu@0.3.0) (2020-07-17)

### Features

-   **overlay:** manage focus throwing and tab trapping ([27a0b53](https://github.com/adobe/spectrum-web-components/commit/27a0b53ea94d19bb18b7d3f89763b06dc1b42b59))
-   leverage "exports" field in package.json ([321abd7](https://github.com/adobe/spectrum-web-components/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))

## [0.2.7](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.2.6...@iliad-ui/menu@0.2.7) (2020-06-08)

### Bug Fixes

-   **menu:** support menu item list change in deep decendents ([b2b47f3](https://github.com/adobe/spectrum-web-components/commit/b2b47f305cab9720d29b4214b3330b95f33a56d3))

## [0.2.6](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.2.5...@iliad-ui/menu@0.2.6) (2020-04-16)

### Performance Improvements

-   use "sideEffects" listing in package.json ([7271614](https://github.com/adobe/spectrum-web-components/commit/7271614c0ca3ccf3566583bb59467eb15a6199cd))

## [0.2.5](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.2.4...@iliad-ui/menu@0.2.5) (2020-04-07)

**Note:** Version bump only for package @iliad-ui/menu

## [0.2.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.2.3...@iliad-ui/menu@0.2.4) (2020-03-11)

**Note:** Version bump only for package @iliad-ui/menu

## [0.2.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.2.2...@iliad-ui/menu@0.2.3) (2020-01-06)

**Note:** Version bump only for package @iliad-ui/menu

## [0.2.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.2.1...@iliad-ui/menu@0.2.2) (2019-12-02)

### Bug Fixes

-   normalize "event" and "error" argument names ([8d382cd](https://github.com/adobe/spectrum-web-components/commit/8d382cd))

## [0.2.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.2.0...@iliad-ui/menu@0.2.1) (2019-11-27)

### Bug Fixes

-   include "type" in package.json, generate custom-elements.json ([1a8d716](https://github.com/adobe/spectrum-web-components/commit/1a8d716))

# [0.2.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.1.4...@iliad-ui/menu@0.2.0) (2019-11-19)

### Bug Fixes

-   **menu:** allow for settign "selected" async from above ([9d7f622](https://github.com/adobe/spectrum-web-components/commit/9d7f622))

### Features

-   add screenshot regression testing to CI ([8205dfe](https://github.com/adobe/spectrum-web-components/commit/8205dfe))
-   use :focus-visable (via polyfill) instead of :focus ([11c6fc7](https://github.com/adobe/spectrum-web-components/commit/11c6fc7))
-   use @adobe/spectrum-css@2.15.1 ([3918888](https://github.com/adobe/spectrum-web-components/commit/3918888))

## [0.1.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/menu@0.1.3...@iliad-ui/menu@0.1.4) (2019-10-14)

### Performance Improvements

-   use imported TypeScript helpers instead of inlining them ([cc2bd0a](https://github.com/adobe/spectrum-web-components/commit/cc2bd0a))

## 0.1.3 (2019-10-03)

**Note:** Version bump only for package @iliad-ui/menu
