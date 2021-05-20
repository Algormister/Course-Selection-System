export function debounce(func, delay){
    let time = null;
    return () =>{
        if(time) clearTimeout(time);
        time = setTimeout(() => {
            func();
        }, delay); 
    }
}