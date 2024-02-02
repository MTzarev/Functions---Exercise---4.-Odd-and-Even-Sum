function oddAndEvenSum(char) {
    let charAsString = char.toString()
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < charAsString.length; i++) {
        let digit = Number(charAsString[i]);
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }

    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234);
