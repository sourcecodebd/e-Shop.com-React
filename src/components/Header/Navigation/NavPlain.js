const handleDownArrow = () => {
    const downArrow = document.querySelector('.down-arrow');
    downArrow.setAttribute('style', 'display: inline-block; transform: scale(0.5);');
}
const vanishDownArrow = () => {
    const downArrow = document.querySelector('.down-arrow');
    downArrow.setAttribute('style', 'display: none');
}

export { handleDownArrow, vanishDownArrow };