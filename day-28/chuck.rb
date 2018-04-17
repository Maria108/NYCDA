require 'chuck_norris'

class ChuckJokes
  def help
    puts "Use random to get a random quote"
    puts "Use get_joke_by_id(id_number) to get a joke by id"
    puts "Use replace_name(name) to replace Chuck's name with a name"
  end

  def get_joke_by_id(id)
    joke = ChuckNorris::JokeFinder.find_joke(id)
    joke.joke
  end

  def replace_name(first_name, last_name)
    joke = ChuckNorris::JokeFinder.get_joke(first_name: first_name, last_name: last_name)
    joke.joke
  end

  def random
    joke = ChuckNorris::JokeFinder.get_joke
    joke.joke
  end
end

any_joke = ChuckJokes.new

puts any_joke.random
puts any_joke.get_joke_by_id(497)
puts any_joke.replace_name("Abashina", "Masha")
