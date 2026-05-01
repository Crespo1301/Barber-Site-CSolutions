export const site = {
  brand: 'Barber Studio Template',
  tagline: 'Premium cuts, clean details, and a chair worth returning to.',
  phone: '(000) 000-0000',
  email: 'booking@example.com',
  address: {
    line1: '123 Template Street',
    line2: 'Your City, ST 00000',
  },
  hours: [
    { day: 'Tuesday - Friday', time: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 5:00 PM' },
    { day: 'Sunday - Monday', time: 'Closed' },
  ],
  bookingUrl: '#contact',
  social: {
    instagram: 'https://instagram.com/',
  },
}

export const services = [
  {
    name: 'Signature Cut',
    price: '$35',
    duration: '45 min',
    description: 'A consultation, precision haircut, hot towel finish, and styling.',
  },
  {
    name: 'Skin Fade',
    price: '$40',
    duration: '50 min',
    description: 'Bald or skin fade blended into your length of choice with razor detail work.',
  },
  {
    name: 'Beard Trim & Shape',
    price: '$20',
    duration: '20 min',
    description: 'Line-up, sculpt, and condition. Hot towel and beard oil included.',
  },
  {
    name: 'Classic Straight Razor Shave',
    price: '$35',
    duration: '40 min',
    description: 'Hot towel, pre-shave oil, traditional lather, and a true straight razor finish.',
  },
  {
    name: 'The Full Service',
    price: '$65',
    duration: '75 min',
    description: 'Signature cut paired with a classic straight razor shave and beard treatment.',
  },
  {
    name: 'Father & Son',
    price: '$55',
    duration: '60 min',
    description: 'A cut for dad and a cut for the little man. Sons 12 and under.',
  },
]

export const cuts = [
  { before: '/images/template-placeholder.svg', after: '/images/template-placeholder.svg', label: 'Before / after slot' },
  { before: '/images/template-placeholder.svg', after: '/images/template-placeholder.svg', label: 'Featured transformation slot' },
  { before: '/images/template-placeholder.svg', after: '/images/template-placeholder.svg', label: 'Gallery placeholder slot' },
]
