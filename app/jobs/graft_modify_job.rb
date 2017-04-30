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

    node = PagesController.render :index, locals: { breezy_filter: 'header.alert', alert_message:{message: 'Yes!!!!', level: 'success', id: rand(1..1000) }}
    ActionCable.server.broadcast "breezy_channel", [:add, "data.header.alert", node]
  end
end


