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
  // any way to use '.each?' -- tried, but couldn't access this.player1, this.player2 objects...
  // var self = this
  // $('.player').each(function(i, elem){
  // 	// console.log( elem.id ) // --> player1
  // 	var elemId = elem.id
  // 	// console.log(self) // --> Game {player1: Player, player2: Player, allPlayers: Array[2], onKeyUp: function, render: function}
  // 	// console.log(self.player1) // --> Player {name: "Ty", lane: 1, location: 200, location: 100, init: function…}
  // 	console.log(self.elemId) // --> undefined ??
  // 	// $(elem).width(this.elemId.location) // --> doesn't work because of undefined
  // })

  for(var i = 0; i < this.allPlayers.length; i++) {
    $('#player' + i).width(this.allPlayers[i].location)
  }
}
