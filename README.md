Sử dụng các component:
- user-card:
	+ Hiển thị avatar, username, thời gian post tin, trạng thái tin, menu tùy chọn
	+ Hiển thị nút menu với các lựa chọn tùy thuộc vào username đăng nhập và username của tin
	+ Khi chọn menu nào thì trả về id và value cho trang gốc
- content-card:
	+ Hiển thị tiêu đề bản tin, dùng pipe linkify không có tham số để chuyển những nội dung text bình thường
	có chứa đường link thành đường link có thể kích vào được
	+ Hiển thị nội dung bản tin: dùng pipe linkify có tham số 'urlInfos' để chuyển link thành một mảng với các thuộc tính
    hostname, title, image, alt, content, images để hiển thị ra
	+ Xử lý để hiện nội dung và nút đọc thêm tùy thuộc vào chiều dài nội dung
	+ Khi kích vào ảnh trong tin thì trả lại id và mảng danh sách ảnh cho trang gốc
	+ Dùng pipe linkify có tham số 'link' để liệt kê tất cả link có trong nội dung tin
	+ Khi kích vào XEM LINK nào thì trả lại link cho trang gốc để mở cửa sổ trình duyệt truy cập link
- image-card:
	+ Hiển thị ảnh ra, tối đa 5 ảnh, nếu nhiều hơn thì hiển thị dấu + (số ảnh chưa hiển thị được) 
	+ Khi kích vào một ảnh thì trả id và danh sách ảnh về cho trang gốc
- social-card:
- popover-card: