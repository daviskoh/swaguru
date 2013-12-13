class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false, unique: true
      t.string :password, null: false

      t.timestamps
    end

    # user profile pictures, aws
    add_attachment :users, :photo
  end
end
