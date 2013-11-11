function Game(p1, p2) {
	this.player1 = p1
	this.player2 = p2
	this.player1.init()
	this.player2.init()
	this.allPlayers = [this.player1, this.player2]
}

Game.prototype.onKeyUp = function(eventCode){
	if      (eventCode === 81) {this.player1.updateLocation()} 
	else if (eventCode === 80) {this.player2.updateLocation()}
}

Game.prototype.render = function() {
  for(var i = 0; i < this.allPlayers.length; i++) {
  	$('#player' + (i + 1)).width(this.allPlayers[i].location)
  }
}