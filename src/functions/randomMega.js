const randomMega = (quantity = 6, numbers = []) => {
  quantity = +quantity;
  if(quantity < 6 | quantity > 15) {
    throw 'Quantidade inválida';
  }

  if(numbers.length === quantity) {
    return numbers.sort((n1, n2) => n1 - n2);
    //sort((n1, n2) => n1 - n2) coloca em ordem crescente os números
  }

  const randomNumber = parseInt(Math.random() * 60) + 1;
  if(!numbers.includes(randomNumber)){
    return randomMega(quantity, [...numbers, randomNumber]);
  } else {
    return randomMega(quantity, numbers);
  }
};

export default randomMega;
