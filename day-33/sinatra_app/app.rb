require "sinatra"
require "./classmate"

NAME = "Maria"

get "/" do
  "Hello human, are you ready for us robots to take over!? |8-D|"
end

get "/sei" do
  "Hello Jonathan!"
end

get "/my_name" do
  "Hello, my name is #{NAME}"
end

jonathan = Classmate.new("Jonathan", "patience")
martin = Classmate.new("Martin", "mind reading")
yorvi = Classmate.new("Yorvin", "bachata dancer")

get "/jonathan" do
  jonathan.i_have_the_power!
end

get "/martin" do
  martin.i_have_the_power!
end

get "/yorvi" do
  yorvi.i_have_the_power!
end
