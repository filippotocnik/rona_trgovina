import React, { Fragment } from "react";
import "./App.scss";

function App() {
  return (
    <Fragment>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                item1
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                item2
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                item3
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                item4
              </a>
            </li>
            <li className="navigation__item">
              <a className="navigation__link" href="#">
                item5
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <header className="header">
        <div className="header__logo-box">
          <img src="rona-logo.png" className="header__logo" alt="Logo"></img>
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Rona Trgovina</span>
            <span className="heading-primary--sub">
              Prodaja žarnic in svetil
            </span>
          </h1>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Prodaja žarnic in svetil</h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Bolj podroben opis podjetja itd.. + par slik produktov
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut.
              </p>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Live adventures like you never have before
              </h3>
              <p className="paragraph u-margin-bottom-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* <a className="btn-text" href="#">Learn more &rarr;</a> */}
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src="img2.jpg"
                  className="composition__photo composition__photo--p1"
                  alt=""
                ></img>
                <img
                  src="img1.jpg"
                  className="composition__photo composition__photo--p2"
                  alt=""
                ></img>
                <img
                  src="img3.jpg"
                  className="composition__photo composition__photo--p3"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="row">
            <div className="col-1-of-3">
              <a
                href="https://www.osram.com/cb/products/index.jsp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="feature-box">
                  {/* <i className="feature-box__icon fa fa_icon compas"></i> */}
                  <img src="osram-logo2.png" alt="logo"></img>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Osram
                  </h3>
                  {/* <p className="feature-box__text">Osram opis itd...</p> */}
                </div>
              </a>
            </div>

            <div className="col-1-of-3">
              <a
                href="https://www.ledvance.com/consumer/index.jsp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="feature-box">
                  {/* <i className="feature-box__icon"><%= fa_icon "compass" %></i> */}
                  {/* <img src="ledvance-logo.jpg" alt="logo"></img> */}
                  <img src="ledvance-logo2.png" alt="logo"></img>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Ledvance
                  </h3>
                  {/* <p className="feature-box__text">Ledvance opis itd..</p> */}
                </div>
              </a>
            </div>

            <div className="col-1-of-3">
              <a
                href="https://tungsram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="feature-box">
                  {/* <i className="feature-box__icon"><%= fa_icon "map" %></i> */}
                  <img src="tungsram-logo2.png" alt="logo"></img>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Tungsram
                  </h3>
                  {/* <p className="feature-box__text">Tungsram opis itd..</p> */}
                </div>
              </a>
            </div>
          </div>

          <div class="row">
            <div className="col-1-of-3">
              <a
                href="https://www.bailey.nl/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="feature-box">
                  {/* <i className="feature-box__icon"><%= fa_icon "heart" %></i> */}
                  <img src="bailey-logo.png" alt="logo"></img>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Bailey
                  </h3>
                  {/* <p className="feature-box__text">
                  General electric opis itd...
                </p> */}
                </div>
              </a>
            </div>

            <div className="col-1-of-3">
              <a
                href="https://www.vossloh-schwabe.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="feature-box">
                  {/* <i className="feature-box__icon"><%= fa_icon "compass" %></i> */}
                  <img src="vosslo-schwabe-logo.png" alt="logo"></img>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Vossloh Schwabe
                  </h3>
                  {/* <p className="feature-box__text">Ledvance opis itd..</p> */}
                </div>
              </a>
            </div>

            <div className="col-1-of-3">
              <a
                href="https://www.dr-fischer-group.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="feature-box">
                  {/* <i className="feature-box__icon"><%= fa_icon "compass" %></i> */}
                  <img src="drfischer-logo.jpg" alt="logo"></img>
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Dr. Fischer
                  </h3>
                  {/* <p className="feature-box__text">Ledvance opis itd..</p> */}
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* <section class="section-book">
          <div class="row">
            <div class="book">
              <div class="book__form">
                <form action="#" class="form">
                  <div class="u-margin-bottom-medium">
                    <h2 class="heading-secondary">Most popular</h2>
                  </div>
                  <div class="form__group">
                    <input
                      type="text"
                      class="form__input"
                      placeholder="Full name"
                      required
                      id="name"
                    />
                    <label class="form__label" for="name">
                      Full name
                    </label>
                  </div>
                  <div class="form__group">
                    <input
                      type="email"
                      class="form__input"
                      placeholder="Email address"
                      required
                      id="email"
                    />
                    <label class="form__label" for="email">
                      Email adress
                    </label>
                  </div>
                  <div class="form__group u-margin-bottom-medium">
                    <div class="form__radio-group">
                      <input
                        type="radio"
                        class="form__radio-input"
                        id="option1"
                        name="radio-btn"
                      />
                      <label class="form__radio-label" for="option1">
                        <span class="form__radio-button"></span>Option 1
                      </label>
                    </div>
                    <div class="form__radio-group">
                      <input
                        type="radio"
                        class="form__radio-input"
                        id="option2"
                        name="radio-btn"
                      />
                      <label class="form__radio-label" for="option2">
                        <span class="form__radio-button"></span>Option 2
                      </label>
                    </div>
                  </div>
                  <div class="form__group">
                    <button class="btn btn--blue">Gumb</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section class="section-tours">
          <div class="u-center-text u-margin-bottom-big">
            <h2 class="heading-secondary">Most popular lamps...</h2>
          </div>
          <div class="row">
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--1">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--1">
                      heading heading
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>neki</li>
                      <li>neki neki</li>
                      <li>neki</li>
                      <li>neki neki neki</li>
                      <li>neki neki</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back--1">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">200€</p>
                    </div>
                    <a class="btn btn--white" href="#">
                      GUMB
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--2">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--2">
                      heading heading
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>neki</li>
                      <li>neki neki</li>
                      <li>neki</li>
                      <li>neki neki neki</li>
                      <li>neki neki</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back--2">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">200€</p>
                    </div>
                    <a class="btn btn--white" href="#">
                      GUMB
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-1-of-3">
              <div class="card">
                <div class="card__side card__side--front">
                  <div class="card__picture card__picture--3">&nbsp;</div>
                  <h4 class="card__heading">
                    <span class="card__heading-span card__heading-span--3">
                      heading heading
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>neki</li>
                      <li>neki neki</li>
                      <li>neki</li>
                      <li>neki neki neki</li>
                      <li>neki neki</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back--3">
                  <div class="card__cta">
                    <div class="card__price-box">
                      <p class="card__price-only">Only</p>
                      <p class="card__price-value">200€</p>
                    </div>
                    <a class="btn btn--white" href="#">
                      GUMB
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="u-center-text u-margin-top-huge">
            <a href="#" class="btn btn--blue">
              All stuff
            </a>
          </div>
        </section> */}

        <section className="section-stories">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Ekipa</h2>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="image7.jpg"
                  alt="image"
                  className="story__image"
                ></img>
                <figcaption className="story__caption">Caption</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Mojca Potočnik
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="image15.jpg"
                  alt="image"
                  className="story__image"
                ></img>
                <figcaption className="story__caption">Caption</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Robert Mihael Potočnik
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="image11.jpg"
                  alt="image"
                  className="story__image"
                ></img>
                <figcaption className="story__caption">Caption</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Roman Arsovski
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="image3.jpg"
                  alt="image"
                  className="story__image"
                ></img>
                <figcaption className="story__caption">Caption</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Robert Pelko
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="image6.jpg"
                  alt="image"
                  className="story__image"
                ></img>
                <figcaption className="story__caption">Caption</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Krištof Potočnik
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__logo-box">
          <img src="rona-logo.png" alt="Logo" className="footer__logo"></img>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Item 1
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Item 2
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Item 3
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Item 4
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Item 5
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Build by Felipe. Copyright &copy; 2018
            </p>
          </div>
        </div>
      </footer>

      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            {/* <%= image_tag('nat-1-large.jpg', class: 'popup__img', alt: 'photo') %>
        <%= image_tag('nat-1-large.jpg', class: 'popup__img', alt: 'photo') %> */}
          </div>
          <div className="popup__right">
            <a className="popup__close" href="#">
              &times;
            </a>
            <h2 className="heading-secondary u-margin-bottom-small">
              Heading 2
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              kapae, ne ti.. ja ti.
            </h3>
            <p className="popup__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet.
            </p>
            <a className="btn btn--blue" href="#">
              gumb
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
