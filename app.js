(function () {
  'use strict';

  // ... other code ...

  function myFunc() {
    let timePerLetter = 30;

    function printOut(str) {
      var i = 0;

      function main() {
        if (i < str.length) {
          var char = str[i++];
          text.nodeValue += char;
        } else {
          // Add a 2-second delay after the text is finished
          setTimeout(function () {
            text.nodeValue = '';
            document.body.style.backgroundColor = "grey";
          }, 2000);
        }
      }

      if (i < str.length) {
        setTimeout(main, timePerLetter);
      }
    }

    var text = document.createTextNode('');
    document.getElementById("test").appendChild(text);
    document.getElementById("test").style.color = "yellow";
    document.body.style.backgroundColor = "black";

    printOut("...Your hardisk is empty please install a OS before you can use this unit\n All Coyrihgts reserved by \nFed.11/99-ADv/SACR.USA Dist.of.Alabm 047\n \nHP Internactional,Sacramento,California USA. ");
  }

  myFunc();
})();
