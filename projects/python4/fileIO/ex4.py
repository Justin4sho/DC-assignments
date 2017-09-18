import json
import matplotlib.pyplot as plot

data = {}
xList = []
yList = []
with open('data.json', 'r') as fh:
    data = json.load(fh)

for key, value in data.items():
    for i in value:
        # xs = i[0]
        # ys = i[1]
        print(i)
        xList.append(i[0])
        yList.append(i[1])

# plot.axis([-3,3,-2,4])
print(xList,yList)
plot.plot(xList,yList, 'ro')
plot.plot(xList,yList, 'b-')
plot.show()
