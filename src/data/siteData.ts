export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'platters' | 'sandwiches' | 'specialties' | 'sides' | 'catering';
  popular?: boolean;
  image?: string;
  notes?: string;
}

export interface ScheduleStop {
  id: string;
  date: string;
  dayOfWeek: string;
  time: string;
  locationName: string;
  address: string;
  city: string;
  isToday?: boolean;
  status: 'confirmed' | 'active' | 'upcoming';
  notes?: string;
  mapQuery: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  source: string;
  rating: number;
  date: string;
}

export const BUSINESS_INFO = {
  name: 'Rival Q BBQ',
  legalName: 'Rival Q Barbecue LLC',
  tagline: 'Never Underestimate the Smoke.',
  subTagline: 'Real wood-smoked barbecue crafted in Fostoria, Ohio. Serving until sold out.',
  motto: 'We strive to give you the best bite every time.',
  owner: 'Jeremy Weidner',
  phone: '(419) 306-4401',
  phoneRaw: '4193064401',
  email: 'RivalQBarbecue@gmail.com',
  location: 'Fostoria, Ohio 44830',
  serviceArea: 'Fostoria, Findlay, Seneca County & Northwest Ohio',
  facebook: 'https://www.facebook.com/p/Rival-Q-BBQ-61563203428687/',
  streetFoodFinder: 'https://streetfoodfinder.com/RivalQ',
  tikTok: 'https://tiktok.com/@rival.q.barbecue',
  rating: '98%',
  reviewCount: 69,
  socialFollowers: '2.2K+',
  smokerProof: '480 lbs smoked in a single run (200 lb brisket, 150 lb pork butts, 80 lb chicken, 50 lb wings)',
  assets: {
    logo: '/assets/logo.jpg',
    truckBrisket: '/assets/truck-brisket.jpg',
    smokedChicken: '/assets/smoked-chicken.jpg',
    pulledPorkSandwich: '/assets/pulled-pork-sandwich.jpg',
    bbqNachos: '/assets/bbq-nachos.jpg',
    menuPlatter: '/assets/menu-item-2.jpg',
  }
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'pulled-pork-platter',
    name: 'Pulled Pork Platter',
    description: 'Slow-smoked hand-pulled pork butt seasoned with our house rub, served with two hearty sides and cornbread.',
    price: '$16',
    category: 'platters',
    popular: true,
    image: '/assets/menu-item-2.jpg',
    notes: 'Real hickory & oak wood smoked'
  },
  {
    id: 'pulled-pork-sandwich',
    name: 'Pulled Pork Sandwich',
    description: 'Generous mound of tender smoked pulled pork piled high on a toasted bakery bun, with house BBQ sauce and crisp slaw.',
    price: '$8',
    category: 'sandwiches',
    popular: true,
    image: '/assets/pulled-pork-sandwich.jpg',
    notes: 'Customer favorite lunch staple'
  },
  {
    id: 'smoked-chicken-platter',
    name: 'Smoked Chicken Quarter Platter',
    description: 'Crispy glazed skin, juicy dark-meat chicken quarters smoked low & slow until fork-tender. Includes two signature sides.',
    price: '$16',
    category: 'platters',
    popular: true,
    image: '/assets/smoked-chicken.jpg',
    notes: 'Smoked fresh daily on the pit'
  },
  {
    id: 'jalapeno-cheddar-sausage',
    name: 'Jalapeño Cheddar Sausage Platter',
    description: 'Plump smoked sausage links stuffed with sharp cheddar and fresh diced jalapeños, smoked until bursting with flavor. With two sides.',
    price: '$16',
    category: 'platters',
    popular: false,
    notes: 'Satisfying snap with mild warmth'
  },
  {
    id: 'q-bowl',
    name: 'The Signature Q-Bowl',
    description: 'A layered comfort bowl of warm, creamy cheesy potatoes topped with tender pulled pork, drizzled with sweet & tangy BBQ sauce.',
    price: '$10',
    category: 'specialties',
    popular: true,
    notes: 'The ultimate on-the-go smoke bowl'
  },
  {
    id: 'bbq-nachos',
    name: 'Pitmaster Pulled Pork Nachos',
    description: 'Crisp tortilla chips smothered in rich nacho cheese, piled high with wood-smoked pulled pork, fresh sour cream, and savory BBQ drizzle.',
    price: '$12',
    category: 'specialties',
    popular: true,
    image: '/assets/bbq-nachos.jpg',
    notes: 'Huge crowd-sharing portion'
  },
  {
    id: 'cheesy-potatoes',
    name: 'House Cheesy Potatoes',
    description: 'Creamy, decadent hash brown casserole baked with rich cheddar cheese, sour cream, and savory garlic herbs.',
    price: '$4',
    category: 'sides',
    popular: true,
    notes: 'Rival Q must-have side'
  },
  {
    id: 'pit-beans',
    name: 'Smoked Pit Beans',
    description: 'Slow-simmered baked beans infused with brown sugar, sweet molasses, smoky bacon drippings, and tender brisket bits.',
    price: '$4',
    category: 'sides',
    popular: true,
    notes: 'Cooked directly beneath the smoker drip'
  },
  {
    id: 'fresh-coleslaw',
    name: 'Creamy Country Coleslaw',
    description: 'Finely shredded crisp cabbage and carrots tossed in our signature tangy sweet cream dressing.',
    price: '$3',
    category: 'sides'
  },
  {
    id: 'sweet-cornbread',
    name: 'Golden Sweet Cornbread',
    description: 'Moist, buttery Southern-style cornbread muffin baked golden brown.',
    price: '$2',
    category: 'sides'
  },
  {
    id: 'smoked-brisket-special',
    name: 'Slow-Smoked Prime Brisket (Rotating)',
    description: 'Coarse black pepper and kosher salt Texas-style bark, deep smoke ring, sliced thick with melted marbling.',
    price: 'Market Price',
    category: 'platters',
    notes: 'Limited batches — early sellout risk'
  },
  {
    id: 'st-louis-ribs',
    name: 'St. Louis Style Cut Ribs (Rotating)',
    description: 'Smoked tender over real logs until clean bite off the bone with a rich caramelized glaze.',
    price: '$18 / Half Slab',
    category: 'platters',
    notes: 'Featured at local weekend rallies'
  }
];

