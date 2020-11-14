describe("whatCanIDrink", function() {
    beforeEach(function(){
        drink = new whatCanIDrink;
    })
    

    describe("Age less than", function() {
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            age < 0;
            expect(age.value).toBe("should return Sorry. I can’t tell what drink because that age is incorrect!");
        });

        it("should return Drink Toddy", function() {
            age < 14;
            expect(age.value).toBe("Drink Toddy");
        });

          it("should return Drink Coke", function() {
            age < 18;
            expect(age.value).toBe("Drink Coke");
        });

        it("should return Drink Beer", function() {
            age < 21;
            expect(age.value).toBe("Drink Beer");
        });

        it("should return Drink Whisky", function() {
            age < 130;
            expect(age.value).toBe("Drink Whisky");
        });

        it("should return Sorry. I cant tell what drink because that age is incorrect!", function() {
            spyOn(window, "alert");
            age.value(NaN)
            expect(window.alert).toHaveBeenCalledWith("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});