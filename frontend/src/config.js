module.exports = {
  email: 'liam@liamtyrie.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/liamtyrie'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/liamtyriewebdesign'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/liamtyriemusic'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/liamtyrie'
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/liamtyrie'
    }
  ],

  navLinks: [
    {
      name: 'Men',
      url: '/products'
    },
    {
      name: 'Women',
      url: '/products'
    },
    {
      name: 'Kids',
      url: '/products'
    },
    {
      name: 'Accessories',
      url: '/products'
    },
    {
      name: 'Collections',
      url: '/products'
    },
    {
      name: 'Clearance',
      url: '/products'
    }
  ],

  colors: {
    green: '#7d8597',
    navy: '#001845',
    darkNavy: '#001233'
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }
  })
};
