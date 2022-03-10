const check = (palabra) => {
  let newPalabra = "";
  newPalabra = palabra.split("");
//   console.log(newPalabra);
  newPalabra = newPalabra.reverse();
//   console.log(newPalabra);
  newPalabra=newPalabra.join("")
//   console.log(newPalabra)
  return newPalabra === palabra ? `${palabra} : si es palindrome` : `${palabra} : no es palindrome`;
};

console.log(check("oso"));

// ejecutar: node .\04-palindrome.js