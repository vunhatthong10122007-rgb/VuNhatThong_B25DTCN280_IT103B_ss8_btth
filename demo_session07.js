let chargingQueue = ['30A-111', '29B-222', '51C-333'];
console.log("Hàng đợi ban đầu:", chargingQueue);

const newVehicle = '43D-444';
chargingQueue.push(newVehicle);
console.log(`Thêm xe mới (${newVehicle}):`, chargingQueue);

const priorityVehicle = '14A-999';
chargingQueue.splice(1, 0, priorityVehicle);
console.log(`Chèn xe ưu tiên (${priorityVehicle}):`, chargingQueue);

const chargingVehicle = chargingQueue.shift();
console.log(`Xe vào cổng sạc: ${chargingVehicle}`);
console.log("Hàng đợi còn lại:", chargingQueue);

const kwhUsage = [30, 45, 25];
const unitPrice = 4500; 

let totalKwh = 0;
kwhUsage.forEach(kwh => {
  totalKwh += kwh;
});

const totalRevenue = totalKwh * unitPrice;

console.log(`- Tổng điện năng tiêu thụ: ${totalKwh} kWh`);
console.log(`- Đơn giá: ${unitPrice} VNĐ/kWh`);
console.log(`- Doanh thu ca trực: ${totalRevenue} VNĐ`);