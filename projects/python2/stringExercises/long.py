string = 'the fat pet ping got drunk, took walk'
string = string.lower()

vowels = ['aa', 'ee', 'ii', 'oo', 'uu']
longVowels = ['aaaaa', 'eeeee', 'iiiii', 'ooooo', 'uuuuu']

for i, letter in enumerate(vowels):
    string = string.replace(letter, longVowels[i])

print(string)
