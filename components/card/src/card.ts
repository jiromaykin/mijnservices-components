import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('mijnservices-card')
export class MijnservicesCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .mijnservices-card {
      position: relative;
      background-color: var(--mijnservices-card-background-color, #ddeeff);
      border-color: var(--mijnservices-card-border-color, #b3d4f0);
      border-style: solid;
      border-width: var(--mijnservices-card-border-width, 1px);
      border-radius: var(--mijnservices-card-border-radius, 8px);
      padding-block: var(--mijnservices-card-padding-block, 1.5rem);
      padding-inline: var(--mijnservices-card-padding-inline, 1.5rem);
    }

    /* De link bedekt de hele card */
    .mijnservices-card__action::before {
      content: '';
      position: absolute;
      inset: 0;
    }

    .mijnservices-card__domain {
      color: var(--mijnservices-card-domain-color, #1a4a6e);
      font-size: var(--mijnservices-card-domain-font-size, 0.875rem);
      font-weight: var(--mijnservices-card-domain-font-weight, 400);
      margin-block: 0;
    }

    .mijnservices-card__heading {
      color: var(--mijnservices-card-heading-color, #0d2d4a);
      font-size: var(--mijnservices-card-heading-font-size, 1.25rem);
      font-weight: var(--mijnservices-card-heading-font-weight, 700);
      margin-block: var(--mijnservices-card-heading-margin-block, 0.25rem 0);
    }

    .mijnservices-card__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-block-start: var(--mijnservices-card-footer-margin-block-start, 2rem);
    }

    .mijnservices-card__date {
      color: var(--mijnservices-card-date-color, #1a4a6e);
      font-size: var(--mijnservices-card-date-font-size, 0.875rem);
    }

    .mijnservices-card__action {
      color: var(--mijnservices-card-action-color, #1a6eb4);
      margin-inline-start: auto;
      text-decoration: none;
      display: flex;
      align-items: center;
    }

    .mijnservices-card__arrow {
      block-size: 1.5rem;
      inline-size: 1.5rem;
    }
  `;

  @property() heading = '';
  @property() domain = '';
  @property() href = '';
  @property() date = '';
  @property({ attribute: 'date-time' }) dateTime = '';

  render() {
    return html`
      <div class="mijnservices-card">
        <p class="mijnservices-card__domain">${this.domain}</p>
        <p class="mijnservices-card__heading">${this.heading}</p>
        <div class="mijnservices-card__footer">
          ${this.date ? html`
            <time class="mijnservices-card__date" datetime="${this.dateTime}">
              ${this.date}
            </time>
          ` : html`<span></span>`}
          
            class="mijnservices-card__action"
            href="${this.href}"
            aria-label="${this.heading}"
          >
            <svg class="mijnservices-card__arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path fill="currentColor" d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"></path>
            </svg>
          </a>
        </div>
      </div>
    `;
  }
}
