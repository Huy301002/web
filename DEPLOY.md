# Hướng Dẫn Deploy Website Xuất Khẩu Lao Động

Website này là static website (HTML/CSS/JS), có thể deploy lên nhiều nền tảng miễn phí.

## 🚀 Phương Án 1: Vercel (Khuyến Nghị - Dễ Nhất)

### Cách 1: Deploy qua Web
1. Truy cập: https://vercel.com
2. Đăng ký/Đăng nhập (có thể dùng GitHub account)
3. Click "Add New Project"
4. Kéo thả thư mục `dairy-website-template` vào
5. Click "Deploy"
6. Xong! Website sẽ có URL dạng: `https://your-project.vercel.app`

### Cách 2: Deploy qua CLI
```bash
# Cài đặt Vercel CLI
npm install -g vercel

# Di chuyển vào thư mục project
cd dairy-website-template

# Deploy
vercel

# Làm theo hướng dẫn trên terminal
# Website sẽ được deploy tại: https://your-project.vercel.app
```

---

## 🌐 Phương Án 2: Netlify

### Cách 1: Deploy qua Web (Drag & Drop)
1. Truy cập: https://netlify.com
2. Đăng ký/Đăng nhập
3. Kéo thả thư mục `dairy-website-template` vào Netlify Drop
4. Xong! Website sẽ có URL dạng: `https://random-name.netlify.app`

### Cách 2: Deploy qua CLI
```bash
# Cài đặt Netlify CLI
npm install -g netlify-cli

# Di chuyển vào thư mục project
cd dairy-website-template

# Deploy
netlify deploy

# Làm theo hướng dẫn
# Website sẽ có URL: https://your-site.netlify.app
```

---

## 📦 Phương Án 3: GitHub Pages

### Bước 1: Tạo Repository trên GitHub
1. Truy cập: https://github.com
2. Tạo repository mới (ví dụ: `globalwork-website`)
3. Upload code lên repository

### Bước 2: Cấu hình GitHub Pages
1. Vào repository → Settings
2. Scroll xuống phần "Pages"
3. Source: chọn "Deploy from a branch"
4. Branch: chọn `main` hoặc `master`
5. Folder: chọn `/ (root)`
6. Click "Save"

### Bước 3: Truy cập Website
- URL sẽ là: `https://username.github.io/repository-name`
- Ví dụ: `https://yourusername.github.io/globalwork-website`

---

## 🔥 Phương Án 4: Firebase Hosting

```bash
# Cài đặt Firebase CLI
npm install -g firebase-tools

# Login vào Firebase
firebase login

# Di chuyển vào thư mục project
cd dairy-website-template

# Khởi tạo Firebase project
firebase init hosting

# Chọn:
# - Use an existing project (hoặc tạo mới)
# - Public directory: . (dấu chấm)
# - Single-page app: No
# - Set up automatic builds: No

# Deploy
firebase deploy

# Website sẽ có URL: https://your-project.web.app
```

---

## ⚡ Phương Án 5: Surge.sh (Nhanh Nhất)

```bash
# Cài đặt Surge
npm install -g surge

# Di chuyển vào thư mục project
cd dairy-website-template

# Deploy
surge

# Làm theo hướng dẫn:
# - Nhập email
# - Nhập password (tạo mới nếu chưa có)
# - Chọn domain (hoặc để random)
# Website sẽ có URL: https://your-domain.surge.sh
```

---

## 📝 Lưu Ý Quan Trọng

1. **Đảm bảo tất cả file trong thư mục `dairy-website-template` được upload**
2. **Kiểm tra đường dẫn hình ảnh và CSS/JS đúng**
3. **Test website sau khi deploy**

---

## 🎯 So Sánh Các Phương Án

| Phương Án | Độ Khó | Miễn Phí | Tốc Độ | Khuyến Nghị |
|-----------|--------|---------|--------|-------------|
| Vercel | ⭐ Dễ | ✅ | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐ Dễ | ✅ | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ |
| GitHub Pages | ⭐⭐ Trung bình | ✅ | ⚡⚡ | ⭐⭐⭐⭐ |
| Firebase | ⭐⭐⭐ Khó hơn | ✅ | ⚡⚡⚡ | ⭐⭐⭐ |
| Surge | ⭐ Dễ | ✅ | ⚡⚡ | ⭐⭐⭐ |

---

## 💡 Khuyến Nghị

**Cho người mới bắt đầu:** Dùng **Vercel** hoặc **Netlify** (drag & drop)

**Cho người có GitHub:** Dùng **GitHub Pages** (tích hợp tốt với Git)

**Cho người muốn nhanh:** Dùng **Surge.sh**

---

## 🔧 Troubleshooting

### Lỗi: 404 khi truy cập các trang con
- **Giải pháp:** Đảm bảo file `_redirects` hoặc `netlify.toml` đã được tạo

### Lỗi: Hình ảnh không hiển thị
- **Giải pháp:** Kiểm tra đường dẫn hình ảnh trong HTML (phải là relative path)

### Lỗi: CSS/JS không load
- **Giải pháp:** Kiểm tra đường dẫn trong HTML, đảm bảo tất cả file được upload

---

## 📞 Hỗ Trợ

Nếu gặp vấn đề, hãy kiểm tra:
1. Console của trình duyệt (F12)
2. Network tab để xem file nào bị lỗi
3. Đảm bảo tất cả file được upload đầy đủ

