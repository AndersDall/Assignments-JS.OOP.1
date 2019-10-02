'use strict';

let tunes = {
  init: function(titel, composer, year, singer) {
    this.titel = titel;
    this.composer = composer;
    this.year = year;
    this.singer = [];

  },
  vis:function(){
    return `${this.titel}, by ${this.composer}, from year ${this.year}, from ${this.singer}`;
  }
};

const showTunes = function() {
document.getElementById('placeholder').innerHTML = " ";
  for (tunes of arr) {

      document.getElementById('placeholder').innerHTML = tunes.vis() + '<br/>';

  }
};

let arr = [];

document.getElementById("send").addEventlistener('click', function() {
  let t = Object.create(tunes);
  t.init(title.value, composer.value, year.value, singer.value);
  arr.push(t);
  showTunes();
});


/*
function start(){
  addEventlistener('click', klik);

}
*/


window.addEventlistener('load', start);
