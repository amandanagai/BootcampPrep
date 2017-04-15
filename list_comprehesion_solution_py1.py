[print(val) for val in [1,2,3,4]]
[print(val*20) in [1,2,3,4]]
[person[0] for person in ["Elie", "Tim", "Matt"]]
[number for number in [1,2,3,4,5,6] if number % 2 == 0]
[val for val in [1,2,3,4] if val in [3,4,5,6]]
[''.join([name[i] for i in range(len(name)-1, -1, -1)]).lower() for name in ["Elie", "Tim", "Matt"]]
"".join(letter for letter in "first" if letter in "third")
[number for number in range(1,101) if number % 12 == 0]
[letter for letter in "amazing" if letter not in ["a", "e", "i", "o", "u"]]
[[i for i in range(3)] for x in range(3)]
[[i for i in range(10)] for set in range(10)]

{tup:job for tup, job in [("name", "Elie"), ("job", "Instructor")]}