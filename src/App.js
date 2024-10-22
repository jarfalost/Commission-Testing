function commissionCalculator() {
  // ราคาสินค้า
  const LOCK_PRICE = 45.0;  // ราคาต่อชุดล็อก
  const STOCK_PRICE = 30.0; // ราคาต่อหุ้น
  const BARREL_PRICE = 25.0; // ราคาต่อบาร์เรล

  // รับข้อมูลล็อก หุ้น และบาร์เรลจากผู้ใช้
  let lockInput = prompt("กรุณากรอกจำนวนล็อกที่ขายได้:"); // ขอให้ผู้ใช้กรอกจำนวนล็อกที่ขายได้
  let stockInput = prompt("กรุณากรอกจำนวนหุ้นที่ขายได้:"); // ขอให้ผู้ใช้กรอกจำนวนหุ้นที่ขายได้
  let barrelInput = prompt("กรุณากรอกจำนวนบาร์เรลที่ขายได้:"); // ขอให้ผู้ใช้กรอกจำนวนบาร์เรลที่ขายได้

  // แปลงข้อมูลที่กรอกเป็นตัวเลขทศนิยม
  let totalLocks = parseFloat(lockInput);
  let totalStocks = parseFloat(stockInput);
  let totalBarrels = parseFloat(barrelInput);

  // คำนวณยอดขาย
  let lockSales = LOCK_PRICE * totalLocks; // คำนวณยอดขายของล็อกทั้งหมด
  let stockSales = STOCK_PRICE * totalStocks; // คำนวณยอดขายของหุ้นทั้งหมด
  let barrelSales = BARREL_PRICE * totalBarrels; // คำนวณยอดขายของบาร์เรลทั้งหมด
  let totalSales = lockSales + stockSales + barrelSales; // คำนวณยอดขายรวมทั้งหมด

  // คำนวณค่าคอมมิชชั่นจริง (Actual)
  let commission; // กำหนดตัวแปรค่าคอมมิชชั่น
  if (totalSales > 1800.0) {
      commission = 0.10 * 1000.0; // ค่าคอมมิชชั่น 10% จากยอดแรก $1000
      commission += 0.15 * 800.0; // ค่าคอมมิชชั่น 15% จากยอดถัดไป $800
      commission += 0.20 * (totalSales - 1800.0); // ค่าคอมมิชชั่น 20% จากยอดที่เกิน $1800
  } else if (totalSales > 1000.0) {
      commission = 0.10 * 1000.0; // ค่าคอมมิชชั่น 10% จากยอดแรก $1000
      commission += 0.15 * (totalSales - 1000.0); // ค่าคอมมิชชั่น 15% จากยอดที่เกิน $1000
  } else {
      commission = 0.10 * totalSales; // ค่าคอมมิชชั่น 10% จากยอดขายรวมทั้งหมดหากไม่เกิน $1000
  }

  // ปัดเศษค่าคอมมิชชั่นให้เหลือ 2 ตำแหน่งทศนิยม
  commission = commission.toFixed(2);

  // คำนวณ Expected Output Commission
  let expectedCommission = prompt("กรุณากรอกค่าคอมมิชชั่นที่คาดหวัง:"); // ขอให้ผู้ใช้กรอกค่าคอมมิชชั่นที่คาดหวัง
  expectedCommission = parseFloat(expectedCommission).toFixed(2); // แปลงข้อมูลที่กรอกเป็นตัวเลขทศนิยมและปัดเศษ

  // เปรียบเทียบ Actual กับ Expected
  let result = (commission === expectedCommission) ? "Pass" : "Fail"; // ตรวจสอบค่าคอมมิชชั่นว่าตรงกับที่คาดหวังหรือไม่

  // แสดงผลลัพธ์
  alert("จำนวนล็อกที่ขายได้: " + totalLocks); // แสดงจำนวนล็อกที่ขายได้ทั้งหมด
  alert("จำนวนหุ้นที่ขายได้: " + totalStocks); // แสดงจำนวนหุ้นที่ขายได้ทั้งหมด
  alert("จำนวนบาร์เรลที่ขายได้: " + totalBarrels); // แสดงจำนวนบาร์เรลที่ขายได้ทั้งหมด
  alert("ยอดขายรวม: $" + totalSales.toFixed(2)); // แสดงยอดขายรวมทั้งหมด ปัดเศษให้เหลือ 2 ตำแหน่งทศนิยม
  alert("ค่าคอมมิชชั่นที่คำนวณได้: $" + commission); // แสดงค่าคอมมิชชั่นที่คำนวณได้ ปัดเศษให้เหลือ 2 ตำแหน่งทศนิยม
  alert("ค่าคอมมิชชั่นที่คาดหวัง: $" + expectedCommission); // แสดงค่าคอมมิชชั่นที่คาดหวัง
  alert("ผลลัพธ์: " + result); // แสดงผลการเปรียบเทียบ
}

// เรียกใช้ฟังก์ชัน
commissionCalculator(); // เรียกใช้ฟังก์ชันเพื่อดำเนินการคำนวณ
