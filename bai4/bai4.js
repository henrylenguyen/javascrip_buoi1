// BÀI 4


/**
 * INPUT: lenght là chiều dài của hình chữ nhật
 *  width là chiều rộng hình chữ nhật
 * Process: 
 *  Diện tích = (dài * rộng)
 *  Chu vi = (dài + rộng) * 2
 * 
 * Output: chu vi và diện tích hình chữ nhật
 */
let lenght = 0,
  width = 0;
  lenght = prompt("Mời bạn nhập chiều dài hình chữ nhật: ");
  width = prompt("Mời bạn nhập chiều rộng hình chữ nhật: ");
  alert("Chu vi hình chữ nhật là: " + Intl.NumberFormat().format((lenght + width) * 2));
  alert("Diện tích hình chữ nhật là: " + Intl.NumberFormat().format((lenght * width)));
  
// console.log("Diện tích là: ", lenght * width);
// console.log("Chu vi là: ", (lenght + width) * 2);
