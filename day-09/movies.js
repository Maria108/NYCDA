/* Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.*/

function movieTime(flightLength, arr) { // 367, [167, 192, 200, 139]
    for (idx = 0; idx < arr.length; idx++) {
        for (j = idx + 1; j < arr.length; j++) {
            if (arr[idx] + arr[j] === flightLength) {
                return "you can watch movies " + (idx + 1) + " and " + (j + 1)
            }
        }
    }
}

console.log(movieTime(367, [100, 167, 192, 200, 139]))