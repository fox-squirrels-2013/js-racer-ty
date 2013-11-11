$(document).ready(function() {
	$("#submit-players").on('click', function(e){
		var playerNames = $.map( $('.name'), function(e){ return e.value })
		var playerKeys = $.map( $('.key'), function(e, i){ return e.value.toUpperCase() }) // toUpperCase
		$('.container').html(createRace())		
		makePlayers(playerNames, playerKeys)

		// **** can you use ajax with plain js and html? any way to simulate or acces routes?
		// **** more research --  locks like local host doesn't work with AJAX?
		// $.ajax({
		// 	url: doGet(), //./race.html
		// 	type: 'GET', // GET
		// 	// data: $('#create-players').serialize() 
		// }).done(function(server_data){
		// 	console.log(server_data)
		// 	// $('body').html(server_data)
		// }).fail(function(jqXHR, textStatus, errorThrown){
		// 	console.log("fail" + errorThrown);
		// })
		//
		// Origin null is not allowed by Access-Control-Allow-Origin. 

		// **** this should also work, but produces same error
		// $.get( "./race.html", function( data ) {
		//   $( ".container" ).html( data );
		//   alert( "Load was performed." );
		// });

	})
})


function addPlayer(){
	playerNum = $('.createplayer').length
	if (playerNum < 8) {
		$('#playerinputs').append(createHTML(playerNum))
	} else { alert('8 Players Max')	}	
}

function createHTML(playerNum){
	return "<div class='createplayer'> Player Name: <input type='text' class='name' size='5' maxLength='5'> Race Key: <input type='text' class='key' size='1' maxLength='1'></div>"
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
      if($(elem).width() >= screen.width - 200 ) {
        alert($(elem).text().slice(5, $(elem).text().length) + ' won the race!')
        // resetGame()
      }
    })
}

// function resetGame() {
//     // use ajax for reload ~~
//     location.reload()
// }
