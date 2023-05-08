function diagonalDifference(arr) {
    // Write your code here
    let l_to_r = 0;
    let r_to_l = 0;
    for(let i =0; i < arr.length; i++){
        l_to_r += arr[i][i]
        r_to_l += arr[arr.length-i-1][i]
    }
    return Math.abs(l_to_r - r_to_l)
}