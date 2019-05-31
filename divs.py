import csv


with open('hold_positions.csv', newline='') as csvfile:
	rows = list(csv.reader(csvfile))

hold_positions = {}
for item in rows:
	hold_positions[(item[1][0], item[1][1:])]=item
print(hold_positions)

for r in range(18,0,-1):
	print("<!-- ROW -->")
	for c in [chr(i) for i in range(65,65+11)]:
		img_info = hold_positions[(c, str(r))]
		print(
			'<div>'
			f'<img src="images/hold_images/h{img_info[0]}.png" '
			f'class="col_{c} row_{r} rot_{img_info[2]}">'
			'</div>'
		)

