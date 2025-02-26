import MeichuLogo from './images/meichu-logo.webp'
import DarkImvuPlus from './images/imvu/dark-imvuPlus.svg'
import DarkImvu from './images/imvu/dark-imvu.svg'
import LightImvu from './images/imvu/light-imvu.svg'
import Profile from './images/another/profile.svg'
import AnyIcon from './images/another/any-icon.webp'
import DarkSingleEmoji from './images/emoji/dark-emoji1.svg'
import DarkDuoEmoji from './images/emoji/dark-emoji2.svg'
import LightSingleEmoji from './images/emoji/light-emoji1.svg'
import LightDuoEmoji from './images/emoji/light-emoji2.svg'
import EventImage from './images/another/event-image.webp'
import EditIcon from './images/another/edit-icon.svg'
import CreditLogo from './images/logo-credits.webp'
import Facebook from './images/sosmed-icons/facebook.svg'
import Instagram from './images/sosmed-icons/instagram.svg'
import Gmail from './images/sosmed-icons/gmail.svg'
import Google from './images/auth-icons/google.svg'
import Apple from './images/auth-icons/apple.svg'
import FacebookAuth from './images/auth-icons/facebook-auth.svg'
import DeafultAvatar from './images/avatar.webp'

export const assetItems = {
     MeichuLogo, Profile, AnyIcon, DarkImvuPlus, DarkImvu, LightImvu, EventImage,
     DarkSingleEmoji, DarkDuoEmoji, LightSingleEmoji, LightDuoEmoji, CreditLogo,
     DeafultAvatar, EditIcon
}

export const categories = [
     'All', 'Head', 'Skin', 'Hairstyle', 'Eye',
     'Eyebrows', 'Avatar', 'Bundles', 'Furniture'
]

export const sosmedIcons = [
     {
          link: 'https://www.facebook.com/',
          icon: Facebook
     }, {
          link: 'https://www.instagram.com/',
          icon: Instagram
     }, {
          link: 'https://mail.google.com/',
          icon: Gmail
     }
]

export const authIcons = [
     {
          icon: Google,
          type: 'google',
     }, {
          icon: Apple
     }, {
          icon: FacebookAuth
     }
]

export const navItems = [
     {
          name: 'Home',
          link: '/',
          route: 'Meichu'
     }, {
          name: 'Catalog',
          link: '/catalog',
          route: 'Catalog'
     }, {
          name: 'BA Meichu',
          link: '/brand-ambassador',
          route: 'Brand Ambassador Meichu'
     }, {
          name: 'Custom Product',
          link: '/custom-product',
          route: 'Custom Product'
     }, {
          name: 'Event',
          link: '/event',
          route: 'Event'
     }
]

export const footerItems = {
     marketplaces: [
          {
               name: 'Explore',
               link: '/catalog'
          }, {
               name: 'Items detail',
               link: '/catalog'
          }, {
               name: 'Request',
               link: '/custom-product'
          }
     ],
     meichu: [
          {
               name: 'About',
               link: '/'
          }, {
               name: 'Shop',
               link: '/catalog'
          }, {
               name: 'Brand Ambassador',
               link: '/brand-ambassador'
          }, {
               name: 'Event',
               link: '/event'
          }, {
               name: 'Contact',
               link: '/'
          }
     ]
}