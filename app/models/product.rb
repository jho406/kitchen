class Product < ApplicationRecord
  has_many :carts
  has_many :comments
end
