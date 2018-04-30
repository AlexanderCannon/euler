total = 0
for i in range(1000):
  if (i % 5 | i % 3):
    total += i
print(total)
