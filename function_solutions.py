def last_element(list_a):
	if bool(list_a) == True:
	  return list_a[-1]
	else:
		return None

print(last_element([1, 4, -3, "happy"]))


def single_letter_count(str1, letter):
  count = 0
  for ltr in str1:
    if ltr.lower() == letter.lower():
      count += 1
  return count
    
print(single_letter_count("BalLoono", "o"))


def multiple_letter_count(str):
  str_dict = {}
  for ltr in str:
    if ltr in str_dict:
      str_dict[ltr] += 1
    else:
      str_dict[ltr] = 1
  return str_dict
  
print(multiple_letter_count("hello my name is amanda"))


def list_manipulation(list, command, location, value=0):
  if command == "remove" and value==0:
    if location == "beginning":
      return list.pop(0)
    elif location == "end":
      return list.pop()
  elif command == "add":
    if location == "beginning":
      list.insert(0,value)
      return list
    elif location == "end":
      list.append(value)
      return list
      
print(list_manipulation([1,2,3,4], "remove", "beginning"))


#list = [1,2,3,4]
#print(list.append(1))
#print(list)


def is_palindrome(input):
  input = str(input).lower().replace(" ", "")
  reversed_input = "".join(input[x] for x in range(len(input)-1, -1, -1))
  if input == reversed_input:
    return True
  else:
    return False

print(is_palindrome("Mom mom mOm"))


def frequency(list, search_term):
  count = 0
  for item in list:
    if item==search_term:
      count += 1
  return count

print(frequency([True, False, True, True, False], False))


def mode(list_nums):
  count_nums = {}
  for num in list_nums:
    if num in count_nums:
      count_nums[num] += 1
    else:
      count_nums[num] = 1
  values = [v for k,v in count_nums.items()]
  values.sort()
  solution = values[-1]
  return solution

print(mode([1,2,3,4,5,3,4,2,3,3,3,3,4,4,4,4,4]))


def capitalize(str):
  target_ltr = str[0].upper()
  return str.replace(str[0], target_ltr)
  
print(capitalize("matt"))


def compact(list1):
  falsey_list = [False, 0, None, "", [], {}, (), set()]
  truthy_list = []
  for item in list1:
    if item not in falsey_list:
      truthy_list.append(item)
  return truthy_list
  
print(compact([1, 2, {}, "a", "b", False, []]))


def flip_case(str1, letter):
  str2 = ''
  for item in str1:
    if item.lower() == letter.lower():
      if item.islower() == True:
        str2 += item.upper()
      else:
        str2 += item.lower()
    else:
      str2 += item
  return str2
  
print(flip_case("Hardy har har", "h"))


def multiply_even_numbers(num_list):
  product_evens = 0
  
  for num in num_list:
    if num % 2 == 0:
      if product_evens == 0:
        product_evens = num
      elif num > 0:
        product_evens *= num 
  return product_evens    
      
print(multiply_even_numbers([2, 5, 7, 0, 6, 10, 0]))


def is_even(num):
  return num % 2 == 0

def partition(list1, is_even):
  evens = []
  odds = []
  for item in list1:
    if is_even(item):
      evens.append(item)
    else:
      odds.append(item)
  return [evens, odds]
  
print(partition([1,2,3,4], is_even))



def intersection(list1, list2, create_dict):
	inter_dict = {}
  	for item in list1:
    	if item in inter_dict:
      		inter_dict[item] += 1
    	else:
      		inter_dict[item] = 1
	for item in list2:
	    if item in inter_dict:
    		inter_dict[item] += 1
    	else:
      		inter_dict[item] = 1
  	return [k for k,v in inter_dict.items() if v > 1]  

print(intersection([1,2,3], [2,3,4], create_dict))

# OR, Option 2 - 2 functions; cleaner! :)

def create_dict(list, dict):
	for item in list:
    	if item in dict:
      		dict[item] += 1
    	else:
      		dict[item] = 1
  	return dict

def intersection(list1, list2, create_dict):
	inter_dict = {}
	create_dict(list1, inter_dict)
    create_dict(list2, inter_dict)
	return [k for k,v in inter_dict.items() if v > 1]  

print(intersection([1,2,3], [2,3,4], create_dict))