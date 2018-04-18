class Queue
  def initialize()
    @items = []
  end

  def enqueues(num)
    @items.unshift(num)
  end

  def dequeue()
    @items.pop()
  end

  def front
   @items[0]
  end

  def empty()
    @items.empty?()
  end

  def show
    puts @items.join(",")
  end
end

array = Queue.new()

array.enqueues(1)
array.enqueues(2)
array.enqueues(3)
puts array.dequeue()
p array
p array.front()
p array
puts array.empty()
p array
puts array.show()
p array
