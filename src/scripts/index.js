/**
 * Import sections bên dưới
 */
import './sections/sliders/sliders-01';
import { doSomething } from './sections/sliders/sliders-01';

import slideHeader from './sections/sliders/slideHeader';
import SlidePrSellers from './sections/content/product-sellers';

import iconHeaderTabletLeft from './sections/menu/header-icon-left';

// From ./sections/slides/sliders-01
doSomething();
console.log('kmacoders developing...');

// slide header 
const slideHead = new slideHeader();

// slide product sellers
const slidePrSeller = new SlidePrSellers();

// icon tablet 
const showIconTabletLeft = new iconHeaderTabletLeft();