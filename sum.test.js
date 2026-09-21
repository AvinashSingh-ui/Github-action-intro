const sum=require('./sum.js');

describe("test for sum fnx",()=>{
test("adds 2+2 is equal to 4",()=>{
    expect(sum(2,2)).toBe(4);
});
test("adds -5-5 is equal to -10",()=>{
    expect(sum(-5,-5)).toBe(-10);
});
});