width = int(input('Width? '))
height = int(input('Height? '))

for i in range(0,width):
    if i == 0 or i == width:
        print('*' * width)
    else:
        for j in range(0,height):
            if j == 0 or i == height:
                print('*')
            
