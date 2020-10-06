class Quote < ApplicationRecord
  belongs_to :instrument
  belongs_to :user
end
