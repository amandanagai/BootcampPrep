def fibonnaci(index):
  if index == 0:
    return 0
  elif index == 1:
    return 1
  else:
    return fibonnaci(index-1) + fibonnaci(index-2)

print(fibonnaci(6))

  
# end up with: 0 + 1 + 1 + 1 + 1 + ... (number made up of 1s at index)

# comes from https://www.codewars.com/kata/n-th-fibonacci/python