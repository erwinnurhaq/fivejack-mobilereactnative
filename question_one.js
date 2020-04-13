function solution(record) {
    let answer = [];
    let split = record.map(i => i.replace(/[^a-zA-Z0-9 ]/g, "").split(' '))
    let find = []

    const replace = (i) => {
        for (j = 0; j < find.length; j++) {
            answer[find[j]][2] = split[i][2]
        }
    }

    for (i = 0; i < record.length; i++) {
        find = answer.map((e, idx) => e[1] === split[i][1] ? idx : '').filter(String)   //find every existing userid index in answer array
        if (split[i][0] === 'Enter' && find.length === 0) {                             //Enter and no userid exist
            answer.push(split[i])
        } else if (split[i][0] === 'Enter' && find.length > 0) {                        //Enter and userid exist
            replace(i)
            answer.push(split[i])
        } else if (split[i][0] === 'Leave' && find.length > 0) {                        //Leave and userid (of course) exist
            answer.push([...split[i], answer[find[0]][2]])
        } else {                                                                        //change name
            replace(i)
        }
    }

    return answer.map(i => i[0] === 'Enter' ? `${i[2]} came in.` : `${i[2]} has left.`);
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))
// ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]