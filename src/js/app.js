import '../scss/app.scss';

/* Your JS Code goes here */

/* MDB ui */
import * as mdb from 'mdb-ui-kit'; // lib
/* Demo JS */
import './demo.js';
import $ from 'jquery';

import 'slick-carousel';

/* Slick JS*/

$(document).ready(function() {
  $('.cards-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true

  });
});


