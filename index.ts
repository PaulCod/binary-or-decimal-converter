enum TypeConvert {
  Binary = 'binary',
  Decimal = 'decimal',
}

function convert(number: number, typeConvert: TypeConvert): string {
  const binary = isBinary(number);

  if (!binary && typeConvert === TypeConvert.Decimal) {
    return 'O numero não é binario';
  }

  switch (typeConvert) {
    case TypeConvert.Binary:
      return toBinary(number);
    case TypeConvert.Decimal:
      return toDecimal(number);
  }
}

function isBinary(number: number): boolean {
  const result = number
    .toString()
    .split('')
    .map((num) => {
      if (num == '0' || num == '1') {
        return true;
      }

      return false;
    });

  return result.includes(false) ? false : true;
}

function toBinary(number: number): string {
  const rest: number[] = [];

  while (number > 0) {
    rest.push(number % 2);
    number = Math.floor(number / 2);
  }

  return rest.reverse().join('');
}

function toDecimal(number: number): string {
  const destructBinary = number.toString().split('').reverse();
  let som = 0;

  console.log(destructBinary);

  for (let i = destructBinary.length - 1; i > 0; i--) {
    som += (Number(destructBinary[i]) * 2) ** i;
    console.log(i);
  }

  return som.toString();
}

console.log(convert(10100, TypeConvert.Decimal));
