class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.references :product
      t.integer :qty
      t.timestamps
    end
  end
end
