class AddForeignKeyToPhotos < ActiveRecord::Migration
  def change
    change_table :photos do |t|
      t.references :user, null: false, index: true
    end

    reversible do |dir|
      dir.up do
        execute <<-SQL  
          ALTER TABLE photos
          ADD CONSTRAINT fk_photos_users
          FOREIGN KEY (user_id)
          REFERENCES users(id)
        SQL
      end
    end
  end
end