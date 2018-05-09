require "sinatra"
require "googlebooks"

get "/" do
  erb :index
end

post "/" do
  @query = params[:query]
  @books = GoogleBooks.search(@query, {:count => 1})
  erb :index
end

