
phonebook = {}

def lookup():
    string = input('Name: ')

    print('Found entry for ', string,': ', phonebook(string))

def newEntry():
    string = input('Name: ')
    num = input('Phone Number: ')
    return string,num
    print('Entry stored for ', string)
