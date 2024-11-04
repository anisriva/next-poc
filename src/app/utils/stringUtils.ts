const cpitalizeFirstLetter = (word : string) => {
    return word.charAt(0).toLocaleUpperCase() + word.slice(1);
}

export {cpitalizeFirstLetter};