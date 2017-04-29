class GraftAddJob < ApplicationJob
  queue_as :default

  def perform(post_id)
    path = 'products.list'
    node = PagesController.render :index, locals: { breezy_filter: path }

    ActionCable.server.broadcast "breezy_channel", [:add, "data.#{path}", node]
  end
end

