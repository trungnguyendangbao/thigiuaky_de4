# Hiển thị Thời Gian - Ứng dụng Capacitor

## Giới thiệu
Ứng dụng này hiển thị thời gian hiện tại của người dùng khi nhấn nút, đồng thời cung cấp các tính năng:
- Hiển thị thời gian hiện tại (giờ, phút, giây).
- Hiển thị thông báo thời gian.
- Chia sẻ thời gian.
- Mô phỏng chụp màn hình.

## Cài đặt và chạy ứng dụng

### 1. Cài đặt Capacitor
Nếu bạn chưa có Capacitor, hãy cài đặt nó:
```sh
npm install -g @capacitor/cli
```

### 2. Khởi tạo dự án Capacitor (nếu chưa có)
```sh
npx cap init my-app "com.example.myapp"
```

### 3. Cài đặt các gói phụ thuộc
```sh
npm install
```

### 4. Đồng bộ hóa với nền tảng di động
```sh
npx cap sync android
```

### 5. Chạy trên trình duyệt
```sh
npm start
```

### 6. Chạy trên thiết bị hoặc giả lập Android
```sh
npx cap run android
```

## Cấu trúc thư mục
```
my-app/
│── src/
│   ├── index.html  # Giao diện ứng dụng
│   ├── js/
│   │   ├── app.js  # Xử lý chức năng chính
│── README.md  # Hướng dẫn sử dụng
│── package.json  # Cấu hình dự án
│── vite.config.js  # Cấu hình Vite
```


