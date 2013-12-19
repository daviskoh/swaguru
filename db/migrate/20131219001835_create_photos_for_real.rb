class CreatePhotosForReal < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :likes, default: 0

      t.timestamps
    end

    add_attachment :photos, :image
  end
end
