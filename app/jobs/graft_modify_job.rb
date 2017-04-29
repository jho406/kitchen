class GraftModifyJob < ApplicationJob
  queue_as :default

  def perform(product_id)
    paths = [
      'header',
      'metrics.purchases',
      "products.list.id=#{product_id}"
    ]

    paths.each do |path|
      node = PagesController.render :index, locals: { breezy_filter: path , params:{page: 1}}
      ActionCable.server.broadcast "breezy_channel", [:add, "data.#{path}", node]
    end
  end
end


