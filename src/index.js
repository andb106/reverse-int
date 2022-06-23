module.exports = function reverse (n) {
    const num = Math.abs(n)
  return Number(num.toString().split('').reverse().join(''))
}
