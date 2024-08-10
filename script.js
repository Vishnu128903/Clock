let display=document.getElementById("display")
function gt(){
    let meridiem
    let time= new Date
    h=time.getHours()
    m=time.getMinutes()
    s=time.getSeconds()
    if(h<=12){
        meridiem="am"
    }
    else{
        meridiem="pm"
    }
    h=String(h).padStart(2,"0")
    m=String(m).padStart(2,"0")
    s=String(s).padStart(2,"0")
    display.textContent=`${h}:${m}:${s} ${meridiem}`}
setInterval(gt,1000)
