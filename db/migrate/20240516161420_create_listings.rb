class CreateListings < ActiveRecord::Migration[7.1]
  def change
    create_table :listings do |t|
      t.text :address
      t.text :description
      t.text :img

      t.timestamps
    end
  end
end
