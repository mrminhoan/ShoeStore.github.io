// function mapOrder (array, order, key) {
  
//     array.sort( function (a, b) {
//       var A = a[key], B = b[key];
      
//       if (order.indexOf(A) > order.indexOf(B)) {
//         return 1;
//       } else {
//         return -1;
//       }
      
//     });
    
//     return array;
//   };
  export const mapOrder = (array, order, key) => {
    array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]))
    return array
}