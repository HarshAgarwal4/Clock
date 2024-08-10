
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednwsday', 'Thursday', 'Friday', 'Saturday']
async function digital(hour, min, sec) {
    if (min < 10) {
        min = "0" + min
    }
    else if (sec < 10) {
        sec = "0" + sec
    }
    else if (hour < 10) {
        hour = "0" + hour
    }

    document.getElementById("hour").innerHTML = hour
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec

}
function updateclock() {
    setInterval(() => {
        var d = new Date()
        var min = d.getMinutes()
        var sec = d.getSeconds()
        var hour = d.getHours()
        // console.log(d , hour , min ,  sec);
        var hourhand = document.querySelector(".hourhand")
        var minhand = document.querySelector(".minutehand")
        var sechand = document.querySelector(".secondhand")
        // console.log(hour);

        sechand.style.transform = `rotate(${sec * 6}deg)`
        minhand.style.transform = `rotate(${min * 6}deg)`
        hourhand.style.transform = `rotate(${(hour % 12) * 30 + (min * 0.5)}deg)`
        // console.log(hour , ":" , min , ":" ,sec);

        digital(hour, min, sec)
        document.getElementById("getdate").innerHTML = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`
        document.getElementById("getday").innerHTML = days[`${d.getDay()}`]
    }, 1000);
}

updateclock()


var interval_sms ,  interval_smin , interval_shour , interval_ssec
function resetwatch() {
    clearInterval(interval_sms)
    clearInterval(interval_ssec)
    clearInterval(interval_smin)
    clearInterval(interval_shour)
    document.getElementById("shour").innerHTML = '00'
    document.getElementById("smin").innerHTML = '00'
    document.getElementById("ssec").innerHTML = '00'
    document.getElementById("sms").innerHTML = "00"
}

function stop() {
    
    clearInterval(interval_sms)
    clearInterval(interval_ssec)
    clearInterval(interval_smin)
    clearInterval(interval_shour)
}

function start() {
    document.getElementById("shour").innerHTML = '00'
    document.getElementById("smin").innerHTML = '00'
    document.getElementById("ssec").innerHTML = '00'
    document.getElementById("sms").innerHTML = "00"
        var a = 1;
            interval_sms = setInterval(() => {
            let msec = document.getElementById("sms")
            msec.innerHTML = a
            a++
            if (a > 99) {
                a = 0
            }
        }, 10);
        
        var b = 1;
        interval_ssec = setInterval(() => {
            let sec = document.getElementById("ssec")
            sec.innerHTML = b
            b++;
            if (b > 59) {
                b = 0
            }
        }, 1000);
        
        var c = 1;
        interval_smin = setInterval(() => {
        let min = document.getElementById("smin")
        min.innerHTML = c
        c++
        if (c > 59) {
            c = 0
        }
    }, 1000 * 60);
    
    var d = 1;
    interval_shour = setInterval(() => {
        let hour = document.getElementById("shour")
        hour.innerHTML = d
        d++
        if (d > 59) {
            d = 0
        }

    
    }, 1000 * 3600);
}

