function medianOfTwoSortedArrays (numsOne, numsTwo) {
    const array = numsOne.concat(numsTwo)
    array.sort()
    let idx = array.length / 2
    let idxFloor = Math.floor(idx)
    if(array.length % 2 === 0){
        let sum = array[idx] + array[idx-1]
        return sum / 2
    } else {
        return array[idxFloor]
    }
}

medianOfTwoSortedArrays([1,2],[3,4])
