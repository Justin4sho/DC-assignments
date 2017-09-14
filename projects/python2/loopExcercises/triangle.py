
height = 4


for i in range(0, height):
    spaces = height - i - 1
    star = i * 2 + 1
    print(' ' * spaces + '*' * star)
