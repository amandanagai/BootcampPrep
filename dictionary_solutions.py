{tup:job for tup, job in [("name", "Elie"), ("job", "Instructor")]}

states = dict(zip(["CA", "NJ", "RI"],["California", "New Jersey", "Rhode Island"]))

vowels_values = {}  
vowels = ["a", "e", "i", "o", "u"]
for item in vowels:
  vowels_values[item] = 0
# OR:
{item:0 for item in ["a", "e", "i", "o", "u"]}


dict(zip((i for i in range(1,27)),(chr(x) for x in range(65,91))))
# OR:
{(num+1):chr(num+65) for num in range(0,26)}


string = "awesome sauce"
string_dict = {}
vowels = ["a", "e", "i", "o", "u"]

for i in range(len(string)-1):
  if string[i] in vowels:
    if string_dict.get(string[i]) == True:
      string_dict[string[i]] += 1
    else:
      string_dict[string[i]] = 1
      
print(string_dict)