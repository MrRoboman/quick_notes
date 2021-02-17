class Tag < ApplicationRecord
    has_many :notes_to_tags
    has_many :notes, through: :notes_to_tags
end
