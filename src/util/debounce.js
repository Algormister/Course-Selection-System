export function debounce(e, index, func, delay){
    let time = null;
    return () =>{
        if(time) clearTimeout(time);
        time = setTimeout(() => {
            func(e, index);
        }, delay); 
    }
}