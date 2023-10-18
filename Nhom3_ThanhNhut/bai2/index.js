function printTriangle(number) {
  if (number < 1 || number > 10) {
    console.log("Số không hợp lệ ! Số nhập phải từ 1 đến 10 !");
    return;
  }

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      document.write("*");
    }
    document.write("<br/>");
  }
}

console.log(printTriangle(5));
