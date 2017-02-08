class Bird
  def fly
    puts "I am flying"
  end
  def eat
    puts "Im eating bird seed, yum"
  end
  def clean
    puts "I have preened my feathers"
  end
end

class  Robin < Bird
  def describe
    puts "I have a lovely red chest"
  end
end

class Penguin < Bird
  def eat
    puts "I don't like seed, I'll have a fish instead"
  end
  def fly
    puts "I don't like to fly, I keep fit by swimming."
  end
end
 
puts "Steven the Robin:"
steven = Robin.new
steven.fly
steven.eat
steven.clean
steven.describe

puts "Harold the Penguin:"
harold = Penguin.new
harold.fly
harold.eat
harold.clean

puts "Gary the Bird:"
gary = Bird.new
gary.fly
gary.eat
gary.clean

