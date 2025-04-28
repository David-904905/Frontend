data = bytearray(b'hello')
mv = memoryview(data)

print(data)
mv[0] = 72 # editing directly. It accesses the memory directly
print(data)

data[1] = 65 # this also edits the item in position 1, so why use memview and not this
print(data)