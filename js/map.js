

let arr = [1,2,3,43,5,6,7,89,10];


// Using the map function

 //   create and print another array that is reverse of the original array

    anotherarray = arr.map(item => item).reverse();
    console.log(anotherarray);

 //   create and print another array that is double of each element

    doublearray = arr.map(item => item * 2);
    console.log(doublearray);

  //  create and print another array that is reverse and minus one(one less) of the original array
 //       [9,88,6,5,42...]

    reverseminusone = arr.map(item => item - 1).reverse();
    console.log(reverseminusone);



 //In the new array, print everything is that is above 6.

    abovesix = arr.filter(item => item > 6);
    console.log(abovesix);