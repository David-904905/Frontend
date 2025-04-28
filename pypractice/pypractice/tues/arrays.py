from array import array
from random import random  
import math 


floats = array('d', (math.floor(random() * 10 ** 7) for i in range(10 ** 7)))

fp = open('floats.bin', 'wb') # w means write, and b means binary, telling python, you are going to write binary data like numbers of images or any nontext data
# open is a context manager, so you have to close it.
floats.tofile(fp)
fp.close
# print(floats[:6])

# to create create an array from a file, you use the fromfile method.

floats2 = array('d')
fp = open('floats.bin', 'rb') # rb stands for read binary
floats2.fromfile(fp, 10**7) # you also have to specify the number of items you want to read from the file
fp.close()
# print(floats2[:6])

arr_int = array('i', [1, 2, 3, 4, 5, 6])


mv = memoryview(arr_int).cast('B')
arr_float = mv.cast('d')

print(arr_int)
print(arr_float.tolist())