/*Using a for loop, compute the sum of the numbers in the array named prices; storing the result in the sum variable */

// var prices = [33, 26, 99, 120, 12, 45];
// var sum = 0;

// for (idx = 0; idx < prices.length; idx++) {
//     sum = sum + prices[idx]
// }

// console.log("The sum is: ", sum);

/* Write a program in a new Repl.it that outputs all 100 lines of the classic song: 99 Crows on the Wall. You shouldn’t have to write 300 lines of JavaScript for this program at all - this is the perfect chance to use a for loop or while loop! 

99 crows on the wall. 99 crows.
1 fell down and became a wight.
98 crows on the wall

1 crow on the wall. 1 single crow.
It fell down and became a wight.
There's no one left to defend Westeros now.  
*/

for (i = 99; i > 0; i--) {
    if (i != 1) {
        console.log(i + " crows on the wall. " + i + " crows.\n1 fell down and became a wight.\n" + (i - 1) + " crows on the wall\n")
    } else {
        console.log("1 crow on the wall. 1 single crow.\nIt fell down and became a wight.\nThere's no one left to defend Westeros now.")

    }
}