module Types
  class NotesToTagsType < Types::BaseObject
    field :id, ID, null: false
    field :note_id, Integer, null: false
    field :tag_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
