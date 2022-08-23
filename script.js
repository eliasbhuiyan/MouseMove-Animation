let banner = document.querySelector(".banner")
let kit1 = document.querySelector(".kit1")
let kit2 = document.querySelector(".kit2")
let dot1 = document.querySelector(".dot1")
let dot2 = document.querySelector(".dot2")

banner.addEventListener('mousemove',function(e){
console.log(e.clientX)
console.log(e.clientY)

kit1.style.top = `${e.clientX/6}px`
kit1.style.left = `${e.clientY/2}px`

kit2.style.right = `${e.clientX/4}px`
kit2.style.top = `${e.clientY/6}px`

dot1.style.left = `${e.clientY/40}px`
dot1.style.top = `${e.clientX/70}px`

dot2.style.left = `${e.clientY/40}px`
dot2.style.top = `${e.clientX/70}px`
})