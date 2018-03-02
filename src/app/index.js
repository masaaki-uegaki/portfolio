import $ from 'jquery';

import * as icon from './shared/icon';

import * as home from './home/home';
import * as about from './about/about';
import * as works from './works/works';
import * as message from './message/message';

import './style.scss';

console.log('indexed');

$(window).on('load', () => {
  let url = window.location.href;
  if (url.match(/about.html/)) {
    about.exec();
  } else if (url.match(/works.html/)) {
    works.exec();
  } else if (url.match(/message.html/)) {
    message.exec();
  } else {
    home.exec();
  }
  icon.exec();
});
