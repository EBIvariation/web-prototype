function VFExample() {
    return (
        <div dangerouslySetInnerHTML={{
            __html:
                `<section class="vf-card-container vf-card-container__col-3 | vf-u-background-color-ui--white vf-u-fullbleed" style="--vf-card__image--aspect-ratio: 16 / 9;">
            <div className="vf-card-container__inner">
                <div className="vf-section-header">
                <h2 className="vf-section-header__heading vf-section-header__heading--is-link"><a href="JavaScript:Void(0);">Missions</a><svg aria-hidden="true" className="vf-section-header__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="" fill-rule="nonzero"></path>
                    </svg></h2>
                <p className="vf-section-header__text">To promote molecular biology across Europe</p>
                <p className="vf-section-header__text">To create a centre of excellence for Europe's leading young molecular biologists</p>
                </div>


                <article className="vf-card vf-card--brand vf-card--bordered">

                <img src="../../assets/vf-card-example.png" alt="" className="vf-card__image" loading="lazy"/>
                <div className="vf-card__content | vf-stack vf-stack--400">
                    <h3 className="vf-card__heading"><a className="vf-card__link" href="JavaScript:Void(0);">One card <svg aria-hidden="true" className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="currentColor" fill-rule="nonzero"></path>
                        </svg>
                    </a></h3>
                    <p className="vf-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos? Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</p>
                </div>
                </article>



                <article className="vf-card vf-card--brand vf-card--bordered">

                <img src="../../assets/vf-card-example.png" alt="" className="vf-card__image" loading="lazy"/>
                <div className="vf-card__content | vf-stack vf-stack--400">
                    <h3 className="vf-card__heading"><a className="vf-card__link" href="JavaScript:Void(0);">A card here <svg aria-hidden="true" className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="currentColor" fill-rule="nonzero"></path>
                        </svg>
                    </a></h3>
                    <p className="vf-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                </article>



                <article className="vf-card vf-card--brand vf-card--bordered">

                <img src="../../assets/vf-card-example.png" alt="" className="vf-card__image" loading="lazy"/>
                <div className="vf-card__content | vf-stack vf-stack--400">
                    <h3 className="vf-card__heading"><a className="vf-card__link" href="JavaScript:Void(0);">Another card <svg aria-hidden="true" className="vf-card__heading__icon | vf-icon vf-icon-arrow--inline-end" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0C5.376.008.008 5.376 0 12zm13.707-5.209l4.5 4.5a1 1 0 010 1.414l-4.5 4.5a1 1 0 01-1.414-1.414l2.366-2.367a.25.25 0 00-.177-.424H6a1 1 0 010-2h8.482a.25.25 0 00.177-.427l-2.366-2.368a1 1 0 011.414-1.414z" fill="currentColor" fill-rule="nonzero"></path>
                        </svg>
                    </a></h3>
                    <p className="vf-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente harum, omnis provident saepe aut eius aliquam sequi fugit incidunt reiciendis, mollitia quos?</p>
                </div>
                </article>
            </div>
            </section>
            <div class="vf-banner vf-banner--alert vf-banner--info">
                <div class="vf-banner__content">
                    <p class="vf-banner__text">Here is some very, <em>very</em> <a class="vf-banner__link" href="JavaScript:Void(0);">important information</a></p>
                    <button role="button" aria-label="close notification banner" class="vf-button vf-button--icon vf-button--dismiss | vf-banner__button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>dismiss banner</title>
                        <path d="M14.3,12.179a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.442L12.177,9.7a.25.25,0,0,1-.354,0L2.561.442A1.5,1.5,0,0,0,.439,2.563L9.7,11.825a.25.25,0,0,1,0,.354L.439,21.442a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,0,0,2.122-2.121Z" />
                    </svg>
                    </button>
                </div>
            </div>
            `
        }}/>
    );
}

export default VFExample;