import matplotlib.pyplot as plot
import math
def f(x):
    return math.sin(x)

xs = list(range(-5, 6))
ys = []
for x in xs:
    ys.append(f(x))

plot.plot(xs, ys)
plot.axis([-6,6,-1.0,1.0])
plot.show()
