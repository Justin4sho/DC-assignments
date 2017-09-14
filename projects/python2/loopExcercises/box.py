width = int(input('Width? '))
height = int(input('Height? '))

print('*' * width)

spaces = width - 2
spaces = ' ' * spaces
for i in range(height - 2):
    print('*' + spaces + '*')

print('*' * width)
