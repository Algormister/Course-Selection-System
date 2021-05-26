export function updateCourseTime(str){
    const replaceStr = (str, index, char) => {
        const strAry = str.split('');
        strAry[index] = char;
        return strAry.join('');
    }
    function toDay(d){
        if (d == '一') return 0;
        else if(d == '二') return 1;
        else if (d == '三') return 2;
        else if (d == '四') return 3;
        else if(d == '五') return 4;
    }
    let strArr = str.split(',');
    let result = '00000000000000000000000000000000000000000000000000000000000000000'
    for (let i = 0; i < strArr.length; i++){
        let day = strArr[i].slice(0, 1);
        let arr = strArr[i].split('-');
        let start = arr[0].slice(1);
        let end = arr[1].slice(0);
        for (let j = toDay(day)*13 + Number(start) - 1; j < toDay(day)*13 + Number(end); j++){
        result = replaceStr(result, j, '1');
        }
    }
    result = replaceStr(result, 1, '1');
    return result;
}