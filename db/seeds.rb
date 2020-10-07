User.create(email: "test@gmail.com", password: "12341234" )

# Instrument.create(name: "Guitar", url: "")
# Instrument.create(name: "Piano", url: "")
# Instrument.create(name: "Drums", url: "")
# Instrument.create(name: "Kazoo", url: "")
# Instrument.create(name: "Flute", url: "")

Instrument.create(name: "Hurdy Gurdy", url: "https://res.cloudinary.com/danleaver/image/upload/v1601914125/dpl_review/hurdy_gurdy_hruybt.jpg")
  3.times do
    Quote.create(instrument_id: 1, user_id: 1, author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  end

Instrument.create(name: "Harmonica", url: "https://res.cloudinary.com/danleaver/image/upload/v1601914134/dpl_review/harmonica_huklan.jpg")
  3.times do
    Quote.create(instrument_id: 2,user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
  end
Instrument.create(name: "Cello", url: "https://res.cloudinary.com/danleaver/image/upload/v1601914154/dpl_review/cello_aqtoay.jpg")
 3.times do
  Quote.create(instrument_id: 3,user_id: 1,author: "#{Faker::Movies::Lebowski.character}",  body: "#{Faker::Movies::Ghostbusters.quote}")
 end

  puts "data seeded"


