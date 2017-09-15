list = []

for x in range(1,1000):
    if x % 3 == 0:
        list.append(x)
    elif x % 5 == 0:
        list.append(x)

print(sum(list))
