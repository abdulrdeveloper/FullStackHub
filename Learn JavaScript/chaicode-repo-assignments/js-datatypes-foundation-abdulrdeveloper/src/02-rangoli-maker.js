/**
 * 🎨 Rangoli Border Maker - String Transform
 *
 * Diwali aa rahi hai! Priya digital rangoli designs bana rahi hai terminal pe.
 * String transform methods use karke patterns banana hai.
 * Tu Priya ki madad kar!
 *
 * Methods to explore: .slice(), .split(), .join(), .replace(),
 *   .replaceAll(), .repeat()
 *
 * Functions:
 *
 *   1. repeatPattern(pattern, times)
 *      - .repeat(times) use karke pattern ko repeat karo
 *      - Agar pattern string nahi hai ya times positive integer nahi hai, return ""
 *      - Example: repeatPattern("*-", 4) => "*-*-*-*-"
 *
 *   2. extractRangoliCenter(design, start, end)
 *      - .slice(start, end) use karke rangoli ka center part nikalo
 *      - Agar design string nahi hai, return ""
 *      - Agar start/end numbers nahi hain, return ""
 *      - Example: extractRangoliCenter("***LOTUS***", 3, 8) => "LOTUS"
 *
 *   3. splitAndJoinRangoli(colorString, oldSep, newSep)
 *      - .split(oldSep) se tod aur .join(newSep) se jod
 *      - Separator change karna hai colors ke beech mein
 *      - Agar colorString string nahi hai, return ""
 *      - Example: splitAndJoinRangoli("red,blue,green", ",", " | ") => "red | blue | green"
 *
 *   4. replaceRangoliColor(design, oldColor, newColor)
 *      - .replaceAll() use karke ek color ko doosre se replace karo
 *      - Agar koi bhi param string nahi hai, return ""
 *      - Example: replaceRangoliColor("red-blue-red-green-red", "red", "pink")
 *                 => "pink-blue-pink-green-pink"
 *
 *   5. makeRangoliBorder(char, length)
 *      - .repeat() se char ko bahut baar repeat karo
 *      - Phir .slice(0, length) se exact length ka border banao
 *      - Agar char string nahi hai ya length positive number nahi hai, return ""
 *      - Example: makeRangoliBorder("*", 5) => "*****"
 *      - Example: makeRangoliBorder("=-", 7) => "=-=-=-="
 *
 * @example
 *   repeatPattern("*-", 4)                    // => "*-*-*-*-"
 *   extractRangoliCenter("***LOTUS***", 3, 8) // => "LOTUS"
 *   splitAndJoinRangoli("red,blue", ",", "-")  // => "red-blue"
 */
export function repeatPattern(pattern, times) {
  
  if (typeof pattern !== "string" || typeof times !== "number" || times <= 0 || !Number.isInteger(times)){
    return "";
  }
  return pattern.repeat(times);
}

export function extractRangoliCenter(design, start, end) {
  if(typeof design !== "string" || typeof start !== "number" || typeof end !== "number"){
    return "";
  }
  return design.slice(start,end);
}

export function splitAndJoinRangoli(colorString, oldSep, newSep) {
  if(typeof colorString !== "string"){
    return "";
  }
  let coloroldstring = colorString.split(oldSep);
  let final = coloroldstring.join(newSep);
  return final;
}

export function replaceRangoliColor(design, oldColor, newColor) {
  if(typeof design !== "string" ||typeof oldColor !== "string" || typeof newColor !== "string"){
    return "";
  }
  let colorold = design.split(oldColor);
  let finalcolor = colorold.join(newColor);
  return finalcolor;
}

export function makeRangoliBorder(char, length) {
  if(typeof char !=="string" || length <= 0 || !Number.isInteger(length)){
    return "";
  }
  let newchar = char.repeat(100);
  let final = newchar.slice(0, length);
  return final;
 }
