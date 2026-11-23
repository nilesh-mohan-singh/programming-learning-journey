# Lists in Python
# A built-in data type that stores set of values.
# It can store elements of different types (integer, float, string, etc)

marks = [87, 64, 33, 35, 76] #marks[0], marks[1]
student = ["Karan", 85, "Delhi"] #student[0], student[1]
student[0] = "Arjun" #allowed in Python
len(student) #returns length

marks1 = 94.4
marks2 = 87.5
marks3 = 95.2
marks4 = 66.4
marks5 = 45.1

marks = [94.4, 87.5, 95.2, 66.4, 45.1]
print(marks)
print(type(marks))
print(marks[0])
print(marks[1])

student = ["Karan", 95.4, 17, "Delhi"]
print(student)
print(student[0])
student[0] = "arjun"
str = "hello"
print(str[0])
str[0] = "y"
print(student[5])


# List Slicing
# Similar to String Slicing
# list_name[starting_idx:ending_idx] #ending idx is not included
marks = [87, 64, 33, 95, 76]
marks[1:4] # is [64, 33, 95]
marks[:4] # is same as marks [0:4]
marks[1:] # is same as marks [1: len(marks)]
marks[-3:-1] #is [33, 95]


# List Methods
list = [2, 1, 3]
list.append(4) #adds one element at the end [2, 1, 3, 4]
list.sort() #sorts in ascending order [1, 2, 3]
list.sort(reverse = True) # sorts in descending order [3, 2, 1]
list.reverse()  # reverse lsit [3, 1, 2]
list.insert("idx", "el")  # isnert element at index


list = [2, 1, 3, 1]
list.remove(1) #removes first occurence of element [2, 3, 1]
list.pop("idx") #removes element at idx






# Tuple in Python
# A built-in data type that lets us create immutable sequences of value
tup = (87, 64, 33, 94, 76) # typ[0], typ[1]
tup[0] = 43     # NOT allowed in Python
tup1 = ()
tup2 = (1, )
tup3 = (1, 2, 3)

tup = (2, 1, 3, 1)
print(tup[0])
print(tup[1])
tup[0] = 5

tup = ()
print(tup)
print(type(tup))

tup = (1,)
print(tup)
print(type(tup))

tup = ("hello")
print(tup)
print(type(tup))

tup = (1, 2, 3, 4)
print(tup)
print(type(tup))

tup = (1, 2, 3, 4)
print(tup)
print(type(tup))


# Tuple Methods
tup = (2, 1, 3, 1)
tup.index() #returns index of first occurrence tup.index(1) is 1
tup.count() #counts total occurrences tup.count(1) is 2


# Let's Practice
# 1. WAP to ask the user to enter names fo their 3 favourite movies & store them in a list.
# 2. WAP to check if a list contains a palindrome of elements. (Hint: use copy() method)
# 3. WAP to count the number of students with the "A" grade in the following tuple.
# 4. STroe the avove values in a list & sort them from "A" to "D"

