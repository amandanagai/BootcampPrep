def flatten(lists):
  end_list = []
  for element in lists:
  	print element
    if isinstance(element, list) == True:
      end_list.extend(flatten(element))
    else:
      end_list.append(element)
  return end_list
  
print(flatten([[1,2,3,4],[2,6],[3,[4]]]))