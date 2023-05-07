const countDate = new Date('May 14,2023 08:00:00').getTime();

function secim(){
    const now = new Date().getTime()
    let gap = countDate - now

    let second = 1000;
    let minute = second*60
    let hour = minute*60
    let day = hour*24

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d + ' gün';
    document.getElementById('hour').innerText = h + ' saat';
    document.getElementById('minute').innerText = m + ' dakika';
    document.getElementById('second').innerText = s + ' saniye';
}

setInterval(function(){
    secim()
},1000)