<template>
  <div class="canvasbox">
    <div class="imgbox">
        <canvas id="main" width="300" height="80"></canvas>
        <!--元素用于图形的绘制，canvas 元素本身是没有绘图能力的,通过脚本 (通常是JavaScript)来完成.
        标签通常需要指定一个id属性 (脚本中经常引用), width 和 height 属性定义的画布的大小.-->
    </div>
    <!--刷新-->
    <button class="refresh" @click="refresh">看不清换一张</button>
  </div>
</template>

<script>
export default {
    name: 'VerificationCode',
    methods:{
        refresh(){
            this.draw();
        },
        randomRgbColor() { //随机生成RGB颜色
            let r = Math.floor(Math.random() * 256); //随机生成256以内r值
            let g = Math.floor(Math.random() * 256); //随机生成256以内g值
            let b = Math.floor(Math.random() * 256); //随机生成256以内b值
            return "rgb(" + r + "," + g + "," + b + ")"; //返回rgb(r,g,b)格式颜色
        },
        draw(){
            let code = '';
            let canvas = document.getElementById("main");
            let context = canvas.getContext("2d");
            canvas.width = 120;
            canvas.height = 40;
            context.strokeRect(0, 0, 120, 40);
            let aCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,1,2,3,4,5,6,7,8,9";
            console.log(aCode.split(","));
            let aLength = aCode.split(",").length;
            for (let i = 0; i <= 3; i++) {
                let x = 20 + i * 20;
                let y = 20 + Math.random() * 10;
                let j = Math.floor(Math.random() * aLength);
                let deg = Math.random() * 90 * Math.PI / 180;//随机弧度
                let txt = aCode.split(",")[j];
                code += txt;
                context.fillStyle = this.randomRgbColor();
                context.font = "bold 20px 微软雅黑";
                //修改坐标原点和旋转角度
                context.translate(x, y);
                context.rotate(deg);
                context.fillText(txt, 0, 0);
                //恢复坐标原点和旋转角度
                context.rotate(-deg);
                context.translate(-x, -y);
            }
            //干扰线
            for (let i = 0; i < 8; i++) {
                context.strokeStyle = this.randomRgbColor();
                context.beginPath();
                context.moveTo(Math.random() * 120, Math.random() * 40);
                context.lineTo(Math.random() * 120, Math.random() * 40);
                context.stroke();
            }
            /**绘制干扰点**/
            for (let i = 0; i < 20; i++) {
                context.fillStyle = this.randomRgbColor();
                context.beginPath();
                context.arc(Math.random() * 120, Math.random() * 40, 1, 0, 2 * Math.PI);
                context.fill();
            }
            this.$emit('codeChange', code);
        }
    },
    mounted(){
        this.draw();
    }
}
</script>

<style>
.canvasbox{
	position: relative;
	/*border: 1px solid #000;*/
    display: flex;
    flex-direction: column;
    align-items: center;
}
/*画布*/
.canvasbox .imgbox{
	width: 120px;
	height: 40px;
	border: 1px solid #ccc;
	border-radius:5px;
}
.canvasbox .refresh{
	display: block;
    font-size: 6px;
    font-weight: bold;
	width: 90px;
	height: 32px;
    border: 0;
    color: red;
    background-color: transparent;
    cursor: pointer;
}
</style>