AFRAME.registerComponent("Game", {
    schema: {
        state: { type: "string", default: "places-list" },
        selectedCard: { type: "string", default: "#card1" },
        zoomAspectRatio: { type: "number", default: 1 }
      },
      init: function() {
        this.placesContainer = this.el;
        this.cameraEl = document.querySelector("#camera");
        this.createCards();
      },

      updateScore: function(){
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore +=50;
        element.setAttribute("text", {
            value:currentScore,
        });
      },

      startTimer: function (duration, timerEl){
        var minutes;
        var seconds;

        setInterval(()=> {
            if (duration >=0){
                minutes = parseInt(duration / 60);
                seconds = parseInt(duration % 60);

                if (minutes < 10){
                    minutes = "0" + minutes;
                }

                if(seconds < 10){
                    seconds = "0" + seconds;
                }

                timerEl.setAttribute("text", {
                    value: minutes + ":" + seconds,
                });

                duration -= 1;
            }
            else{
                this.gameOver();

            }
        },1000)
      }
});