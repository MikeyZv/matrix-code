var canvas = document.getElementById("animation-box");
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = "ABCDEFGHIJKLMNOPQRSTUVXYZ=*+-<>ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ日¦｜モエヤキオカ7ケサスz152ヨタワ4ネヌナ98ヒ0ホア3ウ セ¦:꞊ミラリ╌ツテニハソ▪—<>0|+*コシマムメ";
letters = letters.split("");

var fontSize = 25;
var columns = canvas.width / fontSize;

var trails = [];
for (var i = 0; i < columns; i++) {
    trails[i] = 1;
};

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < trails.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.font = "900 25px Matrix";
        ctx.fillStyle = "#00ff2b";
        ctx.fillText(text, i * fontSize, trails[i] * fontSize);
        trails[i]++;
        if (trails[i] * fontSize > canvas.height && Math.random() > .95) {
            trails[i] = 0;
        }
    }
};

setInterval(draw, 35);