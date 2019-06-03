import csv


with open('hold_positions_2016.csv', newline='') as csvfile:
	rows = list(csv.reader(csvfile))

hold_positions = {}
for item in rows:
	try:
		hold_positions[(item[1][0], item[1][1:])]=item
	except:
		print(item)
		raise

for r in range(18,0,-1):
	print("<!-- ROW -->")
	for c in [chr(i) for i in range(65,65+11)]:
		key = (c, str(r))
		if key in hold_positions:
			img_info = hold_positions[key]
			print(
				'<div>'
				f'<img src="images/img/holds/h{img_info[0]}.png" '
				f'class="col_{c} row_{r} rot_{img_info[2]}">'
				'</div>'
			)
		else:
			print('<div></div>')