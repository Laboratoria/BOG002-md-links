const p= (a)=>{ return new Promise ((resolve,reject)=>{
    if (a=="hola"){resolve(a)}
    else{reject("nop")}
    
    })
      
    }
    
   let comoTasbb=saludis =>{ 
      return new Promise ((resolve,reject)=>{
        y="saludis del settimeout"
        if (saludis=="hola"){resolve(saludis+y)}
    })}
   
    p("hola")
    .then((saludis)=>{return comoTasbb(saludis)})
    .then((strin)=>{console.log(strin +" hola entro al then")})
    
// let comoTasbb=saludis =>{ 
//           return new Promise ((resolve,reject)=>{
   
          
//            y="saludis del settimeout"
//           if (saludis=="hola"){resolve(saludis+y)}
//           })}

//     p("hola")
//     .then((saludis)=>{console.log(comoTasbb(saludis))})
//     .then((strin)=>{console.log(" hola entro al then"+strin)})