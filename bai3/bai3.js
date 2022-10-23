// BÀI 3

/*
INPUT: 
 nhập n là Tiền quy đổi
Process:
  1 USD = 23.500 VNĐ
  Công thức quy đổi: n * 23500
  hàm quy đổi mệnh giá tiền: 

  new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'VND'
  }).format(inputMoney)

Output:
  Xuất ra màn hình tiền quy đổi
*/ 
let n = 0;
n = prompt("Nhập số tiền USD muốn quy đổi: ");  
// console.log(inputMoney);
// alert("Tiền quy đổi được là: "+ inputMoney * 23500 + " VNĐ");
alert("Tiền quy đổi được là: " +
    new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND'
}).format(n * 23500));