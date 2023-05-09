function countingSort(arr) {
    // Write your code here
    let counting_arr = new Array(100).fill(0);
    for(let i = 0; i < arr.length; i++){
        counting_arr[arr[i]] += 1
    }
    return counting_arr

}