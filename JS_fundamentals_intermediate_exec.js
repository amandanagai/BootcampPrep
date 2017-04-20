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

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

function addSpeaker(name) {
	nestedObject.speakers.push({name: name});	
}

addSpeaker("Amanda");

function addLanguage(lang, word) {
	nestedObject.data.languages[lang]={hello:word};
}

addLanguage("japanese", "konnichiwa");

function addCountry(country, capital, population) {
	nestedObject.data.continents.europe.countries[country] = {
		capital: capital,
		population: population
	};
}

addCountry("England", "London", 55000000);

//

function rotate(arr, num) {
	for(var i=0; i<num; i++) {
		var moved = arr.pop();
		arr.unshift(moved);		
	}
	return arr;
}

rotate([1,2,3], 2);

//

// function makeXOGrid(rows, cols) {
// 	master_array = [];
// 	for(var i=0; i<rows; i++) {
// 		master_array[i] = [];
// 	}
// 		for(var j=1; j<=cols; j++) {
// 			master_array[i].push("X");
// 		}
// }

function makeXOGrid(rows, cols) {
	var master_array = [];
	var switch_if = true;
	for(var i=0; i<rows; i++) {
		master_array.push([]);
		for(var j=1; j<=cols; j++) {
			if(switch_if) {
				master_array[i].push("X");
				switch_if = false;	
			} else {
				master_array[i].push("O");
				switch_if = true;
			}
		}
	}
	return master_array;		
}

// Callback practice

function each(arr, fn) {
	for(i=0; i<arr.length; i++) {
		fn(arr[i]);
	}

}

map([1,2,3,4], function(val){
    return val * 2;
});


function map(arr, fn) {
	new_array = [];
	for(i=0; i<arr.length; i++) {
		new_array.push(fn(arr[i]));
	}
	return new_array;
}

map([1,2,3,4], function(val){
    return val * 2;
});


function reject(arr, fn) {
	var new_array2 = [];
	for(var i=0; i<arr.length; i++) {
		if(!fn(arr[i])) {
			new_array2.push(arr[i]);
		}
	}
	return new_array2;
}

reject([1,2,3,4], function(val){
    return val > 2;
})

reject([2,3,4,5], function(val){
    return val % 2 === 0;
});

//

function createCounter() {
	var count = 0;
	return function (){
		return ++count;
	}
}

//

function countDown(num) {
	var timer = setInterval(function(){
		num--;
		if(num == 0) {
			console.log("DONE!");
			clearInterval(timer);
		} else {
			console.log(num);
		}
	}, 1000);
}

//

function randomGame() {
	var count = 1;
	var timer = setInterval(function() {
		var x = Math.random();
		if (x>.75) {
			clearInterval(timer);
			console.log("It took " + count + " tries");
		} else {
			count++;
		}
	}, 1000)
}

//

function isEven(num) {
	if (num % 2 == 0) {
		return true;
	}
	return false;
}

//

function isOdd(num) {
	if (num % 2 != 0) {
		return true;
	}
	return false;
}

//

function isPrime(num) {
	for (i=2; i<num; i++) {
		if (num % i == 0 && num != i) {
			return false;
		}
	}
	return true;
}

//

function numberFact(num, callback) {
	return callback(num);
}

numberFact(59,isPrime);

//

function find(arr, callback) {
	for (i=0; i<arr.length; i++) {
		if (callback(arr[i])) {
			return arr[i];
        }
	}
}

//

function findIndex(arr, callback) {
	for (i=0; i<arr.length; i++) {
		if (callback(arr[i])) {
			return i;
        }
	}
}

//

function specialMultiply(a,b) {
	if (b == undefined) {
		return function(c) {
			return a * c;
		}
	}
	return a * b;
}

////OR, same thing:

function specialMultiply(a,b) {
	if (arguments.length === 1) {
		return function(c) {
			return a * c;
		}
	}
	return a * b;
}

// DOM Exercises

var zebra = document.getElementById("container");
var moose = document.querySelector("#container");
var allSecond = document.getElementsByClassName("second");
var olThird = domcument.querySelector("ol .third");
zebra.innerText = "Hello!";

var toAddTo = document.querySelector("div.footer");
// SAME: var toAddTo = document.querySelector(".footer");
toAddTo.classList.add("main");
// SAME: footer.className += "main";
toAddTo.classList.remove("main");
var liMore = document.createElement("li");
liMore.setAttribute("class", "fourth");
liMore.innerText("four");
var ul = document.querySelector("ul");
ul.appendChild(liMore);

var olLis = querySelectorAll("ol li");
for(i=0; i<olLis.length; i++) {
	olLis[i].style.backgroundColor = "green";
}

var toRemove = document.querySelector(".footer")
toRemove.remove();
