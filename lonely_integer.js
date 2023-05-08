function lonelyinteger(a) {
    // Write your code here
    let check_set = new Set();
    for(let i = 0; i < a.length; i++){
        if(check_set.has(a[i])){
            check_set.delete(a[i])
        } else {
            check_set.add(a[i])
        }
    }
    let final = [...check_set.values()]
    return final[0]
}