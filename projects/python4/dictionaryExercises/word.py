

def word_histogram(string):
    list = {}
    temp = ''
    for char in string.lower():
        if char == ' ':
            if temp in list:
                list[temp] += 1
                temp = ''
            else:
                list[temp] = 1
                temp = ''
        else:
            temp += char
    if temp in list:
        list[temp] += 1
    else:
        list[temp] = 1
    return list

print(word_histogram('To be or not to be'))
