import React from 'react'
import estilo from '../Componentes/Estilo.css'


const Paquetes = () => {
  return (
    <section class="section-plans" id="section-plans">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">
          Hosting Plans
        </h2>
      </div>

      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front-1">
              <div class="card__title card__title--1">
                <i class="fas fa-paper-plane"></i>
                <h4 class="card__heading">Basic</h4>
              </div>

              <div class="card__details">
                <ul>
                  <li>1 Website</li>
                  <li>50 GB SSD Storage</li>
                  <li>Unmetered Bandwidth</li>
                  <li>Free SSL Certificate</li>
                  <li>1 Included Domain</li>
                  <li>1 Included Domain</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$2.95/mo*</p>
                </div>
                <a href="#popup" class="btn btn--white">Select</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front-2">
              <div class="card__title card__title--2">
                <i class="fas fa-plane"></i>
                <h4 class="card__heading">Plus</h4>
              </div>

              <div class="card__details">
                <ul>
                  <li>Includes Basic Package Features</li>
                  <li>Unlimited Websites</li>
                  <li>Unlimited SSD Storage</li>
                  <li>Unlimited Domains</li>
                  <li>Unlimited Parked Domains</li>
                  <li>Unlimited Sub Domains</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$5.45/mo*</p>
                </div>
                <a href="#popup" class="btn btn--white">Select</a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front-3">
              <div class="card__title card__title--3">
                <i class="fas fa-rocket"></i>
                <h4 class="card__heading">Pro</h4>
              </div>

              <div class="card__details">
                <ul>
                  <li>Includes Plus Plan Features</li>
                  <li>High Performance</li>
                  <li>2 Spam Experts</li>
                  <li>Free SSL Certificate</li>
                  <li>Domain Privacy</li>
                  <li>Site Backup - CodeGuard Basic</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$13.95/mo</p>
                </div>
                <a href="#popup" class="btn btn--white">Select</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="u-center-text u-margin-top-huge">
        <a href="#" class="btn btn--green">Get Started</a>
      </div>
    </section>
  )
}

export default Paquetes
