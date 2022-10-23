// BÀI 5

/**
 * INPUT: nhập n có 2 chữ số
 * Process: tách số như sau
 * 12345 => n % 10 = 5, n = n / 10 = 1234
   1234 => n % 10 = 4, n = n / 10 = 123
    123 => n % 10 = 3, n = n / 10 = 12
    12 => n % 10 = 2, n = n / 10 = 1;
    1 => n % 10 = 1, n = n / 10 = 0;

  OUTPUT: 5+4+3+2+1 = 15

 * 
 */
let tempt,sum=0;
  function sumNumber(number){
    while(number >0){
      //tempt lấy số 5 khi chạy lần đầu
     tempt = number % 10;
     //sum = 0 + 5 khi chạy lần đầu
     sum += tempt;
    //  number giảm còn 1234 dùng hàm Math.floor để làm tròn số
      number = Math.floor(number/ 10);
    }
    return sum;
  }
  let n;
  n = prompt("Mời bạn nhập 1 số muốn tính tổng: ");
  alert("Tổng của các ký số vừa nhập: "+sumNumber(n));


