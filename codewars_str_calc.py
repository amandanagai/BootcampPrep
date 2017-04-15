# https://www.codewars.com/kata/string-calculator-with-different-input-types

def string_calc(string):
  product = 0
  acceptable = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
  for item in string:
    if item in acceptable:
      if product == 0:
        product = int(item)
      else:
        product *= int(item)
  if product == 0:
    print("Calculation failed")
  else:
    return product
    
    
print(string_calc("bad input"))