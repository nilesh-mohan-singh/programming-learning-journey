# Functions in Python 
# Block of statements that perform a specific task

"""
def func_name(param1, param2): #function definition
    #some work
    return val

func_name(arg1, arg2) #function call
"""

def sum(a, b):
    s = a + b
    return s
print(sum(2, 3))

def calc_sum (a, b):
    sum = a+b
    print(sum)
    return sum
calc_sum(5, 10)
calc_sum(2, 10)
calc_sum(12, 17)


#function definition
def calc_sum(a, b): # parameter
    return a+b
sum = calc_sum(1, 2) #function call arguments
print(sum)


def print_hello():
    print("hello")
print_hello()


def print_hello():
    print("hello")

output = print_hello()
print(output) #None


# average of 3 numbers
def calc_avg (a, b, c):
    sum = a + b + c
    avg = sum/3
    print(avg)
    return avg
calc_avg(98, 97, 95)



# Functions in Python
# Built-in Function - print(), len(), type(), range(), etc
# User defined Functions


# Default Parameters
# Assigning a default value to parameter which is used when no argument is passed.

def cal_prod(a, b):
    print(a * b)
    return a * b
cal_prod()


def cal_prod(a = 1, b = 1):
    print(a * b)
    return (a * b)
cal_prod()


# def cal_prod(a = 2, b): # only b as parameter is showing error
#     print(a * b)
#     return (a * b)
# cal_prod()


def cal_prod(a = 4, b = 2):
    print(a * b)
    return (a * b)
cal_prod()


def cal_prod(a, b = 2):
    print(a * b)
    return (a * b)
cal_prod()



"""
# Let's Practice 
1. WAF to print the length of a list. (list is the parameter)
2. WAF to print the elements of a list in a single line. (list is the parameter)
3. WAF to find the factorial of n. (n is the parameter)
4. WAF to convert USD to INR
"""

# Recursion
# when a function calls itself repeatedly

# prints n to 1 backwards
def show(n):
    if (n == 0): # Base Case
        return
    print(n)
    show(n-1)

# We can do everything with loops which we can do with recursion and vice versa
# Loops and recursion are type of interrelated with each other

# recursive function
def show(n):
    if(n == 0):
        return
    print(n)
    show(n - 1)
show(5)


def show(n):
    if (n == 0):
        return
    print(n)
    print(n-1)
    print("END")
show(3)


# Recursion
# returns n! (n factorial)
def fact(n):
    if (n == 0 or n == 1):
        return 1
    else:
        return n * fact(n-1)
    
def fact(n):
    if(n == 1 or n == 0):
        return 1 
    return fact(n-1) * n
print(fact(4))

# We'll not able to see Recursion a lot from next chapter, but sill we'vvee read it in case you have desire to learn DSA using Python later.

"""
# Let's Practice
1. Write a recursive function to calculate the sum of first n natural numbers.
2. Write a recursive function to print all elements in a list.
Hint: use list & index as parameters
"""
