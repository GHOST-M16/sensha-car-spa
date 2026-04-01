export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
}

export interface Review {
  id: string;
  name: string;
  carModel: string;
  rating: number;
  comment: string;
  photo: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: 'supercar' | 'daily' | 'classic';
}

export const SERVICES: Service[] = [
  {
    id: 'basic',
    title: 'Basic Detail',
    description: 'Essential care for your daily driver. Thorough exterior wash and interior vacuum.',
    price: 'From $150',
    features: [
      'Hand Wash & Dry',
      'Wheel & Tire Cleaning',
      'Interior Vacuum',
      'Window Cleaning',
      'Spray Wax Protection'
    ],
    image: 'https://lh3.googleusercontent.com/p/AF1QipPPfn0fJdUB0hEQy_u-sotE8uyVukRteqLqL1UO=s1360-w1360-h1020-rw'
  },
  {
    id: 'executive',
    title: 'Executive Spa',
    description: 'Deep cleaning and paint enhancement for a showroom-ready look.',
    price: 'From $350',
    features: [
      'Everything in Basic',
      'Clay Bar Treatment',
      'Single Stage Machine Polish',
      'Leather Conditioning',
      'Engine Bay Cleaning',
      '6-Month Sealant'
    ],
    image: 'https://lh3.googleusercontent.com/p/AF1QipMUdEJ-FvK7ISSoSkcySRgpoIlsSpsW3WSuNO3z=s1360-w1360-h1020-rw'
  },
  {
    id: 'ultra',
    title: 'Ultra Premium Coating',
    description: 'The ultimate protection. Multi-stage correction and ceramic coating.',
    price: 'From $850',
    features: [
      'Everything in Executive',
      'Multi-Stage Paint Correction',
      '9H Ceramic Coating (3 Years)',
      'Wheel Coating',
      'Glass Hydrophobic Coating',
      'Interior Steam Cleaning'
    ],
    image: 'https://lh3.googleusercontent.com/p/AF1QipMBf4LX2E9rbH6ps9y7c2hT2x99lkjcfe46TKhm=s1360-w1360-h1020-rw'
  },
  {
    id: 'ppf',
    title: 'Paint Protection Film',
    description: 'Self-healing armor for your vehicle. Ultimate stone chip protection.',
    price: 'Custom Quote',
    features: [
      'Full Front or Full Body',
      'Self-Healing Technology',
      'High Gloss Finish',
      '10-Year Warranty',
      'Edge Wrapping'
    ],
    image: 'https://lh3.googleusercontent.com/p/AF1QipM3gdTqIW7mIsRQYPwgnXcXC7UvUupWhO0Ife9W=s1360-w1360-h1020-rw'
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Yi Da Sia',
    carModel: 'Premium Coating Client',
    rating: 5,
    comment: 'Was very satisfied with the coating job done and the outstanding service. Boss was very patience enough to explain the process and how to take care of the coating conditions. Appointment was very convenient and easy. Not to mention the car wash itself was very clean, spotless inside and outside. Well done!',
    photo: 'https://i.pravatar.cc/150?u=yidasia'
  },
  {
    id: '2',
    name: 'Lee Ka Shing',
    carModel: 'Detailing Client',
    rating: 5,
    comment: "Kenny and the team did a good job refreshing my car, and gave me very good advice on how to maintain my paint. They maintained professionalism and I appreciate the effort and care that they're put in. Will come again.",
    photo: 'https://i.pravatar.cc/150?u=leekashing'
  },
  {
    id: '3',
    name: 'Sarah Aznor',
    carModel: 'New Car Detailing',
    rating: 5,
    comment: 'Kenny layan all my questions and quick to respond – 10am I dropped him a text and 2 hours later I got my car dropped off and voila! My new car looks even newer 🙂↕️ Best part: No hard selling. Will be my absolute go-to!',
    photo: 'https://i.pravatar.cc/150?u=sarahaznor'
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', title: 'Premium Detailing Finish', image: 'https://lh3.googleusercontent.com/p/AF1QipMBf4LX2E9rbH6ps9y7c2hT2x99lkjcfe46TKhm=s1360-w1360-h1020-rw', category: 'supercar' },
  { id: 'g2', title: 'Showroom Shine', image: 'https://lh3.googleusercontent.com/p/AF1QipPPfn0fJdUB0hEQy_u-sotE8uyVukRteqLqL1UO=s1360-w1360-h1020-rw', category: 'supercar' },
  { id: 'g3', title: 'Precision Detailing', image: 'https://lh3.googleusercontent.com/p/AF1QipMUdEJ-FvK7ISSoSkcySRgpoIlsSpsW3WSuNO3z=s1360-w1360-h1020-rw', category: 'supercar' },
  { id: 'g4', title: 'Luxury Protection', image: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwepCs9t8N4BeeybSrXvPD4kgpUfhAFN4KnhqwmJIoQF1u2AaAOLPl1jDBz3czgvyvWngCMtsc02RxgYfuNOcahizw5b37OGnl-LOqj2uruxzOUwoAZuaPDVrhzb4Umta-7T1Sd0=s1360-w1360-h1020-rw', category: 'supercar' },
  { id: 'g5', title: 'Exotic Car Care', image: 'https://lh3.googleusercontent.com/p/AF1QipM3gdTqIW7mIsRQYPwgnXcXC7UvUupWhO0Ife9W=s1360-w1360-h1020-rw', category: 'supercar' },
  { id: 'g6', title: 'Pristine Finish', image: 'https://lh3.googleusercontent.com/p/AF1QipOQLXAEgmahenHVd9pG1Rbso2-4xt3v8ePISLYK=s1360-w1360-h1020-rw', category: 'supercar' }
];
