fileName = input('Enter file name: ')

with open(fileName, 'w') as fh:
    contents = input('Enter the contents of the file: ')
    fh.write(contents)
