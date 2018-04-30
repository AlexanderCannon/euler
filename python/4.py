win = 0
for i in range(999):
  for v in range(999):
    result = i * v
    isPalindrome = str(result) == str(result)[::-1]
    if (isPalindrome and result > win): win = result
print(win)
