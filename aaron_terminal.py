
def path(abs, real):
	s2 = "/"
	s = abs + real
	ls = s.split("/")
	print ls
	index = 0
	while ".." in ls or "." in ls:
		if ls[index] == "..":
			ls.pop(index)
			ls.pop(index-1)
			index -= 1
		elif ls[index] == ".":
			ls.pop(index)
		else:
			index += 1
	if len(ls) == 1:
		return "/"
	else:
		return s2.join(ls) + "/"

def path2(abs, rel):
	abs_list = abs.split("/")
	rel_list = rel.split("/")
	for item in rel_list:
		if item == "..":
			abs_list.pop()
		elif item == ".":
			pass
		else:
			abs_list.append(item)
	return "/".join(abs_list) + "/"		

def main(): 
	print path2("/var/www/", ".")

if __name__ == '__main__':
	main()

