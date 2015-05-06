'use strict';

var toRoman = function(num){
  var digits = num.toString().split("").reverse(),
      key = ["","I","II","III","IV","V","VI","VII","VIII","IX",
        "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
        "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
        "","M","MM","MMM"],
      result = "";
      for(var i = 0; i <  digits.length;){
        result = key[i*10+parseInt(digits[i])] + result;
        i++;
      };
      return result;
  };
