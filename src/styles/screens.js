const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  maxmobileS: `(max-width: ${size.mobileS})`,
  maxmobileM: `(max-width: ${size.mobileM})`,
  maxmobileL: `(max-width: ${size.mobileL})`,
  maxtablet: `(max-width: ${size.tablet})`,
  maxlaptop: `(max-width: ${size.laptop})`,
  maxlaptopL: `(max-width: ${size.laptopL})`,
  maxdesktop: `(min-width: ${size.desktop})`,
  minmobileS: `(min-width: ${size.mobileS})`,
  minmobileM: `(min-width: ${size.mobileM})`,
  minmobileL: `(min-width: ${size.mobileL})`,
  mintablet: `(min-width: ${size.tablet})`,
  minlaptop: `(min-width: ${size.laptop})`,
  minlaptopL: `(min-width: ${size.laptopL})`,
  mindesktop: `(min-width: ${size.desktop})`
};