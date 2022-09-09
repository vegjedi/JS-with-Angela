function fibonacciGenerator (n) {
    var output = [];
    for (var i = 1; i <= n; i++) {
        if (i === 1) {
            output.push(0);
        } else if (i === 2) {
            output.push(1);
        } else {
            output.push(output[i-3] + output[i-2]);
        }
    }
    return(output);
}
