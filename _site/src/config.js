module.exports = {
  email: '804ltkrao@relay.firefox.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/satabios',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/brat_rat.sathya',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sathyabratrat',
    },
    {
      name: 'Linkedin',
      url: 'https://in.linkedin.com/in/sathyaprakash-narayanan-87b07850',
    },
    {
      name: 'Codepen',
      url: 'https://kaggle.com/satabios',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Publications',
      url: '/#publications',
    },
    {
      name: 'Competitions',
      url: '/#competitions',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
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
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};


// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-197727774-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-197727774-1');
// </script>

