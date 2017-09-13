print('You have 0 coins.')

coins = 0

answer = input('Do you want another? ')
answer = answer.lower()
while answer == 'yes':
    coins += 1
    print('You have ', coins, 'coins.')
    answer = input('Do you want another? ')
    answer = answer.lower()
print('Bye')
