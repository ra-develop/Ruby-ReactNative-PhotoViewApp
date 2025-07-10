class CreatePhotos < ActiveRecord::Migration[8.0]
  def change
    create_table :photos do |t|
      t.string :title
      t.string :image_url
      t.string :category
      t.text :description
      t.integer :likes

      t.timestamps
    end
  end
end
