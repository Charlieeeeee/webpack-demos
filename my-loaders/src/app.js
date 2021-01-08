import tpl from './info.tpl';

const rootEl = document.getElementById('app');

const info = tpl({
  name: 'charlie bro ss',
  age: 24,
  interest: 'video game; music;',
  job: 'front-end devloper'
});

rootEl.innerHTML = info;
