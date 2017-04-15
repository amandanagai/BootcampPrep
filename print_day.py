"""this function takes in one parameter (a number from 1-7) and returns
the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday, etc.) If the
number is less than 1 or greater than 7, the function should return None"""

def print_day(i):
	day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
		"Friday", "Saturday"]
	if 7>= i >= 1:
		return dat[i-1]
	else:
		return None

print(print_day(4))