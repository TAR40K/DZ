// Вот так я написал изначально, еще на середине осознал что это пиздец, но доделал

function convertCurrency(sum, inCur, outCur) {
if (inCur === 'rub' && outCur === 'usd') {
return (sum * 1) / 73.86;
} else if (inCur === 'usd' && outCur === 'rub') {
  return (sum * 73.86) / 1;
} else if (inCur === 'rub' && outCur === 'jpy') {
return (sum * 1) / 0.47;
} else if (inCur === 'jpy' && outCur === 'rub') {
  return (sum * 0.47) / 1;
} else if (inCur === 'usd' && outCur === 'jpy') {
  return (sum * 73.86) / 0.47;
} else {
  return null
}
}
console.log(convertCurrency(1000, 'usd', 'rub'));

// А вот переделанный вариант на switch при помощи ИИ, вроде бы разобрался)

function convertCurrencyS(sum, inCur, outCur) {
  const rub = 1;
  const usd = 73.86;
  const jpy = 0.47;

  let inRate, outRate;

  switch(inCur) {
    case 'rub':
      inRate = rub;
      break;
      case 'usd':
        inRate = usd;
        break;
        case 'jpy':
          inRate = jpy;
          break;
          default: return null;
  }
  switch(outCur) {
    case 'rub':
      outRate = rub;
      break;
      case 'usd':
        outRate = usd;
        break;
        case 'jpy':
          outRate = jpy;
          break;
          default: return null;
  } 
  return (sum * inRate) / outRate
}
console.log(convertCurrencyS(1000, 'usd', 'jpy'));