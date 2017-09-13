num1 = [2,4,5]
num2 = [2,3,6]
num3 = []
count = 0
for i in num1:
    num3.append(num2[count] * i)
    count += 1

print(num3)
