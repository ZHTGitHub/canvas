;!(function() {

    var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d'),
            canvasW = canvas.width = document.documentElement.clientWidth,
            canvasH = canvas.height = document.documentElement.clientHeight,
            para = {
                num: 100,
                color: false,
                r: 0.9,
                o: 0.09,         
                a: 1,

            },
            color,
            color2,
            round_arr = []

        window.onmousemove = function (event) {

            mouseX = event.clientX
            mouseY = event.clientY

            round_arr.push({
                mouseX: mouseX,
                mouseY: mouseY,
                r: para.r,
                o: 1
            })
        }


        if (para.color) {
            color2 = para.color
        } else {
            color = Math.random() * 360
        }

        function animate() {

            if (!para.color) {
                color += .1
                color2 = 'hsl(' + color + ',100%,80%)'
            }

            context.clearRect(0, 0, canvasW, canvasH)

            for (var i = 0; i < round_arr.length; i++) {

                context.fillStyle = color2
                context.beginPath()
                context.arc( round_arr[i].mouseX ,round_arr[i].mouseY,round_arr[i].r,0, Math.PI * 2)
                context.closePath()
                context.fill()
                round_arr[i].r += para.r
                round_arr[i].o -= para.o

                if( round_arr[i].o <= 0){
                    round_arr.splice(i,1)
                    i--
                }
            }

            window.requestAnimationFrame(animate)
        }

        animate()

})();