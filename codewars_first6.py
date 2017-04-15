def solution(word):
  return "".join(word[i] for i in range(len(word)-1, -1, -1))
  
word = input("What word do you want to mutate? ")
print(solution(word))


def new_avg(arr, navg):
  x = int(((len(arr) + 1) * navg) - sum(arr))
  if x <= 0:
    return None
  else:
    return x
#arg = int(item for item in [input("Enter each donation amounth so far - separated by commas: ").split(","))]
#navg = int(input("What is the desired average donation?"))

current_donations = [2, 15, 81, 62, 8]
desired_average = int(input("What do you want the average donation to be? "))
print(new_avg(current_donations, desired_average))


def sequenceSum(begin,end,step):
  if begin > end:
    return 0
  elif begin < 0 or end < 0 or step < 0:
    print("Can't be negative numbers")
  else:
    return sum([x for x in range(begin, end+1, step)])
    
print(sequenceSum(1,5,1))


def maxDiff(lst):
  if lst == False:
    return 0
  else:
    lst.sort()
    return abs(lst[-1] - lst[0])
    
print(maxDiff([-6, -9, -7, -5, -2]))


def countSmileys(list_smileys):
  count = 0
  eyes = [":",";"]
  nose = ["-","~"]
  mouth = [")","D"]
  
  for item in list_smileys:
    if 4 > len(item) > 1 and item[0] in eyes and item[-1] in mouth:
      if len(item) == 2:
        count += 1
      else:
        if item[1] in nose:
          count += 1
  return count
  
print(countSmileys([':)', ";(", ";}", ":-D", ":", ":$", ":-))", ""]))


#def sentence_counter(para):
#  punct = ['.', '!', '?']
#  count = 0
#  for item in para:
#    if item in punct:
#      count += 1
#  return count

#paragraph = input("What paragraph do you want to count? ")
#print(sentence_counter(paragraph))


#def sen_counter(para):
#  return len([item for item in para if item in ['.', '!', '?']])
  
#paragrph = input("What paragraph do you want to count? ")
#print(sen_counter(paragrph))


def sen_counter(para):
  return para.count('.') + para.count('!') + para.count('?')
  
paragrph = input("What paragraph do you want to count? ")
print(sen_counter(paragrph))