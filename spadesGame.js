//spades

$(function() {
	var player1 = {
			cards: [],
			isTurn: false
		};

	var player2 = {
			cards: [],
			isTurn: false
		};
		
	var player3 = {
			cards: [],
			isTurn: false
		};

	var player4 = {
			cards: [],
			isTurn: false
		};

	var deck = {
		cardBase: ["A",2,3,4,5,6,7,8,9,10,"J", "Q", "K"],

		createDeck: function() {
			var fullDeck = [];
			for(i=0; i<52; i++) {
				if(i<13) {
					fullDeck.push("H" + this.cardBase[i%13])
				}
				else if(i<26) {
					fullDeck.push("D" + this.cardBase[i%13])
				}
				else if(i<39) {
					fullDeck.push("C" + this.cardBase[i%13])
				}
				else {
					fullDeck.push("S" + this.cardBase[i%13])
				}
			}
		return fullDeck;
		},

		getRandomInt: function (min, max) {
			return Math.floor(Math.random()*(max-min))+min;
		},

		shuffle: function() {
			shuffledDeck = [];
			var fullDeck = this.createDeck();
			for(var i=0; i<52; i++) {
				var num = this.getRandomInt(0, fullDeck.length);
				var card = fullDeck.splice(num, 1)[0];
				shuffledDeck.push(card);
			}
			return shuffledDeck;
		},

		deal: function() {
			var shuffledDeck = this.shuffle();
			player1.cards = shuffledDeck.slice(0,13);
			player2.cards = shuffledDeck.slice(13,26);
			player3.cards = shuffledDeck.slice(26,39);
			player4.cards = shuffledDeck.slice(39,52); 
		}
	}

	var playRound = function() {
		for(var i=0; i<13; 1++)
			var turn = [player1.isTurn, player2.isTurn, player3.isTurn, player4.isTurn]
			if(i%4==0){
				i=0
			}
			turn[i] = true;

		for(var i=0; i<13; 1++) {
		}
	}

	var userTurn = function() {

	}


	});

