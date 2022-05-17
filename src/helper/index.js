export const handlerText = text => {
    if(text.length > 50){
        let t = text.split(' ',10)
        t = t.join(' ') + '...'
        return t
    }
    return text
}

export const handlerRoundText = (text,round = 15) => {
    if(text.length > round){
        let t = text.split('',round)
        t = t.join('') + '...'
        return t
    }
    return text
}