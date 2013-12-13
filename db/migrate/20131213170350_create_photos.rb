class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :likes, default: 0
    end

    add_attachment :photos, :url
  end
end
