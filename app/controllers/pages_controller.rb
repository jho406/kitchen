class PagesController < ApplicationController
  before_action :use_breezy_html

  def index
  end

  def cart
    product = Product.find(params[:id])
    Cart.create(product: product, qty: 1)
    GraftModifyJob.perform_later(product.id)

    head 204
  end
end
