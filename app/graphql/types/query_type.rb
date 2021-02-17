module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :notes, [Types::NoteType], null: false

    def notes
      Note.all
    end


    field :tags, [Types::TagType], null: false

    def tags
      Tag.all
    end
  end
end
