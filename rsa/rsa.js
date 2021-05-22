var input = require('fs').readFileSync('/home/devp/Área de Trabalho/teste/inputs/rsa_in_1', 'utf8');
var [n, e ,c] = input.split('\n')[0].split(' ');

var x, y, d;

/**
 * calculatePhi.
 *
 *
 * @param {number} n value
 *
 * @returns {number} phi
 */
const calculatePhi = (n) => {
  let ret = parseInt(n, 10);
  for (let i = 2; i * i <= n; i++) {
    if (parseInt(n % i, 10) === 0) {
      while (parseInt(n % i, 10) === 0) {
        n = parseInt(n/i, 10);
      }
      ret -= parseInt(ret/i, 10);
    }
  }
  if (n > 1) {
    ret -= parseInt(ret/n, 10);
  }
  return ret;
};

/**
 * fastExp.
 *
 *
 * @param {number} p value
 * @param {number} q value
 * @param {number} m value
 *
 * @returns {number} fastExp
 */
const fastExp = (p, q, m) => {
  p = parseInt(p, 10);
  q = parseInt(q, 10);
  m = parseInt(m, 10);
  let r = parseInt(1, 10);
  while (q) {
    if (q & 1) {
      r = parseInt((r*p)%m, 10);
    }
    p = parseInt((p*p)%m, 10);
    q = parseInt(q >> 1, 10);
  }
  return r;
};

/**
 * extendedGCD.
 *
 *
 * @param {number} a value
 * @param {number} b value
 *
 */
const extendedGCD = (a, b) => {
  if(!b) {
    x = 1;
    y = 0;
    d = parseInt(a, 10);
    return;
  }
  extendedGCD(b, a%b);
  const auxX = parseInt(y, 10);
  const auxY = parseInt(x - (a/b) * y, 10);
  x = parseInt(auxX, 10);
  y = parseInt(auxY, 10);
};

/**
 * multiplicativeInverse.
 *
 *
 * @param {number} a value
 * @param {number} m value
 *
 */
const multiplicativeInverse = (a, m) => {
  a = parseInt(a, 10);
  m = parseInt(m, 10);
  extendedGCD(a, m);
  return parseInt((x%m+m)%m, 10);
};

(function () {
  let phi;
  n = parseInt(n, 10);
  e = parseInt(e, 10);
  c = parseInt(c, 10);
  phi = parseInt(calculatePhi(n), 10);
  let d = multiplicativeInverse(e, phi);
  console.log(fastExp(c, d, n));
})();
