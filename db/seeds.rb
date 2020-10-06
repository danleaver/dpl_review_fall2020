User.create(email: "test@gmail.com", password: "12341234" )

# Instrument.create(name: "Guitar", url: "")
# Instrument.create(name: "Piano", url: "")
# Instrument.create(name: "Drums", url: "")
# Instrument.create(name: "Kazoo", url: "")
# Instrument.create(name: "Flute", url: "")

Instrument.create(name: "Hurdy Gurdy", url: "")
Instrument.create(name: "Harmonica", url: "")
Instrument.create(name: "Cello", url: "")



  Quote.create(instrument_id: 1, user_id: 1, author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  Quote.create(instrument_id: 1, user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  Quote.create(instrument_id: 1,user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  Quote.create(instrument_id: 2,user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  Quote.create(instrument_id: 2,user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  Quote.create(instrument_id: 2,user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  Quote.create(instrument_id: 3,user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  Quote.create(instrument_id: 3,user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  Quote.create(instrument_id: 3,user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")

  puts "data seeded"


