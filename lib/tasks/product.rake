namespace :product do
  desc "Touch all Products"
  task touch: :environment do
    Product.all.map(&:touch)
  end
end
