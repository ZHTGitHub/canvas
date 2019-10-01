;!(function() {

    var canvas = document.getElementById('canvas')
    var context = canvas.getContext('2d')
    var canvasW = document.documentElement.clientWidth
    var canvasH = document.documentElement.clientHeight
    var amount = 100
    var star = []

    canvas.width = canvasW
    canvas.height = canvasH

    function Stars(x, y) {

        this.x = x
        this.y = y
        this.r = Math.random() * 2 + 1
        var alpha = Math.floor(Math.random()*10+1) / 10 / 2
        this.color = 'rgba(255, 255, 255, '+ alpha +')'

    }

    Stars.prototype.draw = function() {

        context.fillStyle = this.color
        context.shadowBlur = this.r * 2
        context.beginPath()
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI, false)
        context.closePath()
        context.fill()

    }

    Stars.prototype.move = function() {

        this.y -= .2

        if(this.y < -10) {
            this.y = canvasH + 10
        }

        this.draw()

    }

    function animate() {
        context.clearRect(0, 0, canvasW, canvasH)

        for (var i in star) {
            star[i].move()
        }
        requestAnimationFrame(animate)
    }

    function init() {

        for(let i = 0; i < amount; i++) {

            star[i] = new Stars(Math.random()*canvasW, Math.random()*canvasH)
            star[i].draw()

        }

        animate()

    }

    init()

})();