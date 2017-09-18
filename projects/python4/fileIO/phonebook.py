from phoneFunctions import *
phonebook = {}

num = ''
string = ''
while True:
    selection = int(input('\nElectronic Phone Book\n=====================\n1. Look up an entry\n2. Set an entry\n3. Delete an entry\n4. List all entries\n5. Quit\nWhat do you want to do (1-5)? '))
    if selection == 1:
        string = input('Name: ')

        print('Found entry for ', string,': ', phonebook[string])
    elif selection == 2:
        string, num = newEntry()
        phonebook[string] = num
        print('Entry stored for ',string)
    elif selection == 3:
        string = input('Name: ')
        print('Deleted entry for ', string, phonebook[string])
        del phonebook[string]
    elif selection == 4:
        for key, value in phonebook.items():
            print('Found entry for ', key, ': ', value)
    elif selection == 5:
        print('Bye')
        break
