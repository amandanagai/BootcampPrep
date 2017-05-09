function somethingElse(str1, str2) {
	var isTrue;
  if (str1.length !== str2.length) {
    console.log("Input strings must have the same length")
  }
  else {
    	
    	for (var i = 0; i < str1.length; i++) {
    		if (str1.charCodeAt(i) !== 90 || str2.charCodeAt(i) !== 90 || str1.charCodeAt(i) !== 122 || str2.charCodeAt(i) !== 122) {
		    	var diff = str2.charCodeAt(0) - str1.charCodeAt(0);  
	        	if (str1.charCodeAt(i) + diff === str2.charCodeAt(i)) {
	        		isTrue = true;
	        	} else {
	        		isTrue = false;
	        	}
    		} else {
    			if (str1.charCodeAt(i) === 90 || str1.charCodeAt(i) === 122) {
    				if (str1.charCodeAt(i) - 26 - (str2.charCodeAt(i + 1) - str1.charCodeAt(i + 1)) === str2.charCodeAt(i)) {
	        			isTrue = true;
	        		} else {
	        			isTrue = false;
    				}
    			} elif (str2.charCodeAt(i) === 90 || str2.charCodeAt(i) === 122)
    				if (str2.charCodeAt(i) - 26 - (str2.charCodeAt(i + 1) - str1.charCodeAt(i + 1)) === str1.charCodeAt(i)) {
	        			isTrue = true;
	        		} else {
	        			isTrue = false;
    				}
    		}

        }
      	if (isTrue) {
      		return `The second word === the first word with every letter moved by ${diff}.` 
      	}
    return 'The characters in the words are not proportionally related to each other.'
	}
}




function hammingDistance(str1, str2) {
  var totalDiff = 0;
  if (str1.length !== str2.length) {
    return "Input strings must have the same length";
  } else {
    for(i=0; i<str1.length; i++) {
      if(str1[i].toLowerCase() !== str2[i].toLowerCase()) {
      totalDiff += 1
      }
    }
  }
  return totalDiff;
} 

function oneCharDifference(str1, str2) {
  if (str1.length === str2.length) {
      return hammingDistance(str1, str2) === 1;
  }
  if (Math.abs(str2.length - str1.length) > 1) {
    return false;
  }
 
  var diff = -1;
  var longerStr
  if(str2 > str1) {
    [shorterStr, longerStr] = [str1, str2] 
  } else [longerStr, shorterStr] = [str1, str2]  
  
  for(var i=0; i<longerStr.length; i++) {
    if(shorterStr[i] === undefined) {
      diff += 1;
    }
    if(longerStr[i].toLowerCase() !== shorterStr[i].toLowerCase()) {
      diff += 1;
      if(longerStr[i+1].toLowerCase() !== shorterStr[i].toLowerCase() || longerStr[i].toLowerCase() !== shorterStr[i+1].toLowerCase()) {return false}
      } else // { RUN again TOGGLING i for the ONE with the CHAR Difference}
    if(diff > 0) {
      return false;
    }
  }
  return true;
}

// oneCharDifference("grate", "grape") // true 
// oneCharDifference("male", "maple") // true 
// oneCharDifference("help", "helping") // false
oneCharDifference("boom", "boo") // true
// oneCharDifference("same", "same") // false