require "sinatra"

get "/" do
  erb :index
end

text = "whatever"

get "/double_time" do
  @text = text
  erb :double_time
end

get "/form" do
  @username, @password = params[:username], params[:password]
  erb :form
end

post "/form" do
  puts params

  redirect "/form"
end
