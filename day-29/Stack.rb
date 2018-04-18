
class Stack
  def initialize()
    @items = Array.new
  end

  def push(num)
    @items.push(num)
  end

  def pop()
    @items.pop()
  end

  def peeks
   @items[@items.length-1]
  end

  def empty()
    @items.empty?()
  end

  def show
    @items.join(",")
  end
end

array = Stack.new()

array.push(1)
array.push(2)
array.push(3)
# p array
# puts array.pops()
# p array
p array.peeks()
p array
# puts array.peeks()
puts array.show()
p array
