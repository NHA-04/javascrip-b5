document
  .getElementById("score-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var scoreHoiDong = parseFloat(
      document.getElementById("score-hoi-dong").value
    );
    var scoreMon1 = parseFloat(document.getElementById("score-mon-1").value);
    var scoreMon2 = parseFloat(document.getElementById("score-mon-2").value);
    var scoreMon3 = parseFloat(document.getElementById("score-mon-3").value);
    var khuVuc = document.getElementById("khu-vuc").value;
    var doiTuong = parseInt(document.getElementById("doi-tuong").value);

    var diemUuTien = 0;

    // Tính điểm ưu tiên theo khu vực
    if (khuVuc === "A") {
      diemUuTien += 2;
    } else if (khuVuc === "B") {
      diemUuTien += 1;
    } else if (khuVuc === "C") {
      diemUuTien += 0.5;
    }

    // Tính điểm ưu tiên theo đối tượng
    if (doiTuong === 1) {
      diemUuTien += 2.5;
    } else if (doiTuong === 2) {
      diemUuTien += 1.5;
    } else if (doiTuong === 3) {
      diemUuTien += 1;
    }

    var diemTong = scoreMon1 + scoreMon2 + scoreMon3 + diemUuTien;

    var resultDiv = document.getElementById("score-result");
    var resultText = "";

    if (scoreMon1 === 0 || scoreMon2 === 0 || scoreMon3 === 0) {
      resultText = " Thí sinh rớt vì có môn thi điểm 0.";
    } else if (diemTong >= scoreHoiDong) {
      resultText = " Thí sinh đậu với tổng điểm: " + diemTong;
    } else {
      resultText = " Thí sinh rớt với tổng điểm: " + diemTong;
    }

    resultDiv.innerHTML = resultText;
  });
// tiền điện
function calculateElectricityBill() {
  const name = document.getElementById("name").value;
  const consumption = parseFloat(document.getElementById("consumption").value);

  let bill = 0;
  if (consumption <= 50) {
    bill = consumption * 500;
  } else if (consumption <= 100) {
    bill = 50 * 500 + (consumption - 50) * 650;
  } else if (consumption <= 200) {
    bill = 50 * 500 + 50 * 650 + (consumption - 100) * 850;
  } else if (consumption <= 350) {
    bill = 50 * 500 + 50 * 650 + 100 * 850 + (consumption - 200) * 1100;
  } else {
    bill =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (consumption - 350) * 1300;
  }

  document.getElementById(
    "electricity-result"
  ).innerText = `Tên: ${name}\nTiền điện: ${bill}đ`;
}
// thuế thu nhập cá nhân
function calculateIncomeTax() {
  const name = document.getElementById("name").value;
  const income = parseFloat(document.getElementById("income").value);
  const dependents = parseInt(document.getElementById("dependents").value);

  const taxableIncome = income - 4 - dependents * 1.6;

  let taxRate = 0;
  if (taxableIncome <= 60) {
    taxRate = 5;
  } else if (taxableIncome <= 120) {
    taxRate = 10;
  } else if (taxableIncome <= 210) {
    taxRate = 15;
  } else if (taxableIncome <= 384) {
    taxRate = 20;
  } else if (taxableIncome <= 624) {
    taxRate = 25;
  } else if (taxableIncome <= 960) {
    taxRate = 30;
  } else {
    taxRate = 35;
  }

  const taxAmount = taxableIncome * (taxRate / 100);

  document.getElementById(
    "tax-result"
  ).innerText = `Họ tên: ${name}\nThuế thu nhập cá nhân: ${taxAmount} triệu VNĐ`;
}
// hóa đơn
function handleChangeCustomerType() {
  const customerTypeSelect = document.getElementById("customer-type");
  const connectionsInput = document.getElementById("connections");

  if (customerTypeSelect.value === "doanhnghiep") {
    connectionsInput.removeAttribute("disabled");
    connectionsInput.setAttribute("required", "");
  } else {
    connectionsInput.setAttribute("disabled", "");
    connectionsInput.removeAttribute("required");
  }
}

function handleChangeCustomerType() {
  const customerTypeSelect = document.getElementById("customer-type");
  const connectionsInput = document.getElementById("connections");

  if (customerTypeSelect.value === "doanhnghiep") {
    connectionsInput.removeAttribute("disabled");
    connectionsInput.setAttribute("required", "");
  } else {
    connectionsInput.setAttribute("disabled", "");
    connectionsInput.removeAttribute("required");
  }
}

function calculateBill() {
  const customerTypeSelect = document.getElementById("customer-type");
  const customerCodeInput = document.getElementById("customer-code");
  const connectionsInput = document.getElementById("connections");
  const premiumChannelsInput = document.getElementById("premium-channels");
  const resultDiv = document.getElementById("result");

  const customerType = customerTypeSelect.value;
  const customerCode = customerCodeInput.value;
  const connections =
    customerType === "doanhnghiep" ? parseInt(connectionsInput.value) || 0 : 0;
  const premiumChannels = parseInt(premiumChannelsInput.value) || 0;

  let processingFee, basicServiceFee, premiumChannelsFee;

  if (customerType === "doanhnghiep") {
    processingFee = 15;
    basicServiceFee = 75;

    if (connections > 10) {
      basicServiceFee += (connections - 10) * 5;
    }

    premiumChannelsFee = premiumChannels * 50;
  } else {
    processingFee = 4.5;
    basicServiceFee = 20.5;
    premiumChannelsFee = premiumChannels * 7.5;
  }

  const total = processingFee + basicServiceFee + premiumChannelsFee;

  resultDiv.textContent = `Hóa đơn cho khách hàng ${customerCode}: $${total.toFixed(
    2
  )}`;
}

handleChangeCustomerType();
document.addEventListener("DOMContentLoaded", function () {
  handleChangeCustomerType();
});
