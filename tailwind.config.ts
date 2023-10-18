import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        favorite: "url('/img/Favorite-Default.svg')",
        'favorite-active': "url('/img/Favorite-HoverActive.svg')",
        'favorite-hover': "url('/img/Favorite-HoverActive.svg')",
        'more-info': "url('/img/Info-Default.svg')",
        'more-info-hover': "url('/img/Info-Hover.svg')",
        'more-info-mobile': "url('/img/Info-Default_Mobile.svg')",
        'favorite-mobile': "url('/img/Favorite-Default_Mobile.svg')",
        'facebook-share': "url('/img/Icon-Share-Facebook.svg')",
        'facebook-v1-share': "url('/img/Icon-V1-Facebook.svg')",
        'facebook-v2-share': "url('/img/Icon-V2-Facebook.svg')",
        'facebook-share-hover': "url('/img/Icon-Share-Facebook-Hover.svg')",
        'facebook-v1-share-hover': "url('/img/Icon-V1-Facebook-Hover.svg')",
        'twitter-share': "url('/img/Icon-Share-Twitter.svg')",
        'twitter-v1-share': "url('/img/Icon-V1-Twitter.svg')",
        'twitter-v2-share': "url('/img/Icon-V2-Twitter.svg')",
        'twitter-share-hover': "url('/img/Icon-Share-Twitter-Hover.svg')",
        'twitter-v1-share-hover': "url('/img/Icon-V1-Twitter-Hover.svg')",
        'pinterest-share': "url('/img/Icon-Share-Pinterest.svg')",
        'pinterest-v1-share': "url('/img/Icon-V1-Pinterest.svg')",
        'pinterest-v2-share': "url('/img/Icon-V2-Pinterest.svg')",
        'pinterest-share-hover': "url('/img/Icon-Share-Pinterest-Hover.svg')",
        'pinterest-v1-share-hover': "url('/img/Icon-V1-Pinterest-Hover.svg')",
        'email-share': "url('/img/Icon-Email.svg')",
        'email-share-hover': "url('/img/Icon-Email-Hover.svg')",
        'instagram-v1-share': "url('/img/Icon-V1-Instagram.svg')",
        'instagram-v2-share': "url('/img/Icon-V2-Instagram.svg')",
        'instagram-v1-share-hover': "url('/img/Icon-V1-Instagram-Hover.svg')",
        'youtube-v1-share': "url('/img/Icon-V1-Youtube.svg')",
        'youtube-v2-share': "url('/img/Icon-V2-Youtube.svg')",
        'youtube-v1-share-hover': "url('/img/Icon-V1-Youtube-Hover.svg')",
        'linkedin-v1-share': "url('/img/Icon-V1-LinkedIn.svg')",
        'linkedin-v2-share': "url('/img/Icon-V2-Linkedin.svg')",
        'linkedin-v1-share-hover': "url('/img/Icon-V1-LinkedIn-Hover.svg')",
      },
      colors: {
        current: 'currentColor',
        blue: {
          DEFAULT: '#00BFDA', // primary
          2: '#0099B8', // secondary
          3: '#00353C', // secondary
          4: '#007A8B', // tertiary
        },
        coral: {
          DEFAULT: '#F9665E', // primary
          2: '#B64B45', // secondary
          3: '#883929', // secondary
        },
        lemon: {
          DEFAULT: '#FFCC1B', // primary
          2: '#D1A717', // secondary
          3: '#9E7F11', // secondary
          wildest: '#e9c81c', // wildest background hover
        },
        green: {
          DEFAULT: '#00CCA8', // primary
          2: '#00A888',
          3: '#005D4D',
          wildest: '#ECF7F5', // wildest background
        },
        brown: {
          wildest: '#501D0B', // wildest text
        },
        gray: {
          DEFAULT: '#B3B3B3', // primary
          2: '#DADADA', // primary
          3: '#ECECEC', // background
          4: '#F2F2F2', // background
          5: '#F9F9F9', // background
          shadow: '#E3E3E3', // box and drop shadow
          disabled: '#D0D0D0',
        },
        black: {
          DEFAULT: '#242424',
          2: '#4d4d4d',
          3: '#000000',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        'kin-brown': {
          DEFAULT: '#190A05',
        },
        'kin-brown-tint': '#473B37',
        'kin-teal': {
          DEFAULT: '#6CD9D3',
          2: '#009E9E',
          3: '#B2F1EE',
        },
        'kin-yellow': {
          DEFAULT: '#E9C81C',
          2: '#E39B00',
          3: '#F2DF7D',
        },
        'kin-cobalt': {
          DEFAULT: '#42A7FF',
          2: '#0F7DFF',
          3: '#92CAFF',
        },
        'kin-gray': {
          DEFAULT: '#B8B4B2',
          2: '#807672',
          3: '#DBDBD9',
        },
        'kin-white': {
          DEFAULT: '#F0F0EB',
        },
        'kin-orange': {
          DEFAULT: '#D34B22',
        },
        error: '#E54C00',
        google: '#DB4437',
        facebook: '#1877F2',
        transparent: 'transparent',
      },
      fontFamily: {
        sans: ['FKGrotesNeue'],
        secondary: ['"Plantin Headline Condensed-Medium"'],
        halloween: ['OldEnglishStd'],
      },
      fontSize: {
        xl: [
          '3.5rem',
          {
            letterSpacing: '-0.15px',
            lineHeight: '4.0625rem',
          },
        ],
        h1: [
          '4rem',
          {
            letterSpacing: '-0.04em',
            lineHeight: '4rem',
          },
        ],
        h2: [
          '3rem',
          {
            letterSpacing: '-0.04em',
            lineHeight: '3rem',
          },
        ],
        'h3-secondary': [
          '2rem',
          {
            letterSpacing: '-0.04em',
            lineHeight: '2.4375rem',
          },
        ],
        h3: [
          '1.625rem',
          {
            letterSpacing: '-0.0094em',
            lineHeight: '2.4375rem',
          },
        ],
        h4: [
          '1.25rem',
          {
            letterSpacing: '-0.15px',
            lineHeight: '2rem',
          },
        ],
        h5: [
          '1rem',
          {
            letterSpacing: '-0.15px',
            lineHeight: '1.563rem',
          },
        ],
        h6: [
          '0.875rem',
          {
            letterSpacing: '-0.15px',
            lineHeight: '1.375rem',
          },
        ],
        'h6-tiny': [
          '0.75rem',
          {
            letterSpacing: '-0.15px',
            lineHeight: '1.063rem',
          },
        ],
        'x-tiny': [
          '0.625rem',
          {
            letterSpacing: '-0.15px',
            lineHeight: '0.75rem',
          },
        ],
        base: [
          '1.25rem',
          {
            letterSpacing: '-0.15px',
            lineHeight: '2rem',
          },
        ],
      },
      lineHeight: {
        xl: '4.0625rem',
        h1: '3.875rem',
        h2: '3rem',
        h3: '2.438rem',
        'h3-sm': '1.875rem',
        h4: '2rem',
        'h4-sm': '1.625rem',
        h5: '1.563rem',
        'h5-md': '1.25rem',
        'h5-sm': '1.125rem',
        h6: '1.375rem',
        'h6-tiny': '1.063rem',
        'h6-tiny-sm': '0.875rem',
        'x-tiny': '0.75rem',
      },
      letterSpacing: {
        tightest: '-.075rem',
        tighter: '-.05rem',
        tight: '-.015625rem',
        normal: '0',
        wide: '.025rem',
        wider: '.05rem',
        widest: '.1rem',
      },
      fontWeight: {
        light: '300',
        normal: '500',
        bold: '700',
        'extra-bold': '900',
      },
      spacing: {
        0: '0',
        5: '0.313rem',
        8: '0.5rem',
        10: '0.625rem',
        15: '0.938rem',
        20: '1.25rem',
        25: '1.563rem',
        30: '1.875rem',
        35: '2.1875rem',
        40: '2.5rem',
        45: '2.812rem',
        50: '3.125rem',
        60: '3.75rem',
        70: '4.375rem',
        80: '5rem',
        100: '6.25rem',
        110: '6.875rem',
        120: '7.5rem',
        137: '8.5625rem',
        140: '8.75rem',
        210: '13.125rem',
        250: '15.625rem',
        256: '16rem',
        350: '21.875rem',
        'favorite-icon': '2.2rem',
        'more-info': '2.2rem',
        'purina-w': '10.5rem',
        'purina-h': '1.8rem',
        'purina-mobile-w': '6.938rem',
        'chewy-w': '5rem',
        'chewy-h': '1.438rem',
        'chewy-mobile-w': '4rem',
        'chewy-mobile-h': '1.1rem',
        'petbasics-w': '4.625rem',
        'petbasics-mobile-w': '4.25rem',
        'petbasics-mobile-h': '1.438rem',
      },
      minHeight: {
        0: '0',
        5: '0.313rem',
        8: '0.5rem',
        10: '0.625rem',
        15: '0.938rem',
        20: '1.25rem',
        25: '1.563rem',
        30: '1.875rem',
        35: '2.1875rem',
        40: '2.5rem',
        45: '2.812rem',
        50: '3.125rem',
        60: '3.75rem',
        80: '5rem',
        100: '6.25rem',
        120: '7.5rem',
        140: '8.75rem',
        150: '9.375rem',
        210: '13.125rem',
        256: '16rem',
        300: '18.75rem',
        350: '21.875rem',
        full: '100%',
        screen: '100vh',
      },
      boxShadow: {
        'inner-hover-blue': '0 2px 0 0 theme(colors.blue.3)',
        'inner-active-blue': 'inset 0 2px 3px 0 rgba(0,122,139,1)',
        'inner-hover-coral': '0 2px 0 0 theme(colors.coral.3)',
        'inner-active-coral': 'inset 0 2px 3px 0 theme(colors.coral.2)',
        'inner-hover-green': '0 2px 0 0 theme(colors.green.3)',
        'inner-active-green': 'inset 0 2px 3px 0 theme(colors.green.2)',
        tooltip: '0 2px 4px 0 theme(colors.gray.shadow)',
        'icon-shadow': '0px 4px 12px theme(colors.gray.shadow)',
        'sticky-note': '0px -4px 10px theme(colors.gray.shadow)',
        card: '0 0.25rem 0.625rem theme(colors.gray.shadow)',
        offer: '0 4px 10px theme(colors.gray.shadow)',
      },
      inset: {
        80: '5rem',
        20: '1.25rem',
      },
      borderWidth: {
        5: '0.313rem',
        10: '0.625rem',
      },
      maxHeight: {
        'minus-160': 'calc(100vh - 160px)',
        'minus-255': 'calc(100vh - 255px)',
      },
      maxWidth: {
        10: '10%',
      },
      gridTemplateRows: {
        '4-auto': 'repeat(4, minmax(0, auto))',
      },
    },
  },
  plugins: [],
};
export default config;
