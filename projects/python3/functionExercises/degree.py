import matplotlib.pyplot as plot

def cels(tempC):
    tempF = tempC * 1.8 + 32

    if tempF % 1 == 0:
        tempF = int(tempF)
    print(tempF)
    return tempF


temp = int(input('Type a temperature: '))
xs = list(range(0,50))
ys = []
while temp != 0:
    for x in xs:
        ys.append(cels(temp))
        temp = int(input('Type a temperature: (type \'-100\' if done) '))



plot.plot(xs, ys)
plot.axis([-50,120,0,100])
plot.show()
