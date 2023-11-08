# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# create a method that takes in the numbers abpve
def even_or_odd num
    # write a conditional to determine is number is even or odd using .even?
    if num.even? == true
        "#{num} is even"
    else
        "#{num} is odd"
    end
end
#print results as string
p even_or_odd reposts3

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# create a method that takes in the strings above
def no_vowels str
    # remove the vowels if they are in the string
    str.delete "aeiou"
end
# print string without vowels
p no_vowels beatles_album3
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# create a method that takes in the strings above
def palindrome str
    #write a conditional that determines if the word downcased is the same in reverse
    if str.downcase == str.reverse.downcase
        "#{str} is a palindrone"
    else
        "#{str} is not a palindrone"
    end
end
# print the string if it is a palindrone
p palindrome palindrome_test_case3