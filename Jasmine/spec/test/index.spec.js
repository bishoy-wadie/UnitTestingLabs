const User = require("../../jasmineLab");

describe("Testing User", () => {
  let user;
  beforeAll(() => {
    user = new User("Bishoy", "bishoy123456");
  });

  describe("addToCart", () => {
    it("Should have nothing in cart, if nothing is added yet", () => {
      expect(user.cart).toHaveSize(0);
      // expect(user.cart).toBeNull();
    });
    it("Should have one item, after adding one", () => {
      const item = {
        name: "iphone",
        price: 100,
      };
      user.addToCart(item);
      expect(user.cart).toHaveSize(1);
      expect(user.cart[0].price).toEqual(100);
    });
  });

  describe("calculateTotalCartPrice", () => {
    it("Should return total of items price", () => {
      //check  total price integer
      expect(user.calculateTotalCartPrice()).not.toBeNaN;
      //check  total price = 100
      expect(user.calculateTotalCartPrice()).toEqual(100);
    });
  });

  it("checkout should call goToVerifyPage , returnBack and isVerify from paymentModel", function () {
    let fakeObj = jasmine.createSpyObj([
      "isVerify",
      "goToVerifyPage",
      "returnBack",
    ]);
    // fakeObj.isVerify.and.callFake(function () {
    //   return true;
    // });
    let fakeFunction = jasmine.createSpy("deliveryOrder");
    user.checkout(fakeObj, fakeFunction);
    expect(fakeObj.goToVerifyPage).toHaveBeenCalled();
    expect(fakeObj.returnBack).toHaveBeenCalled();
    expect(fakeObj.isVerify).toHaveBeenCalled();
  });
});
