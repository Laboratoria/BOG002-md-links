export default function (text) {
    // let regexp = /\(([^)]+)\)/g;
  // Encontrar una cadena que cumpla con [ ${textorandom => name} ]( ${otro textorandom => href} )
  let links = [];
  let control = {
    openBrackets: false,
    openParen:false,
    spaces:0,
    name: '',
    href:'', 
  }
  let len = text.length;
  for(let i = 0; i<len;i++){
    if(control.openBrackets){
      if(text[i] === ']'){
        control.openBrackets = false;
        control.spaces = 1;
      } else {
        control.name = `${control.name}${text[i]}`
      }
    } else {
      if(text[i] === '[') {
        control.openBrackets = true;
        control.name = '';
      } else if (control.openParen) {
        if(text[i] === ')'){
          control.openParen = false;
          links.push({
            text: control.name,
            href: control.href,
            file: path.resolve(pathName)
          })
        } else {
          control.href = `${control.href}${text[i]}`
        }
      } else if (control.spaces > 3) {
          control.spaces = 0;
      } else if (control.spaces != 0 ) {
        if(text[i] === '('){
          control.openParen = true;
          control.spaces = 0;
          control.href = '';
        } else {
          control.spaces ++
        }
      }
    }
  }
  return links
}