class CreateNotesToTags < ActiveRecord::Migration[6.1]
  def change
    create_table :notes_to_tags do |t|
      t.references :note, null: false, foreign_key: true
      t.references :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
