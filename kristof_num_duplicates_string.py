# "indivisibility" -> 1 # 'i'

#input = string
#output = number (of char repeated in string)

#create an empty list
#iterate through string 
#char iterate == char in string
#[].append("char")
#s = set([])
#return len(s)


def repeated_char_count(string):
  raw_solution = []
  for index in range(len(string)-1):
    for index2 in range(index+1,len(string)):
      if string[index] == string[index2]:
        raw_solution.append(string[index])
  solution = len(set(raw_solution))
  return solution


print(repeated_char_count("abcde"))

# or... you could just use a dictionary and then len(list of values > 2)

# comes from: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1