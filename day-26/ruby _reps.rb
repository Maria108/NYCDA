# 1 - Sales Tax
# Make a ruby function that adds 8.8% tax if given a number. If it’s given a string it should puts a message asking for a number instead and return nil.

def sales_tax(arg)
    if arg.class == Fixnum
         puts arg * 0.88
    else
        puts "Give me a number"
    end
end

puts sales_tax(5)


# 2 - Instance Counter
# Make a ruby function that finds the letter that appears the most often within a string and returns it. Take for instance if given “Bob is a very nice gardener” the program should puts “e”. Since the letter “e” appears 4 times.

def instance_counter (str)
    # split to aray each char without space
    array = str.split(" ").join("").split("")
    counter = 1
    # find only reapeted char more then 1 times
    newArr = array.select { |e| array.count(e) > counter}.uniq
    length = newArr.length
    # shrink newArr until it's only one char which reapeted more times then others char
    length.times do
        counter += 1
        newArr = array.select { |e| array.count(e) > counter}.uniq
        if newArr.length === 1
        return newArr[0]
        end
    end
end

puts instance_counter("Bob is a very nice gardeneree")

# 3 - Snake Eyes
# Make a ruby function that rolls two dice 100 times and puts how many times it rolled snake eyes (two 1s). The rand function would be super helpful for this (https://ruby-doc.org/core-2.2.0/Random.html#method-i-rand ).

def snake_eyes
    random = Random.new
    counter = 0
    100.times do
        first_dice = random.rand(1...6)
        second_dice = random.rand(1...6)
        if (first_dice == 1 && second_dice == 1)
            counter += 1
        end
    end
    puts counter
end

puts snake_eyes
