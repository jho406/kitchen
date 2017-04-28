class BreezyChannel < ApplicationCable::Channel
  def subscribed
    stream_from "breezy_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
