$(document).ready(function() {
	$("#submit-players").on('click', function(e){
		var playerNames = $.map( $('.name'), function(e){ return e.value })
		var playerKeys = $.map( $('.key'), function(e, i){ return e.value.toUpperCase() })
		$('.container').html(createRace())
		makePlayers(playerNames, playerKeys)
	})
})


function addPlayer(){
	playerNum = $('.createplayer').length
	if (playerNum < 6) {
		$('#playerinputs').append(createHTML(playerNum))
	} else { alert('6 Players Max')	}
}


function createHTML(playerNum){
  DEFAULT_KEYS = ['Q', 'P', 'A', 'L', 'Z', 'M']

  return "<div class='createplayer'> Player Name: <input type='text' class='name' size='3' maxLength='3'> Race Key: <input type='text' class='key' size='1' maxLength='1' value='" + DEFAULT_KEYS[playerNum] + "' ></div>"
}

function createRace(){
	return '<div id="start">START RACE</div><div id="race_track"></div><div id="finish_line"></div>'
}


function makePlayers(players, keys){
	createdPlayers = []
	$(players).each(function(i, e){
		createdPlayers.push( new Player(e, keys[i], i))
	})

	var game = new Game(createdPlayers);

	$('#start').on('click', function() {
		$(this).text('READY...')
		setTimeout( function(){
			$('#start').text('GO!')
			checkForActions(game)
		}, 1000)

	})
}

function checkForActions(game) {
	$(document).on('keyup', function(event) {
		game.onKeyUp(event.which);
		game.render()
		checkForWinner()
	});
}

function checkForWinner(racer) {
	$('.player').each(function(i, elem) {
		if($(elem).width() >= ($(window).width() - 75) ) {
			alert($(elem).text().slice(5, $(elem).text().length) + ' won the race!')
			console.log($(elem).text().slice(5, $(elem).text().length) + ' won the race!')
			resetGameOption()
		}
	})
}

function resetGameOption() {
	  // would like to use ajax for reload
    // and present option for reset OR newgame (current is like newgame only)
    $('#start').text('new game?')
    $(this).on('click', function(){
    	location.reload()
    })
}
