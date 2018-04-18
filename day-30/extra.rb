def factorial (num)
  output = 1
  while(num > 1) do
    output *= num
    num -= 1
  end
  output
end

def factorial (num)
  output = 1
  if num == 1
    return output
  end
  return num*factorial(num-1)
end


# factorial(5)

def fibonacci(num)
  array = [0,1]
  next_num = nil;
  num.times do |element|
    next_num = array[element]+array[element+1]
    array.push(next_num)
  end
  puts array
end

puts fibonacci(4)
