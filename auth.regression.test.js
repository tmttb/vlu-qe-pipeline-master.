const { login } = require('./auth');

describe('Regression Test - Authentication Edge Cases & Exception Handling', () => {
  test('Đăng nhập thất bại khi mật khẩu sai -> trả về false', () => {
    const result = login('admin', 'wrong_password');
    expect(result).toBe(false);
  });

  test('Ngoại lệ: Ném ra lỗi khi username để rỗng', () => {
    expect(() => login('', '123')).toThrow('Username không được để trống');
    expect(() => login('   ', '123')).toThrow('Username không được để trống');
  });

  test('Ngoại lệ: Ném ra lỗi khi mật khẩu chứa ký tự đặc biệt', () => {
    expect(() => login('admin', '123@#$')).toThrow('Mật khẩu chứa ký tự đặc biệt không hợp lệ');
  });

  test('Ngoại lệ: Ném ra lỗi khi đăng nhập vào tài khoản bị khóa', () => {
    expect(() => login('locked_user', '123')).toThrow('Tài khoản đã bị khóa');
  });

  test('Đăng nhập thất bại khi tài khoản không tồn tại -> trả về false', () => {
    const result = login('non_existing_user', '123');
    expect(result).toBe(false);
  });
});
