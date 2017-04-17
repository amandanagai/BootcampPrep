function createStudent(firstStr, secondStr) {
	return {
		firstName: firstStr,
		lastName: secondStr
	};
}

var tim = createStudent("Tim", "Garcia");
var matt = createStudent("Matt", "Lane");
var elie = createStudent("Elie", "Schoppik");
studentList = [tim, matt, elie];


function findStudentByFirstName(str) {
	var result = false
	for(var i=0; i<studentList.length; i++) {
		if(studentList[i].firstName.toLowerCase() == str.toLowerCase()) {
			result = true;
		}
	}
	return result;
}

//

function extractEveryThird(array) {
	var thirds = [];
	for(var i=2; i<array.length; i+=3) {
		thirds.push(array[i]);
	}
	return thirds;
 }

 //

 function countEvensAndOdds(array) {
	var countObj = {
		oddCount: 0,
		evenCount: 0
    }
	for(var i=0; i<array.length; i++) {
		if(array[i]%2===0) {
			countObj.evenCount++;
		} else {					// formatting! else on same line as } for if statement
			countObj.oddCount++;
		}
    }
	return countObj;   // check {} - makes sure not inside for loop!
}

//

function onlyCapitalLetters(str) {
	var newString = ""
	for(i=0; i<str.length; i++) {
		if(str[i] == str[i].toUpperCase()) {
			newString += str[i]
		}
	}
	return newString;
}

//

function lastElement(arr) {
	return arr[arr.length-1];
}

//

function numberCompare(a,b) {
	if (a > b) {
		return "First is greater";
	} else if (b > a) {
    	return "Second is greater";
	} else {
		return "They are the same!";
	}
}

//// OR, same thing:

function numberCompare(a,b) {
	if (a > b) {
		return "First is greater";
	} else if (b > a) {
    	return "Second is greater";
	}
	return "They are the same!";
	}
}

//

function singleLetterCount(str, ltr) {
	var count = 0;
	for(var i=0; i<str.length; i++) {
		if(str[i].toLowerCase()==ltr.toLowerCase()) {
			count++;
		}
	}
	return count;
}

//

function multiLetterCount(str) {
	var countObj = {
    }
		for(var i=0; i<str.length; i++) {
			if(countObj[str[i]]) {
				countObj[str[i]] += 1;
            } else {
				countObj[str[i]] = 1;
			}
		}
	return countObj;
 }

 //

function arrayManipulation(arr, cmd, location, newitem) {
	if(cmd == "remove") {
		if(location == "beginning") {
			return arr.shift();
		} else if(location == "end") {
			return arr.pop();
		}
    }
	else if(cmd == "add") {
		if(location == "beginning") {
			array.unshift(newitem);
			return arr;
		} else if(location == "end") {
			array.push(newitem);
			return arr;
		} 
	}
}

//

function isPalindrome(str) {
	if(str.toLowerCase()==str.split('').reverse().join('').toLowerCase()) {
		return true;
	}
	return false;
}

//// OR, same thing:

