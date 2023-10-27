function circleArea(radius) {
    let result;
    let inputType = typeof(radius);
    if (inputType === 'number') {
        result = Math.pow(radius, 2) * Math.PI;
        console.log(result.toFixed(2));
    }else {
        console.groupCollapsed(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}

circleArea('aaa')