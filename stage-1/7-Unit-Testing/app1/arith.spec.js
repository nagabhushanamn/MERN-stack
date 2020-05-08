


const arith = require('./arith')

/*
   unit-testing   = AAA
    => Arrange
    => Act
    => Assert
*/

// Arrange
test("1+2=3", () => {
    const actual = arith.add(1, 2) // Act
    const expected = 3
    expect(actual).toBe(expected) // Assert
})

test("1+2= not to be 1", () => {
    const actual = arith.add(1, 2) // Act
    const expected = 1
    expect(actual).not.toBe(expected) // Assert
})

test("1-2=-1", () => {
    const actual = arith.sub(1, 2) // Act
    const expected = -1
    expect(actual).toBe(expected) // Assert
})