const Right = x =>
({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`,
});

const Left = x =>
({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`,
});

const fromNullable = x =>
  x != null ? Right(x) : Left(x)

const findColor = name =>
  fromNullable({ red: '#34b9c0', blue: '#b1c4f4', green: '#3edkck'}[name]);

const result = findColor('white')
                .map(c => c.slice(1))
                .fold(e => 'no color', c => c.toUpperCase())

console.log(result);