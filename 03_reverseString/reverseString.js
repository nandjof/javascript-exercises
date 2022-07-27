const reverseString = function(word) {

    var wordArr = word.split("");
    var reverseWordStr = wordArr.reverse();
    var reversedString = reverseWordStr.join("");
    return reversedString

   /*
   return word.split("").reverse().join("");
*/
};

// Do not edit below this line
module.exports = reverseString;
