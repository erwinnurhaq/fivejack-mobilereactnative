function solution(N, users) {
    let answer = [];

    for (i = 1; i < N + 1; i++) {
        let find = users.filter(e => e === i)
        let newArr = users.filter(e => e !== i)
        let rate = find.length / users.length
        answer.push([i, isNaN(rate) ? 0 : rate])
        users = newArr
    }
    console.log('stage, failure rate', answer)
    return answer.sort((a, b) => b[1] - a[1]).map(i => i[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
//answer [ 3, 4, 2, 1, 5 ]

console.log(solution(4, [4, 4, 4, 4, 4]))
//answer [ 4, 1, 2, 3 ]