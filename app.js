function myFunc ()  {
let timePerLetter = 30,
   text = document.createTextNode('');
 
document.getElementById("test").appendChild(text);
document.getElementById("test").style.color="yellow"
document.body.style.backgroundColor="black"

function printOut(str) {
  var i = 0;
  (function main() {
    var char = str[i++];
    text.nodeValue += char
    if(i < str.length)
      setTimeout(main, timePerLetter);
  })();
}
printOut("...Your hardisk is empty please install a OS before you can use this uni. Coyright reserved by: Fed.11/99-ADv/SACR.USA Dist.of.Alabm.047.HP Internactional,Sacramento,California USA. ")
}
myFunc()

