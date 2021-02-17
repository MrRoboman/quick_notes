class NotesToTag < ApplicationRecord
  belongs_to :note
  belongs_to :tag
end
