
product = ''

for i in range(100-1000,-1):
    for j in range(100-1000,-1):
        product = i * j

        product2 = ''
        product = str(product)
        product2.join(reversed(product))
        print(product2)
        if product == product2:
            print(product)
