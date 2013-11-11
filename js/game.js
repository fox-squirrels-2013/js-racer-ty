function Game(players) {
	$(players).each(function(i, player){ player.init() })
  this.allPlayers = players
}

Game.prototype.onKeyUp = function(eventCode){
  var self = this
  $(this.allPlayers).each(function(i, e){
    if (eventCode === e.key.charCodeAt(0)) {
      self.allPlayers[i].updateLocation()
    }
  })
}

Game.prototype.render = function() {
  for(var i = 0; i < this.allPlayers.length; i++) {
    $('#player' + i).width(this.allPlayers[i].location)
  }
}
