App.breezy = App.cable.subscriptions.create "BreezyChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    graft_type = data[0];
    keyPath = data[1];
    node = new Function("'use strict'; return " + data[2] )();

    Breezy.graftByKeypath(keyPath, node.data, {type: graft_type});

    console.log(data)
    # Called when there's incoming data on the websocket for this channel
