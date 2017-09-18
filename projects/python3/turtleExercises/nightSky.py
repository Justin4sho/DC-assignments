from turtle import *
from shapes import *
import random

x = random.randint(1,50)
y = random.randint(-1000,1000)

bgcolor('black')

for i in range(0,80):
    speed(0)
    pu()
    y = random.randint(-400,400)
    z = random.randint(-400,400)
    setpos(z,y)
    seth(random.randint(0,360))
    pd()
    star(random.randint(1,15),"yellow","yellow")




mainloop()
