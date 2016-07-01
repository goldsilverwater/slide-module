var str = "ID:042\nSEX: M\nDOB: 1988-10-11\nStatus: Active";



console.log(str);

var reg = /\b[0-9]{4}\-[01][0-2]\-([0-2][0-9]|3(0|1)])\b/;
var result = str.match(reg);
console.log(result);
