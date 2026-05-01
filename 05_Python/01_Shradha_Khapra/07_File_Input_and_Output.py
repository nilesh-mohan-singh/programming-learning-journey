# file I/O in Python
# python can ve used in perform operations on a file. (read & write data)

# Types of all files
# 1. Text files: .txt, .docx, .log, etc
# 2. Binary Files: .mp4, .mov, .png, .jpeg, etc

# Open, read & close File
# We have to open a file before reading or writing

f = open("file-name", "mode")
# file-name:- sample.txt, demo.docx
# mode:- r: read mode, w: write mode

data = f.read()
f.close()

f = open("demo.txt", "r")
data = f.read()
print(data)
print(type(data))
f.close


# Character & Meaning
# 'r' - open for reading(default)
# 'w' - open for writing, truncating the file first
# 'x' - create a new file and open it for writing
# 'a' - open for writing, appending to the end of the file if it exists
# 'b' - binary mode
# 't' - text mode(default)
# '+' - open a disk file for updating (reading and writing)



# Reading a File
data = f.read() # reads entire file
data = f.readline() # reads one line at a time

f = open ("demo.txt", "r")
line1 = f.readline()
print(line1)
f.close()


#Writing to a file
f = open("demo.txt", "w")
f.write("this is a new line") # overwrites the entire file

f = open("demo.txt", "a")
f.write("this is a new line") # adds to the file



"""
r+     ->       read + overwrite    (pointer at start)  - no truncate
w+     ->       read + overwrite                        - truncate
a+     ->       read + append       (pointer at end)    - no truncate
"""

# With Syntax
with open ("demo.txt", "a") as f:
    data = f.read()

with open ("demo.txt", "r") as f:
    data = f.read()
    print(data)

with open ("dmeo.txt", "w") as f:
    f.write("new data")


# Deleting a file
# using the os module

# Module (like a code library) is a file written by another programmer that generally has a functions we can use

# import os
# os.remove(filename)

# import tensorflow # It will show error because it's not installed



"""
# Let's Practice
1. Create anew file "practice.txt" using python. Add the following data in it:
    Hi everyone
    we are learning File I/O
    using Python
    I like programming in Python
2. WAF that replace all occurrences of "python" with "javascript" in above file
3. Search if the word "learning" exists in the file or not.
4. WAF to find in which line of the file does the word "learning" occur first, Print-1 if word not found.
5. from a file containing numbers separatted by comma, print the count of even numbers.
"""


