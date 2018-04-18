def instance_counter(sentence)
  char_counter = Hash.new
  sentence = sentence.gsub(" ", "").downcase
  puts sentence
  sentence.each_char do |char|
    char_counter[char] = sentence.count(char)
  end
  puts char_counter
end

instance_counter("Super Mario is definitely not human")
