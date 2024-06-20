$(document).ready(function () {
    //game variables 
    let points = 0;
    let clicks = 0;
    let pointsPerClick = 1;
    let autoClickerCost = 100;
    let autoClickers = 0;

  
    function updateScore() {
      $('#points').text(points);
      $('#clicks').text(clicks);
      $('#autoClickers').text(autoClicker);
      $('#autoClickersCost').text(autoClickerCost);
      $.post('/api/score', { points, clicks });
    }

    function autoClick() {
        points += autoClickers;
        updateScore();
    }
  
    $('#clickButton').click(function () {
      points++;
      clicks++;
      updateScore();
    });

    setInterval(autoClick, 1000);

    $('clickButton').click(function() {
        points += pointsPerClick;
        clicks++;
        updateScore();
    })

    $('#upgradeButton').click(function(){
        if (points >= 10) {
            points -= 10;
            pointsPerClick++;
            updateScore();
        } else {
            alert('Not enough points for upgrade!')
        }
    });

    $('#autoClickerButton').click(function (){
        if (points >= autoClickerCost) {
            points -= autoClickerCost;
            autoClickers++;
            autoClickerCost = Math.floor(autoClickerCost * 1.5);
            updateScore();
        } else {
            alert('Not enough points for auto-clicker!')
        }
    });
  
    $.get('/api/score', function (data) {
      if (data) {
        points = data.points;
        clicks = data.clicks;
        updateScore();
      }
    });
  });
  