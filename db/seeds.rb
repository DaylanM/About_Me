User.delete_all

@counter = 0
5.times do
  user = User.create(
    name: Faker::Games::SuperMario.character,
    email: "test#{@counter}@test.com",
    password: 'password'
  )
  @counter += 1
end