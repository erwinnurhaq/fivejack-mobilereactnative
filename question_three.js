function combiGenerate(sum) {
    let res = []
    let count = 0
    const loop = (array, num) => {
        for (let i = num; i < sum; i++) {
            let temp = [...array, i]
            res.push(temp)
            count++
            if (num !== sum) {
                loop(temp, i + 1)
            } else {
                return;
            }
        }
    }
    loop([], count)
    return res.sort((a, b) => a - b)
}

function mapVal(val, combination) {
    let temp = ''
    for (let i = 0; i < combination.length; i++) {
        temp += val[combination[i]]
    }
    return temp
}

function checkExistUnique(array, item) {
    let res = false
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < item.length; j++) {
            if (array[i][j] === item[j]) {
                res = true
            }
        }
    }
    return res
}

function solution(relation) {
    let combinations = combiGenerate(relation[0].length)
    let unique = []
    let index = 0

    while (index < combinations.length) {
        let distinct = [...new Set(relation.map(val => mapVal(val, combinations[index])))]
        let exist = checkExistUnique(unique, combinations[index])
        if (distinct.length === relation.length && exist === false) {
            unique.push(combinations[index])
        }
        index++
    }

    console.log('unique combinations (column index)', unique)
    return unique.length;
}

const db = [
    ['100', 'ryan', 'music', '2'],
    ['200', 'apeach', 'math', '2'],
    ['300', 'tube', 'computer', '3'],
    ['400', 'con', 'computer', '4'],
    ['500', 'muzi', 'music', '3'],
    ['600', 'apeach', 'music', '2']
]

console.log(solution(db))