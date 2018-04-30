n = 2520
resolution = 0

def evenlyDivisible(n):
  i = 2
  while i <= 20:
    if (n % i != 0):
      return True
    i += 1


while resolution < 1:
  if evenlyDivisible(n) == True:
    n += 1
  else:
    resolution = n

print(resolution)
