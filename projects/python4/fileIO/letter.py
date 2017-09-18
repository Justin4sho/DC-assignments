
def letter_histogram(string):

    list = {}
    for char in sorted(string):
        if char in list:
            list[char] += 1
        else:
            list[char] = 1
    return list
# letter_histogram('banana')
# print(letter_histogram('banana'))