export const SCHEDULE_STOPS: ScheduleStop[] = [
  {
    id: 'stop-1',
    date: 'Friday, Sept 5',
    dayOfWeek: 'Friday',
    time: '11:00 AM – 6:00 PM (or until sold out)',
    locationName: 'Fostoria Downtown Pop-Up',
    address: '121 S. Countyline St',
    city: 'Fostoria, OH 44830',
    isToday: true,
    status: 'active',
    notes: 'Serving lunch & dinner! Smoker fired up with Pulled Pork, Chicken Quarters & Q-Bowls.',
    mapQuery: '121+S+Countyline+St+Fostoria+OH+44830'
  },
  {
    id: 'stop-2',
    date: 'Saturday, Sept 6',
    dayOfWeek: 'Saturday',
    time: '12:00 PM – 7:00 PM',
    locationName: 'Findlay Community & Food Truck Rally',
    address: 'Main St & 2nd St',
    city: 'Findlay, OH 45840',
    status: 'confirmed',
    notes: 'Full menu running including Brisket and Nachos. Come early before favorites sell out!',
    mapQuery: 'Main+St+and+2nd+St+Findlay+OH'
  },
  {
    id: 'stop-3',
    date: 'Wednesday, Sept 10',
    dayOfWeek: 'Wednesday',
    time: '11:30 AM – 3:30 PM',
    locationName: 'Seneca County Industrial Park Lunch Stop',
    address: 'County Rd 23',
    city: 'Fostoria, OH 44830',
    status: 'upcoming',
    notes: 'Speedy lunch turnaround for plant workers & local teams.',
    mapQuery: 'Fostoria+OH+44830'
  },
  {
    id: 'stop-4',
    date: 'Saturday, Sept 13',
    dayOfWeek: 'Saturday',
    time: '12:00 PM – 8:00 PM',
    locationName: 'Fostoria Rail & Heritage Festival',
    address: 'Iron Triangle Rail Park',
    city: 'Fostoria, OH 44830',
    status: 'upcoming',
    notes: 'Special event batch featuring Big Boy BBQ Platters & Smoked Wings.',
    mapQuery: 'Iron+Triangle+Rail+Park+Fostoria+OH'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    author: 'Mark T.',
    source: 'Facebook Review',
    rating: 5,
    date: 'Verified Customer',
    quote: 'Best barbecue in Seneca County hands down! The pulled pork has that genuine wood smoke flavor you only get when somebody actually tends a real fire. Cheesy potatoes are out of this world.'
  },
  {
    id: 'rev-2',
    author: 'Sarah M.',
    source: 'Facebook Review',
    rating: 5,
    date: 'Verified Customer',
    quote: 'We hired Rival Q BBQ to cater our company summer picnic for 140 people. Jeremy made the entire process painless. Guests are still raving about the brisket and jalapeño cheddar sausages!'
  },
  {
    id: 'rev-3',
    author: 'Dave R.',
    source: 'StreetFoodFinder Review',
    rating: 5,
    date: 'Local Foodie',
    quote: 'Grabbed the Q-Bowl for lunch at their Fostoria pop-up. Absolute comfort food perfection. Get there early because when the smoke clears, they really are sold out.'
  }
];

