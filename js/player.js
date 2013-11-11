function Player(n, l){
    this.name = n
    this.lane = l
}

Player.prototype.location = 100

Player.prototype.init = function(){
    $('#race_track').append('<div class="player" id="player' + this.lane +'" >' + this.name + '</div>')
}

Player.prototype.updateLocation = function(){
    this.location += 100
}