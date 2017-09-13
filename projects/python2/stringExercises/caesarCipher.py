import string

a = 'GUVFGUVATEVTUGURERVFSHPXVARAPELCGRQ '
a = a.lower()
alphabet = string.ascii_lowercase
shift = 13
cipherText = ''
for ch in a:
    if ch.isalpha():
        new = ord(ch) + shift
        if new > ord('z'):
            new -= 26
        final = chr(new)
        cipherText += final
    else:
        cipherText += ch

print(cipherText)
