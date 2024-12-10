import AutumnMain from './images/meichu-bundle/autumn-bundle/autumn-main.png';
import AutumnItem1 from './images/meichu-bundle/autumn-bundle/autumn-1.png';
import AutumnItem2 from './images/meichu-bundle/autumn-bundle/autumn-2.png';
import AutumnItem3 from './images/meichu-bundle/autumn-bundle/autumn-3.png';

import WitchMain from './images/meichu-bundle/witch-bundle/witch-main.png';
import WitchItem1 from './images/meichu-bundle/witch-bundle/witch-1.png';
import WitchItem2 from './images/meichu-bundle/witch-bundle/witch-2.png';
import WitchItem3 from './images/meichu-bundle/witch-bundle/witch-3.png';

import ButterflyMain from './images/meichu-bundle/butterfly-bundle/butterfly-main.jpg';
import ButterflyItem1 from './images/meichu-bundle/butterfly-bundle/butterfly-1.jpg';
import ButterflyItem2 from './images/meichu-bundle/butterfly-bundle/butterfly-2.jpg';

import RedPlaidMain from './images/meichu-bundle/redplaid-bundle/redplaid-main.jpg';
import RedPlaidItem1 from './images/meichu-bundle/redplaid-bundle/redplaid-1.jpg';
import RedPlaidItem2 from './images/meichu-bundle/redplaid-bundle/redplaid-2.jpg';

import SpringMain from './images/meichu-bundle/spring-bundle/spring-main.png';
import ChineseMain from './images/meichu-bundle/chinese-bundle/chinese-main.png';

// headImages / catalog products
export const mainProductBundle = [
     SpringMain, ChineseMain, WitchItem3,
     RedPlaidMain, ButterflyMain, AutumnMain
]

// best seller
export const butterflyBundle = [
     ButterflyItem1, ButterflyMain, ButterflyItem2,
]

// bundle products
export const bundleProducts = [
     {
          name: 'Autumn',
          main: AutumnMain,
          items: [
               AutumnItem1, AutumnItem2, AutumnItem3,
               AutumnItem1, AutumnItem2, AutumnItem3,
               AutumnItem1, AutumnItem2, AutumnItem3
          ]
     }, {

          name: 'Witch',
          main: WitchMain,
          items: [
               WitchItem1, WitchItem2, WitchItem3,
               WitchItem1, WitchItem2, WitchItem3,
               WitchItem1, WitchItem2, WitchItem3
          ]
     }, {

          name: 'Butterfly',
          main: ButterflyMain,
          items: [
               ButterflyItem1, ButterflyItem2, ButterflyItem1,
               ButterflyItem1, ButterflyItem2, ButterflyItem1,
               ButterflyItem1, ButterflyItem2, ButterflyItem1
          ]
     }, {

          name: 'RedPlaid',
          main: RedPlaidMain,
          items: [
               RedPlaidItem1, RedPlaidItem2, RedPlaidItem1,
               RedPlaidItem1, RedPlaidItem2, RedPlaidItem1,
               RedPlaidItem1, RedPlaidItem2, RedPlaidItem1
          ]
     }
]

export const detailProducts = [AutumnMain, AutumnItem1, AutumnItem2]

