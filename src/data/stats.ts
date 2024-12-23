import React from 'react';
import {
  Badgeicon,
  Clockicon,
  Cloudupicon,
  Companyicon,
  Globeicon,
  Staricon,
} from '@/icons';
export interface statss {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  value: string;
  tagline: string;
}
export const stats: statss[] = [
  { id: 1, icon: Companyicon, value: '3500+', tagline: 'Trusted EB Customers' },
  { id: 2, icon: Globeicon, value: '1000+', tagline: 'Global reach' },
  { id: 3, icon: Clockicon, value: '24x7', tagline: 'Customer Support' },
  { id: 4, icon: Staricon, value: '4.7', tagline: 'Ratings at Google' },
  { id: 5, icon: Cloudupicon, value: '99.9%', tagline: 'Uptime & Availablity' },
  { id: 6, icon: Badgeicon, value: '30+', tagline: 'Awards & Recognitions' },
];
