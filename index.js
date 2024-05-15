// // Bài tập 1
// Đầu vào: lương 1 ngày cố định là 100.000VND & nhập số ngày làm
// Đầu ra: tính lương dựa vào lương 1 ngày & số ngày làm
// Công thức: luong = số ngày làm * 100.000VND
document.getElementById("tinhLuong").onclick = function () {
  const luong1Ngay = new Intl.NumberFormat("vn-Vi").format(100000);
  let soNgayLam = document.getElementById("soNgayLam").value * 1;
  let tienLuong = luong1Ngay * soNgayLam;
  console.log(tienLuong);
  let thePBai1 = document.querySelector(".kqBai1");
  thePBai1.innerHTML = "Tiền lương là: " + luong1Ngay;
};

// Bài tập 2
// Đầu vào: Nhập vào giá trị 5 con số
// Đầu ra: Tính số trung bình của 5 số trên
// Công thức: Tổng giá trị 5 số / 5
document.getElementById("giaTriTrungBinh").onclick = function () {
  let so1 = +document.getElementById("so1").value;
  let so2 = +document.getElementById("so2").value;
  let so3 = +document.getElementById("so3").value;
  let so4 = +document.getElementById("so4").value;
  let so5 = +document.getElementById("so5").value;
  let giaTriTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  console.log(giaTriTrungBinh);
  document.querySelector(".kqBai2").innerHTML =
    "Giá trị trung bình của 5 số trên là:" + giaTriTrungBinh;
};
