# Part 1 - Build it up
# First off create a class with four empty methods: sad, happy, laughing, and angry.
# The constructor should take in one argument: str. (for “string”) This should be saved for internal use of the class.
# Now each method should return the string that was stored with an appropriate emoji. That emoji would of course match the method name.
# Lastly the class should also have a method called original that returns the original string with no emoji at the end.


class Emoji
  def initialize(str)
    @str = str
  end
  def sad
    @str + " 😞"
  end
  def happy
    @str + " 😊"
  end
  def laughing
    @str + " 😆"
  end
  def angry
    @str + " 😡"
  end
  def original
    @str
  end
end

emoji = Emoji.new("I am just an original string")

puts emoji.original
puts emoji.happy
puts emoji.sad
puts emoji.laughing
puts emoji.angry

