class Instrument < ApplicationRecord
  has_many :quotes
  has_many :lessons
end
