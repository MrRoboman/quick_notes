class Mutations::CreateNote < Mutations::BaseMutation
    argument :body, String, required: true

    field :note, Types::NoteType, null: false
    field :errors, [String], null: false

    def resolve(body:)
        note = Note.new(body: body)

        if note.save
            {
                note: note,
                errors: []
            }
        else
            {
                note: nil,
                errors: note.errors.full_messages
            }
        end
    end
end