class Node
  attr_accessor :data, :next

  def initialize(data, next_node)
    @data = data
    @next = next_node
  end
end

class LinkedList
  def initialize(data)
    @head = Node.new(data, nil)
  end

  def add(data)
    current = @head
    while current.next != nil
      current = current.next
    end
    current.next = Node.new(data, nil)
  end

  def remove(data)
    current = @head
    if current.data == data
      @head = current.next
    else
      while (current.next != nil) && (current.next.data != data)
        current = current.next
      end
      unless current.next == nil
        current.next = current.next.next
      end
    end
  end

  def insert(element, data)
    current = @head
    if current.data == data
      current.next = Node.new(element, current.next)
    else
      while (current.next != nil) && (current.next.data != data)
        current = current.next
      end
      unless current.next == nil
        current.next = Node.new(element, current.next)
      end
    end
  end

  def show
    elements = []
    current = @head
    while current.next != nil
      elements << current
      current = current.next
    end
    elements << current
  end
end

array = LinkedList.new(1)

array.add(10)

array.add(13)


# p array.remove(20)

p array.insert(11, 13)
p array

p array.show


