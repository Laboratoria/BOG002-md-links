console.log("pruebita")

let cosillas=5000
//Ahora si se puede usar en otro lado
module.exports.cosillas=cosillas
//confunciones es lo mismo,solamente que tiene el valor de digamos cosillas()




// const mdLinks = (path, options = { validate: false }) => {
//     const linkSystem =
//     typeof path === "string" ? new MDLink(path, options) : false;
//   const error = arg2 || propArg2;
//   return new Promise((resolve, reject) => {
//     if (!linkSystem)
//       reject(
//         new Error(
//           `The "path" argument must be of type string. Received type ${typeof path} (${path}).`
//         )
//       );else if (error) {
//         reject(new Error(error));
//       } else linkSystem.init((err, info) => (err ? reject(err) : resolve(info)));
//     });
//   };
  

//   export default mdLinks;