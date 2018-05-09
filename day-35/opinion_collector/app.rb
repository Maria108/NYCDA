require "sinatra"
require 'dotenv/load'
require "sendgrid-ruby"
include SendGrid

get "/" do
  erb :index
end

put "/dz" do
  erb :index
end

post "/contact" do
  @name, @comment = params[:name], params[:comment]

  from = Email.new(email: 'dbachko@gmail.com')
  to = Email.new(email: 'maria.abash@gmail.com')
  subject = 'Vote'
  content = Content.new(type: 'text/plain', value: @name + ": " + @comment)
  mail = Mail.new(from, subject, to, content)

  sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
  response = sg.client.mail._('send').post(request_body: mail.to_json)

  redirect "/"
end



