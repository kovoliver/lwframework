function randColor() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);

    return `rgb(${red}, ${green}, ${blue})`;
}

export default randColor;