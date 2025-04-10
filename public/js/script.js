function validateForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Vui lòng nhập đầy đủ Username và Mật khẩu.");
        return false;
    }

    alert("Đăng nhập thành công! (Giả lập)");
    return true;
}

function validateRegisterForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;
    const email = document.getElementById("email").value.trim();

    if (!username || !password || !repassword || !email) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return false;
    }

    if (password !== repassword) {
        alert("Mật khẩu nhập lại không khớp.");
        return false;
    }

    alert("Đăng ký thành công! (Giả lập)");
    return true;
}

function validateUpdateForm() {
    const password = document.getElementById("password").value;
    const repassword = document.getElementById("repassword").value;

    if (password !== repassword) {
        alert("Mật khẩu nhập lại không khớp.");
        return false;
    }

    alert("Cập nhật thông tin thành công! (Giả lập)");
    return true;
}
