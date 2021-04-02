var dragging = false
var position = null;

// 监听鼠标是否按下
heart.addEventListener('mousedown',function(e){
  dragging = true
  position = [e.clientX, e.clientY]
})


// 鼠标移动move不能监听在div上,而是要在document上监听
document.addEventListener('mousemove',function(e){
  if(dragging === false){return}
  const x = e.clientX
  const y = e.clientY
  const deltaX = x - position[0]
  const deltaY = y - position[1]
  const left = parseInt(heart.style.left || 0)
  const top = parseInt(heart.style.top || 0)
  
  heart.style.left = left + deltaX + 'px'
  heart.style.top = top + deltaY + 'px'
  position = [x,y];
//   console.log(position);
})
document.addEventListener('mouseup', function(e){
  dragging = false
})
