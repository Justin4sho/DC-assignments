
num = 301
print(int(num))
list1 = ''
while num != 1:
    if num % 2 == 0:
        num = num / 2
        list1 += str(int(num)) + ' '
        # print(int(num))
    else:
        num = (num * 3) + 1
        list1 += str(int(num)) + ' '
        # print(int(num))
print(list1)
