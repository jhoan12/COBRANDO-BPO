// al ejegutar el archivo le pasamos lod dos numeros con los cuales realizaremos las opreaciones 
// estos lo recivimos por medio de process.argv[] y la posicion del mismo
// posterior mente realizamos la clase calculadora para hacer las respectivas operaciones y una validacion
class calculadora {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  // metodo que valida
  validar() {
    if (!this.a || !this.b) {
      throw Error("no ingreso uno de los dos numeros");
    }
  }

  // metodo que suma
  sumar() {
    try {
      this.validar();
      console.log(`La suma es: ${this.a} + ${this.b} = ${this.a + this.b}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  // metodo que resta
  restar() {
    try {
      this.validar();
      console.log(`La resta es: ${this.a} - ${this.b} = ${this.a - this.b}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  // metodo que multiplica
  multiplicar() {
    try {
      this.validar();
      console.log(`La multiplicacion es: ${this.a} * ${this.b} = ${this.a * this.b}`);
    } catch (error) {
      console.log(error.message);
    }
  }

  // metodo que divide
  dividir() {
    try {
      this.validar();
      console.log(`La division es: ${this.a} / ${this.b} = ${this.a / this.b}`);
    } catch (error) {
      console.log(error.message);
    }
  }
}

// instanciamos la clase y le pasamos los datos al constructor
const calcular = new calculadora(
  parseInt(process.argv[2]),
  parseInt(process.argv[3])
);

// llamamos cada metodo de mi instancia
calcular.sumar();
calcular.restar();
calcular.multiplicar();
calcular.dividir();


// ejecutar: node .\01-calculadora.js num1 num2