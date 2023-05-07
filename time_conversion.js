

function timeConversion(s) {
    if(s[(s.length) - 2] == "A"){
        let time = s.replace("AM", "").split(":")
        if(time[0] == 12){
            time[0] = "00"
        }
    }
    else {
    let time = s.replace("PM", "").split(":")
    if(time[0] >= 1 && time[0] <= 11){
        time[0] = parseInt(time[0]) + 12
    }  
    }
    return time.join(":")
}


timeConversion("07:05:45AM")