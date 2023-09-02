const UserController = require('../../controllers/userController');
const assert = require('assert');

describe('List of user', () => {
    it('should return a response with list of user', () => {
      let result
      UserController.getUser({}, {
        json: (data) => {
          result = data;
          return data;
        }
      });
      assert.deepStrictEqual(result.message, "user retrieved!");
    });
  });
  describe('List of user', () => {
    it('should return a response with list of user', () => {
      let result;
  
      // Simulasikan pengambilan daftar user yang mengalami masalah
      const mockError = new Error('Error retrieving books');
      const mockGetUser = jest.spyOn(UserController, 'getUser');
      mockGetBooks.mockRejectedValue(mockError);
  
      // Panggil fungsi untuk mendapatkan daftar user
      return UserController.getUser({}, {
        json: (data) => {
          result = data;
          return = data;
        }
      }).catch((error) => {
        expect(error).toBe(mockError);
      });
    });
  }); 
  describe('Adding a user', () => {
    it ('should add a user', () => {
      let result;
        UserController.addNewUser({body: {nama: "bella", password: "bella1010"}}, {
          json: (data) => {
            result = data;
            return data;
          }
        });
      assert.deepStrictEqual(result.message, "User added!");
    });
  });
  describe('Adding a user', () => {
    it('should add a user', () => {
      let result;
      // Mengasumsikan bahwa ada fungsi UserController.addNewUser yang mengelola penambahan user
      // Di sini, kita akan mensimulasikan sebuah kesalahan dengan mengembalikan pesan kesalahan.
      const req = { body: { nama: "salimen", password: "" } };
      const res = {
        json: (data) => {
          result = data;
          return data;
        }
      };
  
      // Memanggil fungsi UserController.addNewUser
      UserController.addNewUser(req, res);
  
      // Kita akan mengasumsikan bahwa fungsi ini mengembalikan kesalahan dengan pesan berikut.
      assert.deepStrictEqual(result.error, "user already exists!");
    });
  });
  describe('Updating a user', () => {
    it ('should update a user', () => {
      let result;
        UserController.updateExistingUser({params: {id: 1}, body: {nama: "parjo", password: "parjo99"}}, {
          json: (data) => {
            result = data;
            return data;
          }
        });
      assert.deepStrictEqual(result.message, "User updated!");
    });
  });
  describe('Updating a user', () => {
  it('should handle update failure gracefully', () => {
    let result;
    // Sebagai contoh, kita akan mengasumsikan bahwa UserController.updateExistingUser
    // akan mengembalikan objek dengan property 'error' ketika update gagal.
    UserController.updateExistingUser(
      { params: { id: 2 }, body: { nama: "parjo", password: "parjo99" } },
      {
        json: (data) => {
          result = data;
          return data;
        }
      }
    );
    assert.deepStrictEqual(result.error, "Update failed!");
  });
}); 
describe('Removing a user', () => {
    it ('should remove a user', () => {
      let result;
        UserController.removeUser({params: {id: 1}}, {
          json: (data) => {
            result = data;
            return data;
          }
        });
      assert.deepStrictEqual(result.message, "User deleted!");
    });
  });
  describe('Removing a user', () => {
  it('should handle removal failure gracefully', () => {
    let result;
    // Sebagai contoh, kita akan mengasumsikan bahwa UserController.removeUser
    // akan mengembalikan objek dengan properti 'error' ketika penghapusan gagal.
    UserController.removeUser(
      { params: { id: 2 } },
      {
        json: (data) => {
          result = data;
          return data;
        }
      }
    );
    assert.deepStrictEqual(result.error, "Deletion failed!");
  });
}); 