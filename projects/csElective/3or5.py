from pprint import pprint as pp

class sum_finder():

    def main(self, max):
        total = 0
        for i in range(1,max):
            if i % 5 == 0 or i % 3 == 0:
                total = total + i  
        return total


if __name__ == "__main__":

    main = sum_finder()
    result = main.main(50000000)
    print(result)
