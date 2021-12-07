<html>
    <canvas id="canvas" width="100" height="100";">

    </canvas>
    <script>
        let canvas = document.getElementById("canvas")
        let data   = canvas.getContext("2d")

        let width  = canvas.width
        let height = canvas.height

        function dist(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2 - y1, 2))
        }

        class ball {
            constructor(pos_x, pos_y, radius, speed_x, speed_y) {
                this.pos = {
                    x : pos_x,
                    y : pos_y,
                }
                this.radius = radius
                this.velocity = {
                    x : speed_x,
                    y : speed_y,
                }
            }
        }

        let balls = []

        for (i = 1; i < 11; i++) {
            balls.push(new ball(Math.random()*width, Math.random()*height, Math.random()*20, Math.random(), Math.random()))
        }

        let [r, g, b_] = [0, 0, 0]

        let on_draw = function() {

            for (i = 1; i < balls.length; i++) {
                let b = balls[i]
                if (b.pos.x < 0 || b.pos.x > width) {
                    b.velocity.x *= -1
                }
                if (b.pos.y < 0 || b.pos.y > width) {
                    b.velocity.y *= -1
                }
                b.pos.x += b.velocity.x
                b.pos.y += b.velocity.y
            }

            data.fillStyle = "black"

            for (x = 0; x < canvas.width; x++) {
                for (y = 0; y < canvas.height; y++) {
                    [r, g, b_] = [0, 0, 0]
                    for (i = 1; i < balls.length; i++) {
                        let b = balls[i]
                        var distance = dist(x, y, b.pos.x, b.pos.y)
                        r += b.radius*50 / distance 
                        g += b.radius*50 / distance 
                        b_ += b.radius*50 / distance 
                    }
                    data.fillStyle = "rgb("+r+", "+g+", "+b_+")"
                    data.fillRect(x, y, x, y)
                }
            }
        }

        setInterval(on_draw, 0.1)
    </script>

</html>
