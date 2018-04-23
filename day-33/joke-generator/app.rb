require "sinatra"

get "/" do
  "Hello world"
end

get "/jokes/:type" do
  joke = RubyJoke.new
  puts joke.get_joke({limitTo: ['nerdy','explicit']})
end

