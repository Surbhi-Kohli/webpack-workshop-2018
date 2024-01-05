//commmon.js named exports
const red=  "color:red;"
const blue = "color:blue;"
const makeColorStyle = (color)=>`color:${color}`
// exports.red = red; with named exports, tree shaking would not happen
// exports.blue = blue;
// exports.makeColorStyle = makeColorStyle;

export {red,blue,makeColorStyle}