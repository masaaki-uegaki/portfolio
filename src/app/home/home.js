import * as $ from 'jquery';

export function exec() {
  console.log('home');
  $('document').ready(() => {
    let copy = ['Masaaki Uegaki,', 'System engineer,', 'Welcome to my porfolio!'],
      i = 0;
    setInterval(function catchcopy() {
      let cc = $('.catchcopy');
      if (cc) {
        cc.text(copy[i++])
        if (i > copy.length) i = 0;
      };
      return catchcopy;
    }(), 3000);
  })
}
