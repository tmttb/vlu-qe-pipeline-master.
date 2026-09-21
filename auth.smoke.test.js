const { login } = require('./auth');

describe('Smoke Test - Authentication Flow', () => {
  test('Đăng nhập thành công với tài khoản chính xác (admin/123) -> trả về true', () => {
    const result = login('admin', '123');
    expect(result).toBe(true);
  });
});
