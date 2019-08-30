# Sherlock and Squares
# Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value describing a range of integers. Sherlock must determine the number of square integers within that range, inclusive of the endpoints.
# Note: A square integer is an integer which is the square of an integer, e.g. 1, 4, 9, 16, 25.
# For example, the range is a = 24 and b = 49, inclusive. There are three square integers in the range:  25, 36 and 49.

# Function Description
# Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from  a to b.

# squares has the following parameter(s):
# a: an integer, the lower range boundary
# b: an integer, the upper range boundary

# Input Format
# The first line contains q, the number of test cases. 
# Each of the next q lines contains two space-separated integers denoting a and b, the starting and ending integers in the ranges.

# Output Format
# For each test case, print the number of square integers in the range on a new line.

# Sample Input
# 2
# 3 9
# 17 24

# Sample Output
# 2
# 0

# Explanation
# Test Case #00: In range [3, 9], 4 and 9 are the two square integers. 
# Test Case #01: In range [17, 24], there are no square integers.

#!/bin/python3
import math

def squares(a, b):
    return math.floor(math.sqrt(b)) + 1 - math.ceil(math.sqrt(a))


# Find Digits
# An integer d is a divisor of an integer n if the remainder of n / d = 0.
# Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
# Note: Each digit is considered to be unique, so each occurrence of the same digit should be counted (e.g. for n = 111, 1 is a divisor of 111 each time it occurs so the answer is 3).

# Function Description
# Complete the findDigits function in the editor below. It should return an integer representing the number of digits of d that are divisors of d.
# findDigits has the following parameter(s):
# n: an integer to analyze

# Input Format
# The first line is an integer, t, indicating the number of test cases. 
# The t subsequent lines each contain an integer, n.

# Output Format
# For every test case, count the number of digits in n that are divisors of n. Print each answer on a new line.

# Sample Input
# 2
# 12
# 1012

# Sample Output
# 2
# 3

# Explanation
# The number 12 is broken into two digits, 1 and 2. When 12 is divided by either of those two digits, the remainder is 0 so they are both divisors.
# The number 1012 is broken into four digits, 1, 0, 1, and 2. 1012 is evenly divisible by its digits 1, 1, and 2, but it is not divisible by 0 as division by zero is undefined.

def findDigits(n):
  count = 0
  for i in str(n):
    if i == "0":
      pass
    elif n%int(i) == 0:
      count += 1
  return count

# Nested list
# Given the names and grades for each student in a Physics class of N students, store them in a nested list and print the name(s) of any student(s) having the second lowest grade.
# Note: If there are multiple students with the same grade, order their names alphabetically and print each name on a new line.

# Input Format
# The first line contains an integer, N, the number of students. 
# The 2N subsequent lines describe each student over 2 lines; the first line contains a student's name, and the second line contains their grade.
# There will always be one or more students having the second lowest grade.

# Output Format
# Print the name(s) of any student(s) having the second lowest grade in Physics; if there are multiple students, order their names alphabetically and print each one on a new line.

# Sample Input 0
# 5
# Harry
# 37.21
# Berry
# 37.21
# Tina
# 37.2
# Akriti
# 41
# Harsh
# 39

# Sample Output 0
# Berry
# Harry

# Explanation 0
# There are 5 students in this class whose names and grades are assembled to build the following list:
# python students = [['Harry', 37.21], ['Berry', 37.21], ['Tina', 37.2], ['Akriti', 41], ['Harsh', 39]]
# The lowest grade of 37.2 belongs to Tina. The second lowest grade of 37.21 belongs to both Harry and Berry, so we order their names alphabetically and print each name on a new line.


list = []
for _ in range(int(input())):
    list.append([input(), float(input())])

def findSecond (elem):
    return elem[1]

def ans ():
    list.sort(key=findSecond)
    second, secondList = 1, []
    while list[0][1] == list[second][1]:
        second += 1
    
    secondPlace = second
    while list[secondPlace][1] == list[second][1]:
        secondList.append(list[second][0])
        second +=1
        if second >= len(list):
          break
    secondList.sort()
    for i in range(0, len(secondList)):
        print(secondList[i])
ans()