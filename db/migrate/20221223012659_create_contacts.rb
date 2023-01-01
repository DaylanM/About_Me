class CreateContacts < ActiveRecord::Migration[7.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :subject
      t.text :body
      t.string :email

      t.timestamps
    end
  end
end
