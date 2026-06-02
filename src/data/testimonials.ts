export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 'ref-1',
    quote:
      'Dhairya consistently transforms ambiguous ideas into reliable products with thoughtful engineering.',
    name: 'Alex Morgan',
    role: 'Engineering Manager',
  },
  {
    id: 'ref-2',
    quote:
      'He has a rare balance of speed and quality, and always keeps users at the center of decisions.',
    name: 'Samira Patel',
    role: 'Product Lead',
  },
  {
    id: 'ref-3',
    quote:
      'A creative, dependable collaborator who can move from architecture to implementation effortlessly.',
    name: 'Jordan Lee',
    role: 'Principal Engineer',
  },
  {
    id: 'ref-4',
    quote:
      'His communication and technical execution made cross-functional delivery significantly smoother.',
    name: 'Taylor Brown',
    role: 'Program Manager',
  },
];
