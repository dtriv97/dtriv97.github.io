export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Dhairya consistently turns complex requirements into elegant and maintainable solutions.',
    author: 'A. Singh',
    role: 'Engineering Manager',
  },
  {
    id: 't2',
    quote: 'One of the most dependable engineers I have worked with across delivery and quality.',
    author: 'M. Patel',
    role: 'Product Lead',
  },
  {
    id: 't3',
    quote:
      'Great at balancing innovation with practical execution, especially on high-impact features.',
    author: 'J. Thompson',
    role: 'Senior Engineer',
  },
];
