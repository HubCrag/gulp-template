// This file is just a collection of pre-made component connections.
// It is recommended to create a separate file in the components folder and connect everything there

// Determining the operating system on mobile
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

// Determining the screen width
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Function throttling (for resizing, entering input, scrolling, etc.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Fix fullscreen blocks
// import './functions/fix-fullheight';

// Implementation of the burger menu
// import { burger } from './functions/burger';

// Implementation of the scroll stop (don't forget to call the function)
// import { disableScroll } from './functions/disable-scroll';

// Implementation of scroll enable (don't forget to call the function)
// import { enableScroll } from './functions/disable-scroll';

// Implementation of the modal window
// import CragiModal from 'cragi-modal';
// const modal = new CragiModal();

// Implementation of tabs
// import CragiTabs from 'cragi-tabs';
// const tabs = new CragiTabs('tab');

// Get the site header height (don't forget to call the function)
// import { getHeaderHeight } from './functions/header-height';

// Connecting the custom scroll plugin
// import 'simplebar';

// Plugin connection for tooltips positioning
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Connect swiper
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Connect animations on scroll
// import AOS from 'aos';
// AOS.init();

// Connect block parallax when scrolling
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Connecting smooth scrolling to anchors
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Connecting swipe events on mobile
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Submission has occurred, you can write any actions here');
// };

// validateForms('.form-1', rules1, afterForm);
