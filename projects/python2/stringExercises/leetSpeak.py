paragraph = 'Hello my name is justin'
paragraph = paragraph.upper()
normal = ['A', 'E', 'G', 'I', 'O', 'S', 'T']
leet = ['4', '3', '6', '1', '0', '5', '7']

for i, letter in enumerate(normal):
    paragraph = paragraph.replace(letter, leet[i])

print(paragraph)
