# 1 - Reverse a String
# Write a Ruby function that takes in a string and reverses it. A for loop would be handy for this! Note: You cannot use the ruby built in methods reverse or reverse!


def string_reverse(str)
  output = ""
  str.each_char.with_index do |element, index|
    output.concat(str[-1-index])
  end
  output
end

puts string_reverse("Hi Masha")


# 2 - FizzBuzz
# Write a function that puts the numbers from 1 to 100. But for multiples of three puts “Fizz” instead of the number and for the multiples of five puts “Buzz”. For numbers which are multiples of both three and five puts “FizzBuzz”.

def fizz_buzz(num)
  output = []
  range = (1..num)
  range.each_with_index do |element, index|
    if element%3 == 0 && element%5 == 0
      output.push("FizzBuzz")
    elsif element%3 == 0
      output.push("Fizz")
    elsif element%5 == 0
      output.push("Buzz")
    else
      output.push(element)
    end
  end
   output
end

puts fizz_buzz(100)

# 3 - Pig Latin
# Pig Latin is a game of alterations played on the English language. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: "banana" would yield anana-bay). Check out Wikipedia for more information on rules - try to get as close as possible.

def pig_latin(str)
  output = []
  new_str = str.split(" ")
  vowels = ["a", "e", "i", "o", "u"]
  new_str.each do |element|
    first = []
    last = []
    temp = element.split("")
    temp.each_with_index do |letter, index|
      if vowels.include?(letter)
        last = temp[0...index]
        last.push("ay");
        first = temp[index..-1]
        break
      end
    end
    output.push(first.join("").concat("-"+last.join("")))
  end
  output.join(" ")
end

puts pig_latin("banana drama anna kata") # anana-bay ama-dray
