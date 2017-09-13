a = 'Hello my name is justin'

a = a.upper()


for i in range(len(a)):
    print(i)
    if a[i] == 'A':
        b.append('4')
        break
    elif a[i] == 'E':
        b.append('3')
        break
    elif a[i] == 'G':
        b.append('6')
        break
    elif a[i] == 'I':
        b.append('1')
        break
    elif a[i] == 'O':
        b.append('0')
        break
    elif a[i] == 'S':
        b.append('5')
        break
    elif a[i] == 'T':
        b.append('7')
        break
    else:
        b.append(a[i])
print(b)