export const CATERING_PACKAGES = [
  {
    id: 'smokehouse-sampler',
    name: 'The Smokehouse Buffet',
    minGuests: 25,
    pricePerPerson: '$17 - $21',
    description: 'Two slow-smoked meats (Pulled Pork + Smoked Chicken Quarters), two hot sides, house coleslaw, buns, BBQ sauce & paper goods.',
    bestFor: 'Graduations, reunions, family celebrations'
  },
  {
    id: 'pitmaster-grand',
    name: 'Pitmaster Prime Feast',
    minGuests: 40,
    pricePerPerson: '$23 - $28',
    description: 'Three meats (Smoked Brisket, Pulled Pork, Jalapeño Cheddar Sausage), three sides, sweet cornbread, pickled red onions & signature sauces.',
    bestFor: 'Weddings, corporate banquets, large festivals'
  },
  {
    id: 'bulk-meats',
    name: 'A La Carte Smoker Pan Orders',
    minGuests: 15,
    pricePerPerson: 'Priced by the pound / half-pan',
    description: 'Hot ready-to-serve pans of Pulled Pork by the pound, full racks of ribs, pans of cheesy potatoes, and pit beans.',
    bestFor: 'Game day tailgates, office lunches, party self-service'
  }
];

export const FAQS = [
  {
    q: 'What kind of wood do you smoke with?',
    a: 'We use 100% genuine hardwood splits—principally seasoned oak and hickory—to deliver authentic, deep smoke flavor with clean combustion. No liquid smoke, no gas pellets, no shortcuts.'
  },
  {
    q: 'Do you sell out of meat at pop-ups?',
    a: 'Yes. Because authentic wood-smoked barbecue takes up to 14 hours on the pit, we smoke a calculated batch for each stop. Once that day’s meats are served, we close up until the next smoke. We strongly encourage checking our live hours and arriving early.'
  },
  {
    q: 'How far in advance should I book catering?',
    a: 'For weekend celebrations and weddings during peak spring/summer months, we recommend reaching out 3 to 6 weeks in advance. For weekday corporate lunches or bulk pans, 5 to 7 days notice is usually sufficient.'
  },
  {
    q: 'Where can I find your daily menu and location?',
    a: 'Right here on this site under Schedule & Menu! We also broadcast real-time stop updates on our official Facebook page and StreetFoodFinder.'
  },
  {
    q: 'Can you accommodate large crowds?',
    a: 'Absolutely. We have demonstrated capability smoking over 480 lbs of prime meats in a single day (200 lbs brisket, 150 lbs pork butts, 80 lbs chicken, 50 lbs wings). We handle groups from 25 to 500+ guests.'
  }
];
