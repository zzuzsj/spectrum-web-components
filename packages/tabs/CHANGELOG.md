# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.12.1](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/tabs@0.12.0...@iliad-ui/tabs@0.12.1) (2021-10-21)

**Note:** Version bump only for package @iliad-ui/tabs

# 0.12.0 (2021-10-21)

### Bug Fixes

-   allow "updateComplete" to resolve to a boolean like the LitElement default ([6127946](https://github.com/gaoding-inc/iliad-ui/commit/6127946fd3ffd048a30b7eb4bf6aadf9e7c8752a))
-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/gaoding-inc/iliad-ui/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))
-   **tabs:** ensure tabs has layout ([7aba515](https://github.com/gaoding-inc/iliad-ui/commit/7aba51561965342ea3e18404621659aa32c2ed8f))
-   **tabs:** include sp-tab-panel.js in the export map ([1619ae8](https://github.com/gaoding-inc/iliad-ui/commit/1619ae876d70d35eaff38aa955f3cd307f4a5c54))
-   **tabs:** manage disabled state on tabs and tab elements ([58def1f](https://github.com/gaoding-inc/iliad-ui/commit/58def1fd7a724cc078459c56f39c19ebe2005f97))
-   check if current selected value exists before setting selected attr ([1878ca3](https://github.com/gaoding-inc/iliad-ui/commit/1878ca339626253ce3a664d42702b374fd4fff54))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/gaoding-inc/iliad-ui/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   include default export in the "exports" fields ([f32407d](https://github.com/gaoding-inc/iliad-ui/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/gaoding-inc/iliad-ui/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/gaoding-inc/iliad-ui/commit/369388f8cc147543891087991c569f849ddb9b38))
-   support matching keydown to [dir] ([70b40a9](https://github.com/gaoding-inc/iliad-ui/commit/70b40a9d3bb5fe2d12208365abf132260270721b))
-   update indicator animation for loading and content direction ([f607f8b](https://github.com/gaoding-inc/iliad-ui/commit/f607f8b4fca280b7aa5eae835554ea62845abd1c))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/gaoding-inc/iliad-ui/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   update side effect listings ([8160d3a](https://github.com/gaoding-inc/iliad-ui/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/gaoding-inc/iliad-ui/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/gaoding-inc/iliad-ui/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   use ObserveSlotText mixin to prevent white space from overriding label attribute ([610fb4b](https://github.com/gaoding-inc/iliad-ui/commit/610fb4b5b392b7e3673c7d46bf8f9f5f79f27ca9))
-   **tabs:** bind tabindicator update to dir value ([09598b5](https://github.com/gaoding-inc/iliad-ui/commit/09598b59f1198b7ebc8067834681000ceee0918e))
-   **tabs:** correct entry focus element ([64407d3](https://github.com/gaoding-inc/iliad-ui/commit/64407d37fd09d3d598253a66c3b342882d51a826))
-   **tabs:** ensure only one active tab stop in the tabs ([68b2523](https://github.com/gaoding-inc/iliad-ui/commit/68b2523d2287ad8bdb82d2c8b0e79b30129317c4))
-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/gaoding-inc/iliad-ui/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/gaoding-inc/iliad-ui/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **tabs:** add sp-tab-panel element ([b17d276](https://github.com/gaoding-inc/iliad-ui/commit/b17d2765cf415578a31e5fa23515c25ff4c3922d))
-   apply sizedMixin for t-shirt sizing ([d7b63fb](https://github.com/gaoding-inc/iliad-ui/commit/d7b63fb0db06b5a8a412fea8370964f4db9d18ae))
-   leverage "exports" field in package.json ([321abd7](https://github.com/gaoding-inc/iliad-ui/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/gaoding-inc/iliad-ui/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))
-   use latest exports specification ([a7ecf4b](https://github.com/gaoding-inc/iliad-ui/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   use SixedMixin to manage "size" property ([8819821](https://github.com/gaoding-inc/iliad-ui/commit/88198212cb495833ed2e7644f95b43dca915318d))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/gaoding-inc/iliad-ui/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/gaoding-inc/iliad-ui/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **tabs:** update spectrum css input ([d875a0c](https://github.com/gaoding-inc/iliad-ui/commit/d875a0cdeba6e798ff129409b2b809d9d8adaae3))

## [0.11.3](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/tabs@0.11.2...@iliad-ui/tabs@0.11.3) (2021-10-20)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.11.3-alpha.0](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/tabs@0.11.2...@iliad-ui/tabs@0.11.3-alpha.0) (2021-10-20)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.11.2](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/tabs@0.11.1...@iliad-ui/tabs@0.11.2) (2021-10-20)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.11.2](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/tabs@0.11.1...@iliad-ui/tabs@0.11.2) (2021-10-19)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.11.1](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/tabs@0.11.0...@iliad-ui/tabs@0.11.1) (2021-10-19)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.11.1](https://github.com/gaoding-inc/iliad-ui/compare/@iliad-ui/tabs@0.11.0...@iliad-ui/tabs@0.11.1) (2021-10-18)

**Note:** Version bump only for package @iliad-ui/tabs

# 0.11.0 (2021-10-18)

### Bug Fixes

-   allow "updateComplete" to resolve to a boolean like the LitElement default ([6127946](https://github.com/gaoding-inc/iliad-ui/commit/6127946fd3ffd048a30b7eb4bf6aadf9e7c8752a))
-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/gaoding-inc/iliad-ui/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))
-   **tabs:** ensure tabs has layout ([7aba515](https://github.com/gaoding-inc/iliad-ui/commit/7aba51561965342ea3e18404621659aa32c2ed8f))
-   **tabs:** include sp-tab-panel.js in the export map ([1619ae8](https://github.com/gaoding-inc/iliad-ui/commit/1619ae876d70d35eaff38aa955f3cd307f4a5c54))
-   **tabs:** manage disabled state on tabs and tab elements ([58def1f](https://github.com/gaoding-inc/iliad-ui/commit/58def1fd7a724cc078459c56f39c19ebe2005f97))
-   check if current selected value exists before setting selected attr ([1878ca3](https://github.com/gaoding-inc/iliad-ui/commit/1878ca339626253ce3a664d42702b374fd4fff54))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/gaoding-inc/iliad-ui/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   include default export in the "exports" fields ([f32407d](https://github.com/gaoding-inc/iliad-ui/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/gaoding-inc/iliad-ui/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/gaoding-inc/iliad-ui/commit/369388f8cc147543891087991c569f849ddb9b38))
-   support matching keydown to [dir] ([70b40a9](https://github.com/gaoding-inc/iliad-ui/commit/70b40a9d3bb5fe2d12208365abf132260270721b))
-   update indicator animation for loading and content direction ([f607f8b](https://github.com/gaoding-inc/iliad-ui/commit/f607f8b4fca280b7aa5eae835554ea62845abd1c))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/gaoding-inc/iliad-ui/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   update side effect listings ([8160d3a](https://github.com/gaoding-inc/iliad-ui/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/gaoding-inc/iliad-ui/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/gaoding-inc/iliad-ui/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   use ObserveSlotText mixin to prevent white space from overriding label attribute ([610fb4b](https://github.com/gaoding-inc/iliad-ui/commit/610fb4b5b392b7e3673c7d46bf8f9f5f79f27ca9))
-   **tabs:** bind tabindicator update to dir value ([09598b5](https://github.com/gaoding-inc/iliad-ui/commit/09598b59f1198b7ebc8067834681000ceee0918e))
-   **tabs:** correct entry focus element ([64407d3](https://github.com/gaoding-inc/iliad-ui/commit/64407d37fd09d3d598253a66c3b342882d51a826))
-   **tabs:** ensure only one active tab stop in the tabs ([68b2523](https://github.com/gaoding-inc/iliad-ui/commit/68b2523d2287ad8bdb82d2c8b0e79b30129317c4))
-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/gaoding-inc/iliad-ui/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/gaoding-inc/iliad-ui/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **tabs:** add sp-tab-panel element ([b17d276](https://github.com/gaoding-inc/iliad-ui/commit/b17d2765cf415578a31e5fa23515c25ff4c3922d))
-   apply sizedMixin for t-shirt sizing ([d7b63fb](https://github.com/gaoding-inc/iliad-ui/commit/d7b63fb0db06b5a8a412fea8370964f4db9d18ae))
-   leverage "exports" field in package.json ([321abd7](https://github.com/gaoding-inc/iliad-ui/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/gaoding-inc/iliad-ui/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))
-   use latest exports specification ([a7ecf4b](https://github.com/gaoding-inc/iliad-ui/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   use SixedMixin to manage "size" property ([8819821](https://github.com/gaoding-inc/iliad-ui/commit/88198212cb495833ed2e7644f95b43dca915318d))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/gaoding-inc/iliad-ui/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/gaoding-inc/iliad-ui/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **tabs:** update spectrum css input ([d875a0c](https://github.com/gaoding-inc/iliad-ui/commit/d875a0cdeba6e798ff129409b2b809d9d8adaae3))

# 0.10.0 (2021-10-18)

### Bug Fixes

-   allow "updateComplete" to resolve to a boolean like the LitElement default ([6127946](https://github.com/gaoding-inc/iliad-ui/commit/6127946fd3ffd048a30b7eb4bf6aadf9e7c8752a))
-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/gaoding-inc/iliad-ui/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))
-   **tabs:** ensure tabs has layout ([7aba515](https://github.com/gaoding-inc/iliad-ui/commit/7aba51561965342ea3e18404621659aa32c2ed8f))
-   **tabs:** include sp-tab-panel.js in the export map ([1619ae8](https://github.com/gaoding-inc/iliad-ui/commit/1619ae876d70d35eaff38aa955f3cd307f4a5c54))
-   **tabs:** manage disabled state on tabs and tab elements ([58def1f](https://github.com/gaoding-inc/iliad-ui/commit/58def1fd7a724cc078459c56f39c19ebe2005f97))
-   check if current selected value exists before setting selected attr ([1878ca3](https://github.com/gaoding-inc/iliad-ui/commit/1878ca339626253ce3a664d42702b374fd4fff54))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/gaoding-inc/iliad-ui/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   include default export in the "exports" fields ([f32407d](https://github.com/gaoding-inc/iliad-ui/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/gaoding-inc/iliad-ui/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/gaoding-inc/iliad-ui/commit/369388f8cc147543891087991c569f849ddb9b38))
-   support matching keydown to [dir] ([70b40a9](https://github.com/gaoding-inc/iliad-ui/commit/70b40a9d3bb5fe2d12208365abf132260270721b))
-   update indicator animation for loading and content direction ([f607f8b](https://github.com/gaoding-inc/iliad-ui/commit/f607f8b4fca280b7aa5eae835554ea62845abd1c))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/gaoding-inc/iliad-ui/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   update side effect listings ([8160d3a](https://github.com/gaoding-inc/iliad-ui/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/gaoding-inc/iliad-ui/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/gaoding-inc/iliad-ui/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   use ObserveSlotText mixin to prevent white space from overriding label attribute ([610fb4b](https://github.com/gaoding-inc/iliad-ui/commit/610fb4b5b392b7e3673c7d46bf8f9f5f79f27ca9))
-   **tabs:** bind tabindicator update to dir value ([09598b5](https://github.com/gaoding-inc/iliad-ui/commit/09598b59f1198b7ebc8067834681000ceee0918e))
-   **tabs:** correct entry focus element ([64407d3](https://github.com/gaoding-inc/iliad-ui/commit/64407d37fd09d3d598253a66c3b342882d51a826))
-   **tabs:** ensure only one active tab stop in the tabs ([68b2523](https://github.com/gaoding-inc/iliad-ui/commit/68b2523d2287ad8bdb82d2c8b0e79b30129317c4))
-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/gaoding-inc/iliad-ui/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/gaoding-inc/iliad-ui/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **tabs:** add sp-tab-panel element ([b17d276](https://github.com/gaoding-inc/iliad-ui/commit/b17d2765cf415578a31e5fa23515c25ff4c3922d))
-   apply sizedMixin for t-shirt sizing ([d7b63fb](https://github.com/gaoding-inc/iliad-ui/commit/d7b63fb0db06b5a8a412fea8370964f4db9d18ae))
-   leverage "exports" field in package.json ([321abd7](https://github.com/gaoding-inc/iliad-ui/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/gaoding-inc/iliad-ui/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))
-   use latest exports specification ([a7ecf4b](https://github.com/gaoding-inc/iliad-ui/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   use SixedMixin to manage "size" property ([8819821](https://github.com/gaoding-inc/iliad-ui/commit/88198212cb495833ed2e7644f95b43dca915318d))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/gaoding-inc/iliad-ui/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/gaoding-inc/iliad-ui/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **tabs:** update spectrum css input ([d875a0c](https://github.com/gaoding-inc/iliad-ui/commit/d875a0cdeba6e798ff129409b2b809d9d8adaae3))

## [0.9.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.9.0...@iliad-ui/tabs@0.9.1) (2021-10-15)

**Note:** Version bump only for package @iliad-ui/tabs

# 0.9.0 (2021-10-14)

### Bug Fixes

-   allow "updateComplete" to resolve to a boolean like the LitElement default ([6127946](https://github.com/adobe/spectrum-web-components/commit/6127946fd3ffd048a30b7eb4bf6aadf9e7c8752a))
-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/adobe/spectrum-web-components/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))
-   **tabs:** ensure tabs has layout ([7aba515](https://github.com/adobe/spectrum-web-components/commit/7aba51561965342ea3e18404621659aa32c2ed8f))
-   **tabs:** include sp-tab-panel.js in the export map ([1619ae8](https://github.com/adobe/spectrum-web-components/commit/1619ae876d70d35eaff38aa955f3cd307f4a5c54))
-   **tabs:** manage disabled state on tabs and tab elements ([58def1f](https://github.com/adobe/spectrum-web-components/commit/58def1fd7a724cc078459c56f39c19ebe2005f97))
-   check if current selected value exists before setting selected attr ([1878ca3](https://github.com/adobe/spectrum-web-components/commit/1878ca339626253ce3a664d42702b374fd4fff54))
-   ensure browser understandable extensions ([f4e59f7](https://github.com/adobe/spectrum-web-components/commit/f4e59f76f86369593810463c6406565e28ad97e9))
-   include default export in the "exports" fields ([f32407d](https://github.com/adobe/spectrum-web-components/commit/f32407d7bbfd18e72c35b6f27740549e79957858))
-   include the "types" entry in package.json files ([b432f59](https://github.com/adobe/spectrum-web-components/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/adobe/spectrum-web-components/commit/369388f8cc147543891087991c569f849ddb9b38))
-   support matching keydown to [dir] ([70b40a9](https://github.com/adobe/spectrum-web-components/commit/70b40a9d3bb5fe2d12208365abf132260270721b))
-   update indicator animation for loading and content direction ([f607f8b](https://github.com/adobe/spectrum-web-components/commit/f607f8b4fca280b7aa5eae835554ea62845abd1c))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/adobe/spectrum-web-components/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   update side effect listings ([8160d3a](https://github.com/adobe/spectrum-web-components/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))
-   update to latest spectrum-css packages ([a5ca19f](https://github.com/adobe/spectrum-web-components/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/adobe/spectrum-web-components/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))
-   use ObserveSlotText mixin to prevent white space from overriding label attribute ([610fb4b](https://github.com/adobe/spectrum-web-components/commit/610fb4b5b392b7e3673c7d46bf8f9f5f79f27ca9))
-   **tabs:** bind tabindicator update to dir value ([09598b5](https://github.com/adobe/spectrum-web-components/commit/09598b59f1198b7ebc8067834681000ceee0918e))
-   **tabs:** correct entry focus element ([64407d3](https://github.com/adobe/spectrum-web-components/commit/64407d37fd09d3d598253a66c3b342882d51a826))
-   **tabs:** ensure only one active tab stop in the tabs ([68b2523](https://github.com/adobe/spectrum-web-components/commit/68b2523d2287ad8bdb82d2c8b0e79b30129317c4))
-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/adobe/spectrum-web-components/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/adobe/spectrum-web-components/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))
-   **tabs:** add sp-tab-panel element ([b17d276](https://github.com/adobe/spectrum-web-components/commit/b17d2765cf415578a31e5fa23515c25ff4c3922d))
-   apply sizedMixin for t-shirt sizing ([d7b63fb](https://github.com/adobe/spectrum-web-components/commit/d7b63fb0db06b5a8a412fea8370964f4db9d18ae))
-   leverage "exports" field in package.json ([321abd7](https://github.com/adobe/spectrum-web-components/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/adobe/spectrum-web-components/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))
-   use latest exports specification ([a7ecf4b](https://github.com/adobe/spectrum-web-components/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))
-   use SixedMixin to manage "size" property ([8819821](https://github.com/adobe/spectrum-web-components/commit/88198212cb495833ed2e7644f95b43dca915318d))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/adobe/spectrum-web-components/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/adobe/spectrum-web-components/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **tabs:** update spectrum css input ([d875a0c](https://github.com/adobe/spectrum-web-components/commit/d875a0cdeba6e798ff129409b2b809d9d8adaae3))

# [0.8.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.10...@iliad-ui/tabs@0.8.0) (2021-10-14)

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/adobe/spectrum-web-components/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))

# [0.7.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.10...@iliad-ui/tabs@0.7.0) (2021-10-14)

### Features

-   update lit-\* dependencies, wip ([aad74d6](https://github.com/adobe/spectrum-web-components/commit/aad74d6ac41d8450aee82d73aaf58ab949b72a00))

## [0.6.10](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.9...@iliad-ui/tabs@0.6.10) (2021-10-12)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.6.9](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.8...@iliad-ui/tabs@0.6.9) (2021-09-20)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.6.8](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.7...@iliad-ui/tabs@0.6.8) (2021-09-13)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.6.7](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.6...@iliad-ui/tabs@0.6.7) (2021-08-24)

### Bug Fixes

-   correct [@element](https://github.com/element) jsDoc listing across library ([c97a632](https://github.com/adobe/spectrum-web-components/commit/c97a6320c16a2b3053637e22bca0d56ce0cd5ae5))

## [0.6.6](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.5...@iliad-ui/tabs@0.6.6) (2021-08-03)

### Bug Fixes

-   allow "updateComplete" to resolve to a boolean like the LitElement default ([6127946](https://github.com/adobe/spectrum-web-components/commit/6127946fd3ffd048a30b7eb4bf6aadf9e7c8752a))

## [0.6.5](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.4...@iliad-ui/tabs@0.6.5) (2021-07-22)

### Bug Fixes

-   **tabs:** ensure tabs has layout ([7aba515](https://github.com/adobe/spectrum-web-components/commit/7aba51561965342ea3e18404621659aa32c2ed8f))
-   **tabs:** manage disabled state on tabs and tab elements ([58def1f](https://github.com/adobe/spectrum-web-components/commit/58def1fd7a724cc078459c56f39c19ebe2005f97))

## [0.6.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.3...@iliad-ui/tabs@0.6.4) (2021-07-01)

### Bug Fixes

-   update indicator animation for loading and content direction ([f607f8b](https://github.com/adobe/spectrum-web-components/commit/f607f8b4fca280b7aa5eae835554ea62845abd1c))

## [0.6.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.2...@iliad-ui/tabs@0.6.3) (2021-06-16)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.6.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.1...@iliad-ui/tabs@0.6.2) (2021-06-07)

### Bug Fixes

-   use ObserveSlotText mixin to prevent white space from overriding label attribute ([610fb4b](https://github.com/adobe/spectrum-web-components/commit/610fb4b5b392b7e3673c7d46bf8f9f5f79f27ca9))

## [0.6.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.6.0...@iliad-ui/tabs@0.6.1) (2021-05-25)

### Bug Fixes

-   **tabs:** include sp-tab-panel.js in the export map ([1619ae8](https://github.com/adobe/spectrum-web-components/commit/1619ae876d70d35eaff38aa955f3cd307f4a5c54))

# [0.6.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.5.6...@iliad-ui/tabs@0.6.0) (2021-05-24)

### Features

-   **tabs:** add sp-tab-panel element ([b17d276](https://github.com/adobe/spectrum-web-components/commit/b17d2765cf415578a31e5fa23515c25ff4c3922d))

## [0.5.6](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.5.5...@iliad-ui/tabs@0.5.6) (2021-05-12)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.5.5](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.5.4...@iliad-ui/tabs@0.5.5) (2021-04-09)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.5.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.5.3...@iliad-ui/tabs@0.5.4) (2021-03-29)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.5.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.5.2...@iliad-ui/tabs@0.5.3) (2021-03-22)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.5.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.5.1...@iliad-ui/tabs@0.5.2) (2021-03-22)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.5.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.5.0...@iliad-ui/tabs@0.5.1) (2021-03-05)

**Note:** Version bump only for package @iliad-ui/tabs

# [0.5.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.4.3...@iliad-ui/tabs@0.5.0) (2021-03-04)

### Features

-   use latest exports specification ([a7ecf4b](https://github.com/adobe/spectrum-web-components/commit/a7ecf4b6da7996f36a8a89f62cc2384709497008))

## [0.4.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.4.2...@iliad-ui/tabs@0.4.3) (2021-02-11)

### Bug Fixes

-   update to latest spectrum-css packages ([a5ca19f](https://github.com/adobe/spectrum-web-components/commit/a5ca19f67d5b3f0951667c4441d4d977bf1e0937))

## [0.4.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.4.1...@iliad-ui/tabs@0.4.2) (2021-02-02)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.4.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.4.0...@iliad-ui/tabs@0.4.1) (2021-01-28)

**Note:** Version bump only for package @iliad-ui/tabs

# [0.4.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.2.4...@iliad-ui/tabs@0.4.0) (2021-01-21)

### Bug Fixes

-   include the "types" entry in package.json files ([b432f59](https://github.com/adobe/spectrum-web-components/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/adobe/spectrum-web-components/commit/369388f8cc147543891087991c569f849ddb9b38))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/adobe/spectrum-web-components/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/adobe/spectrum-web-components/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))

### Features

-   apply sizedMixin for t-shirt sizing ([d7b63fb](https://github.com/adobe/spectrum-web-components/commit/d7b63fb0db06b5a8a412fea8370964f4db9d18ae))
-   use SixedMixin to manage "size" property ([8819821](https://github.com/adobe/spectrum-web-components/commit/88198212cb495833ed2e7644f95b43dca915318d))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/adobe/spectrum-web-components/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/adobe/spectrum-web-components/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **tabs:** update spectrum css input ([d875a0c](https://github.com/adobe/spectrum-web-components/commit/d875a0cdeba6e798ff129409b2b809d9d8adaae3))

# [0.3.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.2.4...@iliad-ui/tabs@0.3.0) (2021-01-13)

### Bug Fixes

-   include the "types" entry in package.json files ([b432f59](https://github.com/adobe/spectrum-web-components/commit/b432f5982b3b79f80af12f6d0312cbe2285e608b))
-   stop merging selectors in a way that alters the cascade ([369388f](https://github.com/adobe/spectrum-web-components/commit/369388f8cc147543891087991c569f849ddb9b38))
-   update latest Spectrum CSS beta releases ([d8d3acc](https://github.com/adobe/spectrum-web-components/commit/d8d3acc86de31e58219db6ba2a9d045b83cbe103))
-   use latest @spectrum-css/\* versions ([c35eb86](https://github.com/adobe/spectrum-web-components/commit/c35eb86defd89a0c36b5ea186f6d40f20851b5e5))

### Features

-   apply sizedMixin for t-shirt sizing ([d7b63fb](https://github.com/adobe/spectrum-web-components/commit/d7b63fb0db06b5a8a412fea8370964f4db9d18ae))
-   use SixedMixin to manage "size" property ([8819821](https://github.com/adobe/spectrum-web-components/commit/88198212cb495833ed2e7644f95b43dca915318d))
-   **action-button:** add action button pattern ([03ac00a](https://github.com/adobe/spectrum-web-components/commit/03ac00a710290e6a78340f206d88385a4f8ae8c2))
-   **icons-workflow:** vend fully registered icon components ([941f3a4](https://github.com/adobe/spectrum-web-components/commit/941f3a41486fbd49eca0805fb63383f63313e71e))
-   **tabs:** update spectrum css input ([d875a0c](https://github.com/adobe/spectrum-web-components/commit/d875a0cdeba6e798ff129409b2b809d9d8adaae3))

## [0.2.4](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.2.3...@iliad-ui/tabs@0.2.4) (2020-10-12)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.2.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.2.2...@iliad-ui/tabs@0.2.3) (2020-10-12)

### Bug Fixes

-   include default export in the "exports" fields ([f32407d](https://github.com/adobe/spectrum-web-components/commit/f32407d7bbfd18e72c35b6f27740549e79957858))

## [0.2.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.2.1...@iliad-ui/tabs@0.2.2) (2020-09-25)

### Bug Fixes

-   check if current selected value exists before setting selected attr ([1878ca3](https://github.com/adobe/spectrum-web-components/commit/1878ca339626253ce3a664d42702b374fd4fff54))
-   update side effect listings ([8160d3a](https://github.com/adobe/spectrum-web-components/commit/8160d3ab2c4f5ea11ac40897a5cf1fdaa357f4a8))

## [0.2.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.2.0...@iliad-ui/tabs@0.2.1) (2020-09-14)

### Bug Fixes

-   **top-nav:** prototype top-nav pattern ([9708f6f](https://github.com/adobe/spectrum-web-components/commit/9708f6f63e080c0ec91c11763d3121a407349d1a))

# [0.2.0](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.1.3...@iliad-ui/tabs@0.2.0) (2020-08-31)

### Bug Fixes

-   **tabs:** bind tabindicator update to dir value ([09598b5](https://github.com/adobe/spectrum-web-components/commit/09598b59f1198b7ebc8067834681000ceee0918e))
-   support matching keydown to [dir](<[70b40a9](https://github.com/adobe/spectrum-web-components/commit/70b40a9d3bb5fe2d12208365abf132260270721b)>)

### Features

-   update to Spectrum CSS v3.0.0 ([e8b3d8f](https://github.com/adobe/spectrum-web-components/commit/e8b3d8f75c77c04b4d7af126b91b0f6ad2a40742))

## [0.1.3](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.1.2...@iliad-ui/tabs@0.1.3) (2020-08-19)

**Note:** Version bump only for package @iliad-ui/tabs

## [0.1.2](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.1.1...@iliad-ui/tabs@0.1.2) (2020-07-27)

### Bug Fixes

-   ensure browser understandable extensions ([f4e59f7](https://github.com/adobe/spectrum-web-components/commit/f4e59f76f86369593810463c6406565e28ad97e9))

## [0.1.1](https://github.com/adobe/spectrum-web-components/compare/@iliad-ui/tabs@0.1.0...@iliad-ui/tabs@0.1.1) (2020-07-22)

### Bug Fixes

-   **tabs:** correct entry focus element ([64407d3](https://github.com/adobe/spectrum-web-components/commit/64407d37fd09d3d598253a66c3b342882d51a826))

# 0.1.0 (2020-07-17)

### Bug Fixes

-   **tabs:** ensure only one active tab stop in the tabs ([68b2523](https://github.com/adobe/spectrum-web-components/commit/68b2523d2287ad8bdb82d2c8b0e79b30129317c4))

### Features

-   leverage "exports" field in package.json ([321abd7](https://github.com/adobe/spectrum-web-components/commit/321abd7b7e78ccd9157cff75a1fa3dbd06e81f79))
