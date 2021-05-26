export function showCourseTime(str){
    function toDay(d){
        if(d == 1) return '一';
        else if(d == 2) return '二';
        else if(d == 3) return '三';
        else if(d == 4) return '四';
        else if(d == 5) return '五';
    }
    let day = 1;
    let result = '';
    let flag = false;
    for (let i = 0; i < str.length; i++){
        if((i + 1) % 13 == 0) day += 1;
        if(str[i] == 1 && !flag){
        flag = true;
        if(result != '') result += ',';
        result += toDay(day);
        result += (i - (day-1) * 13 + 1).toString();
        result += '-'
        }
        if(str[i + 1] == 0 || i + 1 >= str.length || (i + 1) % 13 == 0){
        if(flag){
            if(i - (day - 1) * 13  + 1== 0) result += '13'
            else result += (i - (day-1) * 13 + 1).toString();
        }
        flag = false;
        }
    }
    return result;
}