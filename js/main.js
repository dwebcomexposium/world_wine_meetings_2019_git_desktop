var el = document.querySelector('#chiffres1');

od = new Odometer({
  el: el,
  value: 0,

  // Any option (other than auto and selector) can be passed in here
  format: '',
  theme: 'minimal'
});

od.update(123)