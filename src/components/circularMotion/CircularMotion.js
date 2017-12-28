
export default class CircularMotion extends React.Component {
    constructor(){
        super();
    }
    componentDidMount() {
        const colors = ['#f1ccb8', '#f1f1b8', '#f1b8e4', '#b8f1cc', '#dcff93', '#c86f67'];

        const canvas = document.getElementById('canvas');
        const c = canvas.getContext('2d');

        function randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function randomColor(colors, max) {
            return colors[max % colors.length];
        }

        let particles = [];

        function init() {
            let max = 20;
            for (let i = 0; i < max; i++) {
                const radius = (Math.random() * 2) + 1;
                particles.push(new Particle(150, 150, radius, randomColor(colors, max)));
            }
        }
        function animate() {
            requestAnimationFrame(animate);
            c.fillStyle='rgba(0, 0, 0, 0.05)';
            c.fillRect(0, 0, 300, 300);
            particles.forEach(particle => {
                particle.update();
            })
        }


        function Particle(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.radians = Math.random() * Math.PI * 2;
            this.velocity = 0.05;
            this.distanceFromCenter = randomIntFromRange(50, 120);

            this.update = () => {
                const lastPoint = {x: this.x, y:this.y};
                this.radians += this.velocity;
                this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
                this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
                this.draw(lastPoint);
            };

            this.draw = (lastPoint) => {
                c.beginPath();
                c.strokeStyle = this.color;
                c.lineWidth = this.radius;
                c.moveTo(lastPoint.x, lastPoint.y);
                c.lineTo(this.x, this.y);
                c.stroke();
                c.closePath();
            };
        }

        init();
        animate();
    }
    render() {
        return (
            <canvas id="canvas" width={300} height={300}/>
        );
    }
}