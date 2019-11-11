# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Difficulty.delete_all
User.delete_all

# difficulties
difficulty1 = Difficulty.create(level: "easy", time: 60)
difficulty2 = Difficulty.create(level: "medium", time: 90)
difficulty3 = Difficulty.create(level: "hard", time: 120)


# users
user1 = User.create(username: "ali", password: "1234", phrase: "idk")
user2 = User.create(username: "frank the dank", password: "dank", phrase: "idk either")














