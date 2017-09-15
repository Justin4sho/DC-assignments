sequence = [1,2,]




for i in range(2,100):
        x = sequence[i-1]
        y = sequence[i-2]
        z = x + y
        if z > 4000000:
            break
        sequence.append(z)
print(sequence)

list = []

for i in sequence:
    if i % 2 == 0:
        list.append(i)

print(sum(list))
