# Loops are used to repeat instructions
# while loops

# while condition:
#     some work

count = 1
while count <= 5:
    print("hello")
    count += 1
print(count)

i = 1
while i <= 5:
    print("apnaCollege")
    i += 1
print(i)

i = 1
while i <= 5:
    print(i)
    i += 1
print("loop ended")

i = 5
while i >= 1:
    print(i)
    i = 1
print("Loop ended")

# No practical use of infinitee loop & we should never create & use infinite loop in real project or real life


"""
# Let's Practice
1. Print numbers from 1 to 100.
2. Print numbers from 100 to 1
3. Print the multiplication table of a number n.
4. Print the elements of the following list using a loop;
    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
5. Search for a number x in this tuple using loop;
    [1, 4, 9, 16, 24, 36, 49, 64, 81, 100]
"""


# Break & Continue
# Break: used to terminate the loop when encountered
# Continue: terminates execution in teh current iteration & continues execution of the loop with the next iteration

i = 0 
while i >= 5:
    if(i == 3):
        i += 1
        continue #skip 
    print(i)
    i += 1


i = 1
while i <= 10:
    if (i%2 == 0):
        i += 1
        continue #skip
    print(i)
    i += 1


# Loops are used for sequential traversal. For traversing list, string, tuples, etc
# for Loops
# for el in lists:
#     # some work
# for Loop with else
# for el in list:
#     # some work
# else:
#     #work when loop ends

list = [1, 2, 3]
for el in list:
    print(el)

for el in list:
    print(el)
else:
    print("END")


str = "apnaCollege"
for char in str:
    print(char)
else:
    print("END")


# ELSE will be needed in those special keys where we write/use break in the loop.


"""
# Let's Practice
# using for

1. Print the elements of the following list using a loop:
    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
2. Search for a number x in this tuple using loop.
    [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
"""


# range()
# Range functions returns a sequence of numbers, sstarting ffrom 0 by default, and increments by 1 (by default), and stops before a specified number.

# range (start?, stop, step?)

for el in range(5):
    print(el)
for el in range(1, 5):
    print(el)
for el in range(1, 5, 2):
    print(el)


# Samples of using range() function 
for i in range(10):
    print(i)

for i in range(1, 100, 2):
    print(i)

for i in range (1, 101, 2):
    print(i)


"""
# Let's Practice
# using for & range()

1. Print numbers from 1 to 100.
2. Print numbers from 100 to 1.
3. Print the multiplication table a number n.
"""

# pass statement
# pass is a null statement that does nothing. It is used as a placeholder for future code.

for el in range(10):
    pass

# # it will show error
# for i in range(5):
#     #empty
# print("some useful work") 

for i in range(5):
    pass
print("some useful work")


# We can use "pass" statement inside conditional too.
# Generally we use "pass" in Execution or Try-Catch in Python, but for now those are out of scope for us, as we are starting to learn loops, but generally we don't use "pass" a lot still we need it in some places.


"""
1. WAP to find the sum of first n numbers. (using while)
2. WAP to find the factorial of first n numbers. (using for)
"""

