function matches(text, regex){
  // Encontrar una cadena que cumpla con ![ ${textorandom => name} ]( ${otro textorandom => href} )
  // Encontrar una cadena que cumpla con [ ${textorandom => name} ]( ${otro textorandom => href} )
  let matches = [];
  let result = text.match(regex);
  result.forEach(linkstring => {
    let reBrackets = /\[([^\]]+)]/g;
    let reParen = /(\]\(.*\))/g; ///(\(.*(?!\])\))/i
    let btwBr = linkstring.match(reBrackets)[0];
    let btwPa = linkstring.match(reParen)[0];

    matches.push({
      text: btwBr.substr(0,btwBr.length - 1).substr(1),
      href: btwPa.substr(0,btwPa.length - 1).substr(2),
    });
  });
  return matches
}

module.exports = (text) => {
  // Encontrar una cadena que cumpla con [ ${textorandom => name} ]( ${otro textorandom => href} ) pero no con ![ ${textorandom => name} ]( ${otro textorandom => href} )
  let links = [];
  let allRegex = /\[([^\[]+)\](\(.*\))/gm;
  let imgRegex = /^\!\[([^\[]+)\](\(.*\))/gm;
  let all = matches(text, allRegex);
  let images = matches(text, imgRegex);

  all.forEach(possibleLink => {
    if(images.indexOf(possibleLink) === -1){
      links.push(possibleLink);
    }    
  });
  return links;
}