def multiply_even_numbers(num_list):
  evens = []
  product = 1
  
  for num in num_list:
    if num % 2 == 0:
      evens.append(num)
  if len(evens) == 0:
    return 0
  elif len(evens)==1:
    return evens[0]
  else:
    for i in range(len(evens)):
      product = product * evens[i]
    return product

print(multiply_even_numbers([2, 5, 7, 8, 10]))
# do you want to consider 0 an even number? if so, the product of any list with 0 will be 0

from numpy import prod

def multiply_even_numbers_2(num_list):
  evens = []  
  for num in num_list:
    if num % 2 == 0:
      evens.append(num)
  if len(evens) == 0:
    return 0
  elif len(evens)==1:
    return evens[0]
  else:
    for item in evens:
      if item == 0:
        evens.remove(item)
        print(evens)
    return prod(evens)
      
print(multiply_even_numbers_2([2, 5, 7, 8, 0, 0, 10]))


#  else:
#    if 0 in evens:
#      ind = evens.index(0)
#      evens.pop(ind)
#    return prod(evens)