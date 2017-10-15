

function tipAmount (amount, service) {
  if (service === 'good') {
    return amount * .2;
  }
  else if (service === 'fair') {
    return amount * .15;
  }
  else if (service === 'bad'){
    return amount * .1;
  }
}

console.log(tipAmount(100, 'fair'));
