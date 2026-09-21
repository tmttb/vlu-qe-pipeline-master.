/**
 * Hàm xử lý đăng nhập người dùng
 * @param {string} username 
 * @param {string} password 
 * @returns đổi {boolean}
 */
function login(username, password) {
  // Kiểm tra username rỗng
  if (!username || username.trim() === '') {
    throw new Error('Username không được để trống');
  }

  // Kiểm tra tài khoản bị khóa
  if (username === 'locked_user') {
    throw new Error('Tài khoản đã bị khóa');
  }

  // Kiểm tra mật khẩu chứa ký tự đặc biệt không cho phép
  const specialCharRegex = /[!@#$%^&*(),?":{}|<>]/;
  if (specialCharRegex.test(password)) {
    throw new Error('Mật khẩu chứa ký tự đặc biệt không hợp lệ');
  }

  // Kiểm tra thông tin đăng nhập đúng
  if (username === 'admin' && password === '9999') {
    return true;
  }

  // Trường hợp mật khẩu sai hoặc username không đúng
  return false;
}

module.exports = { login };
