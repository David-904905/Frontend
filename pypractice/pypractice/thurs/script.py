from collections import deque

queue_one = deque(range(10), maxlen=10) # the maxlen specifies the maximum length of the queue
# print(queue_one)

queue_one.rotate(3)
# print(queue_one)
queue_one.rotate(-2)
# print(queue_one)

# what the rotate method does is that it moves the elements a certain number to the right if positive, and a certain amount to the left if negative
# so now, if we call rotate and pass it 3, starting from the first index, it moves the element at that index to the position of that index plus 3

# we can use append left to add an element to the start of the queue
# we can use append to add an element to the end of the queue
# we can use extend to add an array to the end of the queue
# we can also use extendleft to add an array to the front of the queue

queue_two = deque(range(10), maxlen=10)

# if queue is already filled, the queue adjusts by removing the elements at the front of the queue if your use the add methods without left
# if you use the left, it will remove the elements at the back of the queue.

queue_two.append(3)
print(queue_two)

queue_two.appendleft(5)
print(queue_two)

queue_two.extend([85, 58, 99, 63])
print(queue_two)

queue_two.extendleft([9, 4, 2, 1])
print(queue_two)

