const labelMap = {
    1:{name:'hello', color:'red'},
    2:{name:'yes', color:'yellow'},
    3:{name:'no', color:'lime'},
    4:{name:'thanks', color:'blue'},
    5:{name:'iloveyou', color:'purple'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i < boxes.length; i++){  // Changed <= to <
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]
            
            // Set styling
            if(labelMap[text]) {  // Check if this class exists in our labelMap
                ctx.strokeStyle = labelMap[text]['color']
                ctx.lineWidth = 10
                ctx.fillStyle = 'white'
                ctx.font = '30px Arial'         
                
                // DRAW!!
                ctx.beginPath()
                ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
                ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
                ctx.stroke()
            } else {
                console.log(`Unknown class: ${text}`);  // Optional debugging
            }
        }
    }
}
