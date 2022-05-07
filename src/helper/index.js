export const handlerText = text => {
    if(text.length > 50){
        let t = text.split(' ',10)
        t = t.join(' ') + '...'
        return t
    }
    return text
}