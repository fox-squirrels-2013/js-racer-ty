$(document).on('ready', function(){
  runGame()
})

function runGame() {
    $('#start').on('click', function(){
      countDown()
      checkForAction()
  })
}

function countDown() {
    $('#start').text('READY...')
    setTimeout( function(){
        $('#start').text('GO!')
    }, 1000)
}

function checkForAction(){
    $(document).keypress(function (e){
        if      (e.charCode === 113) {moveRacer(1)} 
            else if (e.charCode === 112) {moveRacer(2)}
        })
}


function moveRacer(racer) {
    $('#racer' + racer).css('width', '+=200')
    checkForWinner(racer)
}

function checkForWinner(racer) {
    if ($('#racer' + racer).width() >= screen.width - 200 ) {
        alert('Racer ' + racer + 'has won!')
    }
}