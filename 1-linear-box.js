const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

const nextCharForNumberString = str =>
  Box(str)
  .map(s => s.trim())
  .map(s => parseInt(s))
  .map(n => n + 1)
  .fold(i => String.fromCharCode(i))


const result = nextCharForNumberString(' 64');

console.log(result) // 'A'