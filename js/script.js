$(document).ready(function() {
  var player1 = new Player('Ty', 0);
  var player2 = new Player('Dude', 1);

  var game = new Game(player1, player2);

  $('#start').on('click', function() {
    $(this).text('READY...')
      setTimeout( function(){ 
        $('#start').text('GO!') 
        checkForActions(game)
    }, 1000)
  })
});

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
        alert($(elem).text() + ' won the race!')
        resetGame()
      }
    })
}

function resetGame() {
    // use ajax for reload ~~
    location.reload()
}
