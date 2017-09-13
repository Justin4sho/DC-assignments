list1 = [4,5,6,7,4,8]

list2 = []
print(list1)
for i in list1:
    if i not in list2:
        list2.append(i)
print(list2)
