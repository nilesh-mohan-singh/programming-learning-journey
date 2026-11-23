# Strings
# String is a data type that stores a sequence of characters

# Basic Operations
"hello" + "world" = "helloworld" #concatenation
len(str) #length of str

# Indexing
str = "Apna_College"
str[0] is 'A', str[1] is 'p'
str[0] = 'B' #not allowed

# Slicing
# Accessing parts of a string
# str[starting_idx:ending_idx] #ending idx is not included
str = "ApnaCollege"
str[1:4] # is "pna"
str[:4] # is same as str [0:4]
str[1:] #is same as str[1:len(str)]


# Slicing
# Negative index

str = "Apple"
str[-3:-1] # is 'pl'

#String Functions
str = "I am a coder"
str.endswith("er")
str.capitalize()
str.replace("old", "new")
str.find("word")
str.count("am")


str = "I am studying python from ApnaCollege"
print(str.endswith("ege"))
print(str.endswith("app"))
print(str.capitalize())
print(str)
print(str.replace("o", "a"))
print(str.replace("python", "javascript"))
print(str.find("o"))
print(str.find("from"))
print(str.count("o"))



# +++++++ Let's Practice ++++++++++++++++
# 1. WAP to input user's first name & print its length.
# 2. WaP to find the occurence of '$' in a sting.


#Conditional Statements
# if-elif-else

light = "green"
if(light == "red"):
    print("stop")
elif(light == "green"):
    print("go")
elif(light == "yellow"):
    print("look")
print("end of code")


light = "pink"
if(light == "red"):
    print("stop")
elif(light == "green"):
    print("go")
elif(light == "yellow"):
    print("look")
else:
    print("light is broken")
print("end of code")


age = 14
if(age >= 18):
    print("can vote")
else:
    print("CANNOT vote")


# Grade of Student
marks = 75
if(marks >= 90):
    grade = "A"
elif(marks >= 80 and marks < 90):
    grade = "B"
elif(marks >= 70 and marks < 80):
    grade = "c"
else:
    grade = "D"
print("grade of the student -> ", grade)


# Nesting
age = 95
if(age >= 18):
    if(age >= 80):
        print("cannot drive")
    else:
        print("can drive")
else:
    print("cannot drive")


# Let's Practice
# 1. WAP to check if a number entered by the user is odd or even
# 2. WAP to find the greatest fo 3 numbers entered by the user.
# 3. WAP to check if a number is a multiple of 7 or not.
