# Numpy Arrays

- You can load the contents of a text file into a numpy array by using the .loadtxt method

``` Python

import numpy as np

floats = np.loadtxt("txtfile.txt")

```


# Deques and Other Queues

- Working with lists and using append and pop to adhere by the FIFO principle is costly because the entire list must be shifted in memory.

- This means when an Item is removed from the list, the list has to be resorted so that the space occupied by the item is filled with the item preceeding it.

- In order to resolve this issue, we can make use of deque from the collections module.

``` Python

from collections import deque

dq = deque(range(10), maxlen=10)


```

- The rotate method is used to rotate the elements of the deque either to the right or to the left


- The append and popleft operations are atomic, so deque is safe to use as a FIFO queue in multithreaded applications without the need for locks.




# Dicts

- Some core python constructs are represented by dictionaries in memory. The __builtins__.__dict__ stores all built-in types, objects and functions.

- Python's dicts are based on hash tables.

- Other types based on hash tables are set and frozenset.

- Python dicts support | and |= operators

- A hash table implements a data structure that implements an associative array, also called a dictionary or simply map. An associative array is an abstract data type that maps keys to values. Pythons dictionary is an example of an associative array. This means that it is a dynamic data structure.


## Merging Mappings with |

- From python 3.9, you can merge mappings with the | and |= operators.

- | operator adds two mappings together and returns the result, which you usually have to store in a variable to make use of it.

- The |= operator is used to add two mappings and the assign the result to the left hand side, it is like the += operator.

- 