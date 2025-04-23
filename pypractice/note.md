# Sequence Types

## Arrays

- An array does not hold full fledged float instances, but only the packed bytes representing their machine values.

- b character code in arrays stand for signed char which ranges from -128 to 127

- When working with arrays, we use .tofile to write the content of the array to a file.

- The .fromFile method is used to create an array from a file.


- A binary is just a way of representing data using only two values.

- The i in __iadd__ and other i related dunder methods stands for inplace.

- The .cast allows you to create a new array of a different type with the data from another array. Create a memory view of the array with the data, and then assign the cast of the mv to the new array.



## Memory Views

- A memoryview is essentially a generalized numpy array structure in Python itself. It allows you to share memory between data-structures without first copying. This is very important for large data sets.

- memoryview is a built-in type that lets you access the memory of bytes like objects like bytes, bytearrsy or array.array without copying the data.


### Advantages

- Work with slices of binary data without allocating new memory
- Modify  data in place if the original object is mutable
- Interface cleanly with C/C++ buffers, Numpy, and I/O

- Memory view works well when working with low level stuff.


