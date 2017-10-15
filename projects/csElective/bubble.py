from pprint import pprint as pp

class bubble_sort():

    def main(self, my_array):
        is_sorted = False
        while not is_sorted:
            is_sorted = True
            for i in range(0,len(my_array)):
                if i + 1 == len(my_array):
                    continue
                if my_array[i] > my_array[i + 1]:
                    temp = my_array[i]
                    my_array[i] = my_array[i + 1]
                    my_array[i + 1] = temp
                    is_sorted = False
        return my_array


if __name__ == "__main__":
    my_array = [3,1,8,9,7,5]
    main = bubble_sort()
    results = main.main(my_array)
    print(results)
