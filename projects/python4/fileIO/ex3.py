from letter import *
from word import *

fileName = input('Enter file name: ')

with open(fileName, 'r') as file_handle:
    contents = file_handle.read()
    print(contents)
    print(letter_histogram(contents))
    print(word_histogram(contents))
