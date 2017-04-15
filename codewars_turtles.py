from math import floor

def catchup_time(v1, v2, g):
	t = []
	raw_t = float(-g)/(float(v1)-float(v2))

	if v1 >= v2:
		return None
	for item in [v1,v2,g]:
		if item > 0 and type(item)==int:
			continue
		else:
			return 0

	t[0] = int(floor(raw_t))
	t[1] = int(floor((raw_t-t[0])*60.00))
	t[2] = int(round((((raw_t-t[0])*60.00)-t[1])*60.00))
	return t

print(catchup_time(720, 850, 70))