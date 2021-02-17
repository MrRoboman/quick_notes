class Note < ApplicationRecord
    has_many :notes_to_tags
    has_many :tags, through: :notes_to_tags
end
