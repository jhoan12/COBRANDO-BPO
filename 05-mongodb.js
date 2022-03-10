const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");
const usuarios = require("./data/usuarios");

const URI = "mongodb://localhost/cobrando";

mongoose
  .connect(URI)
  .then((db) => console.log("db conectada"))
  .catch((error) => console.log(error));

module.exports = mongoose;

const userSchema = new Schema({
  nombre_usuario: { type: String, unique: true },
  cuenta_twitter: String,
  nombre: String,
  descripcion: String,
  telefonos: [String],
  direccion: {
    calle: String,
    numero: String,
    ciudad: String,
    cp: String,
  },
});

const userModel = model("usuario", userSchema);

//POBLAR DE DATOS LA DB
const poblarDb = async () => {
  try {
    await userModel.deleteMany();
    await userModel.insertMany(usuarios);
    console.log("Data importada");
  } catch (error) {
    console.log(error.message);
  }
};

//primero se debe de ejecutar la funcion poblarDb()------------ 
//poblarDb()

//RETORNAR AL USUARIO CON NOMBRE DE USUARIO "Frank_blog"

const buscarUsuario = async (nombreUsuario) => {
  try {
    const resp = await userModel.findOne({
      nombre_usuario: nombreUsuario,
    });
    resp ? console.log(resp) : console.log("Usuario no encontrado");
  } catch (error) {
    console.log(error.message);
  }
};

// buscarUsuario("Frank_blog"); 

//Retornar los usuarios llamados peter
const buscarPorNombre = async (nombre) => {
  try {
    const resp = await userModel.find({ nombre });
    resp.length > 0
      ? console.log(resp)
      : console.log(`No hay usuarios llamados ${nombre}`);
  } catch (error) {
    console.log(error.message);
  }
};
// buscarPorNombre("Peter");




// Contar los usuarios con cp = 39005
const contarUserPorcp = async (cp) => {
  try {
    const resp = await userModel.count({ "direccion.cp": cp });
    resp > 0
      ? console.log(`La cantidad de usuarios con CP ${cp} es de: ${resp}`)
      : console.log(`no hay usuarios con CP ${cp}`);
  } catch (error) {
    console.log(error.message);
  }
};
// contarUserPorcp("39005");

// retornar a un usuario con numero de telefono 111111111
const buscarPorTelefono = async (telefono) => {
  try {
    const resp = await userModel.findOne({ telefonos: telefono });
    console.log(resp);
  } catch (error) {
    console.log(error.message);
  }
};
//  buscarPorTelefono("111111111");

// retornar nombre_usuario y cuenta_twitter, sin el _id de usuarios con cp igual o mayor que 39005
const ultimoPunto = async () => {
  try {
    const resp = await userModel
    // usamos el operador logico $gte para decir que quiero un valor mayor o igual que
      .find({ "direccion.cp": { $gte: "39005" } })
      .select("nombre_usuario cuenta_twitter");
    resp.length > 0
      ? console.log(resp)
      : console.log(`No hay usuarios que tengan el cp igual o mayor a 39005`);
  } catch (error) {
    console.log(error.message);
  }
};

ultimoPunto();



// ejecutar: primero se debe descomentar la funcion a analizar 
//luego ejecutamos: node .\05-mongodb.js