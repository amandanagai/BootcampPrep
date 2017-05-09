//Smaller O notation, always 3 operations

function addUpToAlternative(num) {
	return num * (Num + 1) / 2;
}


//OR Same Outcome, but unknown number of operations - depends on value of num/input...
//but also more clear what you're actually doing "semantically"

function addUpTo(num) {
	var total = 0;
	for (var i=1; i <= num; i++) {
		total += i;
	}
	return total;
}


//Design decisions - if based on time? 
//But diff computers have different run-time, and same coputer has diff when doing other things
//Seconds is not a good way of measuring
//Better way is Counting How Many Operations Need to Perform - don't need an exact number (hence "big O")

var t1 = Date.now();
addUpTo(10);
var t2 = Date.now();
console.log("TIME ELAPSED:", t2 - t1);   // in millisecs

// f = O(g)   f is eventually less than g
// f < g if f(x) < g(x) for each x
// f is eventually less than C * g for some C > 0
// "log n vs. n^2 vs. n..."
// "big O of n/input" - what is the thing you're measuring?
// e.g. "what's the time or space *complexity*?" (this is a big O question) OR "solve this problem + it has to be big O of n"
// linear vs. quadratic equation
// "Red is Big O of Blue, but not vice versa",  "X is Big O of Y" ~ "X is eventually less than (a Constant times) Y"

// function is O(1) - run time = constant; 0-slope; O(n) - linear; O(n^2) - quadratic; O(2^n) - exponential; O(n log(n)) - logarithm
// Best to Worst: constant; log(n); linear; n log n; n^2; n^3; 2^n

// number of operations grows proportionally to input? --> linear
// 1 "for loop" ~ good guess is O(n)/linear - but, if doesn't take input or input doesn't vary # of ops, could be O(1)
// 2 "for loops" ~ generally n^2
// 2 loops --> can they be broken up into 2 loops vs. nested?
// try to keep indentation relatively shallow, so it's easier to reason-through 

function logMultiples(n) {
	for (var num1 = 1; num2 <= n; num2++) {  // if this is O(n)
		for (var somethingElse; num2 < 10; num1++) {  // length is hardcoded ~ O(1)
		console.log(num1 * num2);
		}
	}
}

// binary search (if already sorted -- that way we don't need to do O(n) for searching an array) - cut in half; take middle number and then continue search to L or R depending on value
// double the array and only increase search number by 1
// how many times can divide by 2 before get 1
// log(n) grows without bound; n << n logn << n^(1+r)

// n  log2(n) //base 2 (looks like a subscript)
// 8   3      // ~ 2^3
// 16  4
// 32  5
// 64  6
// 128 7
// 256 8

// never hits an asymptote
// log2(2^101) = 101  - stays small overall (even though growing)

// function double (arr) {
//	var newArr = [] 
//	for (dfmsdldsds)   //time complexity = O(n), Space complexity O(n) because saving a new arr of same size
//		dsfds.push(asdsa)...
//}
// if mutate input list instead, time stays same, but space complexity: O(1)
// auxiliary space complexity - not talking about the space needed for inputs, etc.
// time is usually more relevant to folks than space

// writing tests - steps:
// (Write tests first --> so, JS has to fail bc not really written yet)
// Red - fails first
// Green - then code functions + add minimum amount of code to make it pass
// Refactor - duplication, check time complexity, etc
