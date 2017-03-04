
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?


//******************INCOMPLETE**************
//THis formula will find the factors of a number;
//Another formula is needed to identify whether those numbers are prime;

function findFactors(num) {
    var str = 0;
    for (i = 1; i <= num; i++) {
        if (num % i === 0) {
            str += ',' + i;
        }
    }
  console.log(str);
}

findFactors(101);
