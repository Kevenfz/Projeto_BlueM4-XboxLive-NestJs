'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Projeto_BlueM4-XboxLive documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-f8d32b6c1aedecf23a1a2399e4034d27e9d1a4ebcb844af9bd3f610dab0a9c6ea95d923dfb6dcfd676e9358df0b213312c4c09c5106fb418c5869af28b4ae5f5"' : 'data-target="#xs-controllers-links-module-AppModule-f8d32b6c1aedecf23a1a2399e4034d27e9d1a4ebcb844af9bd3f610dab0a9c6ea95d923dfb6dcfd676e9358df0b213312c4c09c5106fb418c5869af28b4ae5f5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-f8d32b6c1aedecf23a1a2399e4034d27e9d1a4ebcb844af9bd3f610dab0a9c6ea95d923dfb6dcfd676e9358df0b213312c4c09c5106fb418c5869af28b4ae5f5"' :
                                            'id="xs-controllers-links-module-AppModule-f8d32b6c1aedecf23a1a2399e4034d27e9d1a4ebcb844af9bd3f610dab0a9c6ea95d923dfb6dcfd676e9358df0b213312c4c09c5106fb418c5869af28b4ae5f5"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-f8d32b6c1aedecf23a1a2399e4034d27e9d1a4ebcb844af9bd3f610dab0a9c6ea95d923dfb6dcfd676e9358df0b213312c4c09c5106fb418c5869af28b4ae5f5"' : 'data-target="#xs-injectables-links-module-AppModule-f8d32b6c1aedecf23a1a2399e4034d27e9d1a4ebcb844af9bd3f610dab0a9c6ea95d923dfb6dcfd676e9358df0b213312c4c09c5106fb418c5869af28b4ae5f5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-f8d32b6c1aedecf23a1a2399e4034d27e9d1a4ebcb844af9bd3f610dab0a9c6ea95d923dfb6dcfd676e9358df0b213312c4c09c5106fb418c5869af28b4ae5f5"' :
                                        'id="xs-injectables-links-module-AppModule-f8d32b6c1aedecf23a1a2399e4034d27e9d1a4ebcb844af9bd3f610dab0a9c6ea95d923dfb6dcfd676e9358df0b213312c4c09c5106fb418c5869af28b4ae5f5"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-99181c2c1ab14fcacdc6c8973641d08cccac5b1b08ade0a8cfc0e84d339c90df766c6f5cce63b9715bb6c653fde8ff5127adbf850a544a9efb542d23441a9cac"' : 'data-target="#xs-controllers-links-module-AuthModule-99181c2c1ab14fcacdc6c8973641d08cccac5b1b08ade0a8cfc0e84d339c90df766c6f5cce63b9715bb6c653fde8ff5127adbf850a544a9efb542d23441a9cac"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-99181c2c1ab14fcacdc6c8973641d08cccac5b1b08ade0a8cfc0e84d339c90df766c6f5cce63b9715bb6c653fde8ff5127adbf850a544a9efb542d23441a9cac"' :
                                            'id="xs-controllers-links-module-AuthModule-99181c2c1ab14fcacdc6c8973641d08cccac5b1b08ade0a8cfc0e84d339c90df766c6f5cce63b9715bb6c653fde8ff5127adbf850a544a9efb542d23441a9cac"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-99181c2c1ab14fcacdc6c8973641d08cccac5b1b08ade0a8cfc0e84d339c90df766c6f5cce63b9715bb6c653fde8ff5127adbf850a544a9efb542d23441a9cac"' : 'data-target="#xs-injectables-links-module-AuthModule-99181c2c1ab14fcacdc6c8973641d08cccac5b1b08ade0a8cfc0e84d339c90df766c6f5cce63b9715bb6c653fde8ff5127adbf850a544a9efb542d23441a9cac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-99181c2c1ab14fcacdc6c8973641d08cccac5b1b08ade0a8cfc0e84d339c90df766c6f5cce63b9715bb6c653fde8ff5127adbf850a544a9efb542d23441a9cac"' :
                                        'id="xs-injectables-links-module-AuthModule-99181c2c1ab14fcacdc6c8973641d08cccac5b1b08ade0a8cfc0e84d339c90df766c6f5cce63b9715bb6c653fde8ff5127adbf850a544a9efb542d23441a9cac"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GameModule.html" data-type="entity-link" >GameModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GameModule-a0051571b03ccb62e62cc4963180b4ee29751f151fc71697211e8ecc5020ee006be1467aeb4e5ad9a389b77fe490af4ce02ad894ebbe3596f43430644062bf57"' : 'data-target="#xs-controllers-links-module-GameModule-a0051571b03ccb62e62cc4963180b4ee29751f151fc71697211e8ecc5020ee006be1467aeb4e5ad9a389b77fe490af4ce02ad894ebbe3596f43430644062bf57"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GameModule-a0051571b03ccb62e62cc4963180b4ee29751f151fc71697211e8ecc5020ee006be1467aeb4e5ad9a389b77fe490af4ce02ad894ebbe3596f43430644062bf57"' :
                                            'id="xs-controllers-links-module-GameModule-a0051571b03ccb62e62cc4963180b4ee29751f151fc71697211e8ecc5020ee006be1467aeb4e5ad9a389b77fe490af4ce02ad894ebbe3596f43430644062bf57"' }>
                                            <li class="link">
                                                <a href="controllers/GameController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GameModule-a0051571b03ccb62e62cc4963180b4ee29751f151fc71697211e8ecc5020ee006be1467aeb4e5ad9a389b77fe490af4ce02ad894ebbe3596f43430644062bf57"' : 'data-target="#xs-injectables-links-module-GameModule-a0051571b03ccb62e62cc4963180b4ee29751f151fc71697211e8ecc5020ee006be1467aeb4e5ad9a389b77fe490af4ce02ad894ebbe3596f43430644062bf57"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GameModule-a0051571b03ccb62e62cc4963180b4ee29751f151fc71697211e8ecc5020ee006be1467aeb4e5ad9a389b77fe490af4ce02ad894ebbe3596f43430644062bf57"' :
                                        'id="xs-injectables-links-module-GameModule-a0051571b03ccb62e62cc4963180b4ee29751f151fc71697211e8ecc5020ee006be1467aeb4e5ad9a389b77fe490af4ce02ad894ebbe3596f43430644062bf57"' }>
                                        <li class="link">
                                            <a href="injectables/GameService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeneroModule.html" data-type="entity-link" >GeneroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-GeneroModule-4983365d131eb590a0f751b6b650dc1f614fb05c184bb9c2d0bdaafe1feb7c6e9f02ec847ab9506b48a4910a5c3851b836f6b48969aae233395b5a9f44e25ae6"' : 'data-target="#xs-controllers-links-module-GeneroModule-4983365d131eb590a0f751b6b650dc1f614fb05c184bb9c2d0bdaafe1feb7c6e9f02ec847ab9506b48a4910a5c3851b836f6b48969aae233395b5a9f44e25ae6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeneroModule-4983365d131eb590a0f751b6b650dc1f614fb05c184bb9c2d0bdaafe1feb7c6e9f02ec847ab9506b48a4910a5c3851b836f6b48969aae233395b5a9f44e25ae6"' :
                                            'id="xs-controllers-links-module-GeneroModule-4983365d131eb590a0f751b6b650dc1f614fb05c184bb9c2d0bdaafe1feb7c6e9f02ec847ab9506b48a4910a5c3851b836f6b48969aae233395b5a9f44e25ae6"' }>
                                            <li class="link">
                                                <a href="controllers/GeneroController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneroController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GeneroModule-4983365d131eb590a0f751b6b650dc1f614fb05c184bb9c2d0bdaafe1feb7c6e9f02ec847ab9506b48a4910a5c3851b836f6b48969aae233395b5a9f44e25ae6"' : 'data-target="#xs-injectables-links-module-GeneroModule-4983365d131eb590a0f751b6b650dc1f614fb05c184bb9c2d0bdaafe1feb7c6e9f02ec847ab9506b48a4910a5c3851b836f6b48969aae233395b5a9f44e25ae6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeneroModule-4983365d131eb590a0f751b6b650dc1f614fb05c184bb9c2d0bdaafe1feb7c6e9f02ec847ab9506b48a4910a5c3851b836f6b48969aae233395b5a9f44e25ae6"' :
                                        'id="xs-injectables-links-module-GeneroModule-4983365d131eb590a0f751b6b650dc1f614fb05c184bb9c2d0bdaafe1feb7c6e9f02ec847ab9506b48a4910a5c3851b836f6b48969aae233395b5a9f44e25ae6"' }>
                                        <li class="link">
                                            <a href="injectables/GeneroService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneroService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PerfilModule.html" data-type="entity-link" >PerfilModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' : 'data-target="#xs-controllers-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' :
                                            'id="xs-controllers-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' }>
                                            <li class="link">
                                                <a href="controllers/PerfilController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' : 'data-target="#xs-injectables-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' :
                                        'id="xs-injectables-links-module-PerfilModule-e464553c61318c69d6f7ce98c0629d081f5401bfb4b2f33a703dd95aec827f0dffd40e720faacca532ef51c1efcbb2d2d524cfb92243dfb5b89316259db56e4d"' }>
                                        <li class="link">
                                            <a href="injectables/PerfilService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-0aeb9aa2b0c51d470859f13f40e1f996b5b9bc6f7522296d79abab8bc4121205a537712753eb22465e7c4a25ee3189888c79cdd88bbf86bb0dedbec0212fc704"' : 'data-target="#xs-controllers-links-module-UsersModule-0aeb9aa2b0c51d470859f13f40e1f996b5b9bc6f7522296d79abab8bc4121205a537712753eb22465e7c4a25ee3189888c79cdd88bbf86bb0dedbec0212fc704"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-0aeb9aa2b0c51d470859f13f40e1f996b5b9bc6f7522296d79abab8bc4121205a537712753eb22465e7c4a25ee3189888c79cdd88bbf86bb0dedbec0212fc704"' :
                                            'id="xs-controllers-links-module-UsersModule-0aeb9aa2b0c51d470859f13f40e1f996b5b9bc6f7522296d79abab8bc4121205a537712753eb22465e7c4a25ee3189888c79cdd88bbf86bb0dedbec0212fc704"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-0aeb9aa2b0c51d470859f13f40e1f996b5b9bc6f7522296d79abab8bc4121205a537712753eb22465e7c4a25ee3189888c79cdd88bbf86bb0dedbec0212fc704"' : 'data-target="#xs-injectables-links-module-UsersModule-0aeb9aa2b0c51d470859f13f40e1f996b5b9bc6f7522296d79abab8bc4121205a537712753eb22465e7c4a25ee3189888c79cdd88bbf86bb0dedbec0212fc704"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-0aeb9aa2b0c51d470859f13f40e1f996b5b9bc6f7522296d79abab8bc4121205a537712753eb22465e7c4a25ee3189888c79cdd88bbf86bb0dedbec0212fc704"' :
                                        'id="xs-injectables-links-module-UsersModule-0aeb9aa2b0c51d470859f13f40e1f996b5b9bc6f7522296d79abab8bc4121205a537712753eb22465e7c4a25ee3189888c79cdd88bbf86bb0dedbec0212fc704"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GameController.html" data-type="entity-link" >GameController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GeneroController.html" data-type="entity-link" >GeneroController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PerfilController.html" data-type="entity-link" >PerfilController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateGameDto.html" data-type="entity-link" >CreateGameDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGeneroDto.html" data-type="entity-link" >CreateGeneroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePerfilDto.html" data-type="entity-link" >CreatePerfilDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="classes/Genero.html" data-type="entity-link" >Genero</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginResponseDto.html" data-type="entity-link" >LoginResponseDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Perfil.html" data-type="entity-link" >Perfil</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGamesDto.html" data-type="entity-link" >UpdateGamesDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateGeneroDto.html" data-type="entity-link" >UpdateGeneroDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePerfilDto.html" data-type="entity-link" >UpdatePerfilDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneroService.html" data-type="entity-link" >GeneroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PerfilService.html" data-type="entity-link" >PerfilService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});