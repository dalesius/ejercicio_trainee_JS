class Vehiculo {
  constructor(marca, modelo, cilindrada, puertas, precio) {
    this._marca = marca;
    this._modelo = modelo;
    this._cilindrada = cilindrada;
    this._puertas = puertas;
    this._precio = precio;
  }

  get marca() {
    return this._marca;
  }
  get modelo() {
    return this._modelo;
  }
  get cilindrada() {
    return this._cilindrada;
  }
  get puertas() {
    return this._puertas;
  }
  get precio() {
    return this._precio;
  }

  get listar() {
    let data = `Marca: ${this.marca}`;
    data += ` // Modelo: ${this.modelo}`;
    if (this.cilindrada !== null) data += ` // Cilindrada: ${this.cilindrada}c`;
    if (this.puertas !== null) data += ` // Puertas: ${this.puertas}`;
    data += ` // Precio: $${this.precio}`;
    console.log(data);
  }
}

const vehiculos = [];

vehiculos.push(new Vehiculo("Peugeot", "206", null, 4, 200000));
vehiculos.push(new Vehiculo("Honda", "Titan", 125, null, 60000));
vehiculos.push(new Vehiculo("Peugeot", "208", null, 5, 250000));
vehiculos.push(new Vehiculo("Yamaha", "YBR", 160, null, 80500.5));

const listarVehiculos = (vehiculos) => {
  vehiculos.forEach((vehiculo) => {
    vehiculo.listar;
  });
  console.log("=============================");
};
const listarCaro = (vehiculos) => {
  const masCaro = vehiculos.reduce((anterior, actual) => {
    if (actual.precio > anterior.precio) {
      return actual;
    } else {
      return anterior;
    }
  });
  console.log(`Vehículo más caro: ${masCaro.marca} ${masCaro.modelo}`);
};
const listarBarato = (vehiculos) => {
  const masBarato = vehiculos.reduce((anterior, actual) => {
    if (actual.precio < anterior.precio) {
      return actual;
    } else {
      return anterior;
    }
  });
  console.log(`Vehículo más barato: ${masBarato.marca} ${masBarato.modelo}`);
};
const contieneLetra = (letra, vehiculo) => {
  return vehiculo.modelo.indexOf(letra) !== -1 ? true : false;
};
const listarLetra = (vehiculos, letra) => {
  vehiculos.forEach((vehiculo) => {
    if (contieneLetra(letra, vehiculo))
      console.log(
        `Vehículo que contiene en el modelo la letra ‘${letra}’: ${vehiculo.marca} ${vehiculo.modelo} $${vehiculo.precio}`
      );
  });
};
const ordenarPorPrecio = (vehiculos, descendente) => {
  let ordenados = vehiculos.sort((a, b) => b.precio - a.precio);
  if (!descendente) ordenados = ordenados.reverse();

  console.log("=============================");
  console.log(
    `Vehículos ordenados por precio de ${
      descendente ? "mayor a menor:" : "menor a mayor:"
    }`
  );
  ordenados.forEach((vehiculo) => {
    console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
  });
};

listarVehiculos(vehiculos);
listarCaro(vehiculos);
listarBarato(vehiculos);
listarLetra(vehiculos, "Y");
ordenarPorPrecio(vehiculos, true);
