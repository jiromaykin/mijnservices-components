import React from 'react';
import { createComponent } from '@lit/react';
import { MijnservicesCard } from './card.js';

export const Card = createComponent({
  tagName: 'mijnservices-card',
  elementClass: MijnservicesCard,
  react: React,
});
