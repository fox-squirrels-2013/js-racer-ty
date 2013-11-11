LANE_COLORS = ['Green',     'DarkMagenta', 'DarkOrange', 'Salmon',  
			   'Aquamarine','Crimson',     'Fuchsia',    'MidnightBlue']

function Player(n, k, l){
    this.name = n
    this.key = k
    this.lane = l
}

Player.prototype.location = 100

Player.prototype.init = function(){
    $('#race_track').append('<div class="player" id="player' 
    						+ this.lane +'" style="background-color: ' 
    						+ LANE_COLORS[this.lane] + '" ><span class="pkey">(' + this.key + ') </span> ' + this.name + '</div>')
}

Player.prototype.updateLocation = function(){
    this.location += 100
}