def num_clockwise_rotated(str1, str2):
  count = 0

  if str1 == str2:
    return count
  else:
    while count < len(str1)-1:
      str1 = "".join([str1[x] for x in range(1, len(str1))])+str1[0]
      count += 1
      if str1 == str2:
        return count

num_clockwise_rotated("coffee", "eecoff")
      
      
def num_rotated(str1, str2):
  count = 0

  if str1 == str2:
    return count
  else:
    while count < len(str1)-1:
      str1 = str1[-1] + "".join([str1[x] for x in range(0, len(str1)-1)])
      count += 1
      if str1 == str2:
        return count
      elif count == len(str1)-1:
        return -1

print(num_rotated("Esham", "Esham"))