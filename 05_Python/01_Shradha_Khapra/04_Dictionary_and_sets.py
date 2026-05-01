# Dictionary in Python
# Dictionaries are used to store data values in key-value pairs.
# They are unordered, mutable(changeable) & don't allow duplicate keys.

dict = {
    "name":"shradha", 
    "cgpa": 9.6,
    "marks":[98, 97, 95]
}
dict["name"], dict["cgpa"], dict["marks"]
dict["key"] = "value" # to assign or add new

# We can't make lists & dictionaries as key.
# We can create an empty dictionary too.

# Nested Dictionaries
student = {
    "name": "Shradha",
    "Score": {
        "chem": 98,
        "phy": 97, 
        "math":95
    }
}
student["Score"]["math"]


# Dictionary Methods
# myDict.keys() #returns all keys
# myDict.Values() #returns all values
# myDict.items() # returns all (key, val) pairs as tuple
# myDic.get("key") #returns the key according to value
# myDict.upadate(newDict) #inserts the specified items to the dictionary


# We can also write function inside function i.e nested functions 
# We can store different values in different thing & that's totally valid i.e. we can write float inside list and gain we can store list inside float.

# Set in Python
# SEt is the collection of the unordered items.
# Each element in the set must be unique & immutable

nums = {1, 2, 3, 4}
set2 = {1, 2, 2, 2}
# repeated elements stored only once, so it resoled to [1, 2]

# null-set = Set() #empty set syntax
# We never write dictionaries & lists inside sets whereas we can store the following inside sets; Boolean, int, float, str, tuple, etc


# Set Methods
set.add() #adds an element
set.remove() #removes the element
set.clear() #empties the set
set.pop() #removes a random value

# Sets are mutable, but it's elements are immutable

set.union(set2) #combines both set values & returns new
set.intersection(set2) #combines common values & returns new



"""
# Let's Practice
1. Store following word meanings in a python dictionary:
    # table: "a piece of furniture", "list of facts & figures", cat: " a small animal"
2. You are given a list of subjects for students. Assume one classroom is required for 1 subject. How many classrooms are needed by all students.
    "python", "javascript", "C++", "python", "java",
    "java", "python", "jaa", "C++", "c"
3. WAP to enter marks of 3 subjects from the user and store them in a dictionary. STart with an empty dictionary & add one by one. Use subject name as key & marks as value.
4. Figure out a way to store 9 & 9.0 as separate values in the set. (You can take help of built-in data types)
"""
