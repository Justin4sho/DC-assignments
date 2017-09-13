list1 = [[2,-2], [1,2]]
list2 = [[3,1], [3,1]]
list3 = []

for i in range(0, len(list1)):
    row = []
    for j in range(0, len(list2)):
       row.append(list1[i][j] + list2[i][j])
    list3.append(row)
print(list3)
