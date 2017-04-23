class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :qty
      t.integer :votes
      t.string :product_type
      t.timestamps
    end
  end
end
