# Array.prototype.farEach = function(callback) {
#   for(let i = 0; i < this.length ; ++i) {
#     callback(this[i])
#   }
# }

# let array = [1,2,3,4]

# array.farEach(element => {
#   console.log(element - 1)
# })


class Array

  def far_each
    # your implementation goes here
    #   remember you are being passed in a block
   for element in self
      yield(element)
    end
  end
end

[2,3,4,5].far_each do |element|
  puts element - 1
end
