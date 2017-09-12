import random

again = 'Y'

while again == 'Y':
    print('I am thinking of a number between 1 and 10.\nYou have 5 guesses left')

    secret_number = random.randint(1,10)
    guessCount = 4
    guess = int(input('What\'s the number? '))


    while guess != secret_number and guessCount >= 0:
        if guess < secret_number:
            print(guess, 'is too low.')
            guessCount -= 1
            print('You have ', guessCount, 'guesses left.')
            guess = int(input('What\'s the number? '))
        else:
            print(guess, 'is too high.')
            guessCount -= 1
            print('You have ', guessCount, 'guesses left.')
            guess = int(input('What\'s the number? '))
    if guessCount == 0:
        print('You ran out of guesses!')
        again = input('Do you want to play again (Y or N)? ')
    else:
        print('Yes! You win!')
        again = input('Do you want to play again (Y or N)? ')
print('Bye!')
