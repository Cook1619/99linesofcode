var friends = ['Mike', 'Cody', 'Aaron', 'Tom', 'Ahmed'];

for (var i = 0; i < friends.length; i++) {
    for (var j = 99; j > 0; j--) {
        if (j === 1) {
            console.log(`${friends[i]}`
                + `: ${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, ${j} line of code in the file`)
        } else if (j !== 1) {
            console.log(`${friends[i]}`
                + `: ${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j} lines of code in the file`);
        }
    }
}