function isPalindrome(str) {
	return str.toLowerCase()===str.split('').reverse().join('').toLowerCase() {
}

//

function rockPaperScissors() {
	var choice = prompt('Type "paper", "rock", or "scissors". What is your choice? ');
	compC(Math.random());
	function compC(num) {
		if(num < .33) {
			compC = "rock"; // there aren't any returns here!! surprised this works...
		} else if(num < .66) {
			compC = "paper";
		} else {
			compC = "scissors";
		}
	}
	if(choice.toLowerCase() === "rock" && compC == "paper") {
		console.log(compC + ". You lose");
	} else if(choice.toLowerCase() === "rock" && compC == "scissors") {
		console.log(compC + ". You win!");
	} else if(choice.toLowerCase() === "paper" && compC == "rock") {
		console.log(compC + ". You win!");
	} else if(choice.toLowerCase() === "paper" && compC == "scissors") {
		console.log(compC + ". You lose");
    } else if(choice.toLowerCase() === "scissors" && compC == "paper") {
		console.log(compC + ". You win!");
	} else if(choice.toLowerCase() === "scissors" && compC == "rock") {
		console.log(compC + ". You lose");
	} else if(choice.toLowerCase() === compC) {
		console.log(compC + " here too. It's a tie");
	} else {
		console.log("That's not a valid choice! Try again.");
    }
}

//// OR, same but WAY better!!

function RPS(){

  function determineComputer(num){
    if(num <= .33) return "rock";   // I didn't know short if, else if, else statements could do w/o {}
    else if(num <= .66) return "paper";
    return "scissor";
  }

  var userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
  var computerChoice = determineComputer(Math.random()); // function returns, so need to save into a varaible


  var answers = ["rock", "paper", "scissor"];

  if(!userChoice || answers.indexOf(userChoice) === -1){
    return "Please select a valid option";
  }

  if(userChoice === computerChoice) return "Tie!";

  if(userChoice === "rock" && computerChoice === "paper") return "You lose, computer picked " +  computerChoice;
  if(userChoice === "paper" && computerChoice === "scissor") return "You lose, computer picked " +  computerChoice;
  if(userChoice === "scissor" && computerChoice === "rock") return "You lose, computer picked " +  computerChoice;

  return "You win! Computer picked " +  computerChoice;  // WAY more efficient
}

//

var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }

 function displayCities(arr){
	for(i=0; i<arr.length; i++){
		console.log(arr[i])
	}
}

displayCities(instructorData.additionalData.moreDetails.citiesLivedIn);

//

var nestedArr = [[1,2,3], [4,5,6], [7,8,9,10,11,12]];

function unpackNestedArr(arr) {
	for(i=0; i<nestedArr.length; i++) {
		for(j=0; j<nestedArr[i].length; j++) {
			console.log(nestedArr[i][j]);
		}
	}
}

//

var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

function printEvens(arr) {
	var evens = [];
	for(i=0; i<nestedArr.length; i++) {
		for(j=0; j<nestedArr[i].length; j++) {
			if(nestedArr[i][j] % 2 === 0) {
				evens.push(nestedArr[i][j]);
			}
		}
	}
	for(var i in evens) {
		console.log(evens[i]);
	}
	return evens;
}

printEvens(nestedArr);

//

function sumTotal() {
    var nestedArr = [[[1,2],[3,4]],[[5,6]]];
	var total = 0
	for(i=0; i<nestedArr.length; i++) {
		for(j=0; j<nestedArr[i].length; j++) {
            for(k=0; k<nestedArr[i][j].length; k++) {
		 //   console.log(nestedArr[i][j][k]);
			total += Number(nestedArr[i][j][k]);
            }
		}
	}
	return total;
}

sumTotal();

//// OR - which is better??

var nestedArr = [[[1,2],[3,4]],[[5,6]]];

function sumTotal(arr) {
	var total = 0
	for(i=0; i<arr.length; i++) {
		for(j=0; j<arr[i].length; j++) {
            for(k=0; k<arr[i][j].length; k++) {
		   // console.log(arr[i][j][k]);
			total += Number(arr[i][j][k]);
            }
		}
	}
	return total;
}

sumTotal(nestedArr);

//

function countVowels(arr) {

	var totalVowels = 0; 
	var vowels = ['a', 'e', 'i', 'o', 'u']

    function countRecursive(arr) {
        for (var i=0; i<arr.length; i++) {
            if (Array.isArray(arr[i])) {
                countRecursive(arr[i]);
            } else {
            	for(var j=0; j<arr[i].length; j++) {
        			if (vowels.includes(arr[i][j].toLowerCase()) {
            			totalVowels += 1;
            		}
           		}
            }     
        }
    }
    countRecursive(arr);
    return totalVowels;
}

countVowels(['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien']);

//

function displayOddNumbers(numbers) {
	for(var i=0; i<numbers.length; i++) {
		if(numbers[i] % 2 !==0 && i<(numbers.length/2)) {
			console.log(numbers[i]);
		}
    }
}

//

`dsfdfk1`

