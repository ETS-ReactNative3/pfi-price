import React, { useRef, useEffect } from 'react'

const Canvas = (data,props) => {
  console.log(data.data.split(','))

  // console.log(data.data["price1"])
  // console.log(data.data["price2"])

  const canvasRef = useRef(null)

  const draw = ctx => {
    var canvas = ctx.canvas ;

    var imageObj = new Image();

    imageObj.src = "/pfi.jpeg";
    imageObj.onload = function(){
        scaleToFit(this);
    }

    function scaleToFit(img){
        // get the scale
        var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        var y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        ctx.font = "10px Calibri";
        ctx.fillText(data.data.split(',')[5], 120, 50);
        ctx.fillText("₹ " + data.data.split(',')[0], 230, 72);
        ctx.fillText("₹ " + data.data.split(',')[1], 230, 82);
        ctx.fillText("₹ " + data.data.split(',')[2], 230, 92);
        ctx.fillText("₹ " + data.data.split(',')[3], 230, 102);
        ctx.fillText(data.data.split(',')[4], 230, 200);
    }

    // function scaleToFill(img){
    //     // get the scale
    //     var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    //     // get the top left position of the image
    //     var x = (canvas.width / 2) - (img.width / 2) * scale;
    //     var y = (canvas.height / 2) - (img.height / 2) * scale;
    //     ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    // }



    // var imageObj = new Image();
    //
    // imageObj.onload = function(){
    //     ctx.drawImage(imageObj, 0, 0, 350, 150);
    //     ctx.font = "10px Calibri";
    //     ctx.fillText(data.data.split(',')[5], 120, 50);
    //     ctx.fillText("₹ " + data.data.split(',')[0], 230, 72);
    //     ctx.fillText("₹ " + data.data.split(',')[1], 230, 82);
    //     ctx.fillText("₹ " + data.data.split(',')[2], 230, 92);
    //     ctx.fillText("₹ " + data.data.split(',')[3], 230, 102);
    //     ctx.fillText(data.data.split(',')[4], 230, 200);
    // };
    // imageObj.src = "pfi.png";

  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    draw(context)
  }, [draw])


  return <canvas ref={canvasRef}/>
}

export default Canvas
