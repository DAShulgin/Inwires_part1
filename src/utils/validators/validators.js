export const required = value => {

    if (value)
        return undefined;

    return 'Поле пустое';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength)
    return `Максимальная длина ${maxLength} символов` 
    
    return undefined ;  
}




