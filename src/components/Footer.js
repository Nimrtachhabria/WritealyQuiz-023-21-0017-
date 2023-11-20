import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="container container-fluid">
                    <div class="row footer__links">
                        <div class="col footer__col">
                            <div class="footer__title">Product</div>
                            <ul class="footer__items clean-list"><li class="footer__item">
                                <a class="footer__link-item" href="/docs/getting-started/introduction">Security</a>
                            </li><li class="footer__item"><a class="footer__link-item" href="/docs/layout/breakpoints">Erite for chrome</a></li>
                                <li class="footer__item"><a class="footer__link-item" href="/docs/forms/overview">Writer for figma</a></li>
                                <li class="footer__item"><a class="footer__link-item" href="/docs/components/accordion">Request a demo</a></li>
                                <li class="footer__item"><a class="footer__link-item" href="/docs/utilities/transitions">Try for free</a></li></ul></div><div class="col footer__col">
                            <div class="footer__title">Resources</div>
                            <ul class="footer__items clean-list">
                                <li class="footer__item"><a href="https://stackoverflow.com/questions/tagged/react-bootstrap" target="_blank" rel="noopener noreferrer" class="footer__link-item">Blog<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU">
                                <path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li><li class="footer__item">
                                    <a href="https://discord.gg/AKfs9vpvRW" target="_blank" rel="noopener noreferrer" class="footer__link-item">Guides<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a></li></ul></div>
                        <div class="col footer__col"><div class="footer__title">Company</div><ul class="footer__items clean-list"><li class="footer__item">
                            <a href="" target="_blank" rel="noopener noreferrer" class="footer__link-item">Carrer<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                        </path></svg></a>
                        </li>
                        </ul>
                        </div>
                        </div>
                    <div class="footer__bottom text--center"><div class="footer__copyright">Copyright © 2023 WRITEAlY</div></div></div></footer>
        </div>
    );
}

