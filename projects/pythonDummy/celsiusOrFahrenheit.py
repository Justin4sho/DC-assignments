tempC = int(input('Temperature in C? '))

tempF = tempC * 1.8 + 32

if tempF % 1 == 0:
    tempF = int(tempF)

print(tempF, 'F')
