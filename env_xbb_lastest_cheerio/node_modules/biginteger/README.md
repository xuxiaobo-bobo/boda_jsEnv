
["Permalink to BigInteger source"](http://silentmatt.com/biginteger-docs/files/biginteger-js.html)

# BigInteger

An arbitrarily-large integer.

[BigInteger][1] objects should be considered immutable.&nbsp; None of the “built-in” methods modify **this** or their arguments.&nbsp; All properties should be considered private.

All the methods of [BigInteger][1] instances can be called “statically”.&nbsp; The static versions are convenient if you don’t already have a [BigInteger][1] object.

As an example, these calls are equivalent.

``` javascript
BigInteger(4).multiply(5); // returns BigIngeger(20);`
BigInteger.multiply(4, 5); // returns BigInteger(20);

var a = 42;
var a = BigInteger.toJSValue("0b101010"); // Not completely useless...

```

Summary

[BigInteger][2]
An arbitrarily-large integer.

[Functions][3]

[BigInteger()][1]
Convert a value to a [BigInteger][1].

[Constants][4]

[ZERO][5]
[BigInteger][1] 0.

[ONE][6]
[BigInteger][1] 1.

[M_ONE][7]
[BigInteger][1] -1.

[_0][8]
Shortcut for [ZERO][5].

[_1][9]
Shortcut for [ONE][6].

[small][10]
Array of [BigIntegers][1] from 0 to 36.

[Functions][3]

[toString][11]
Convert a [BigInteger][1] to a string.

[parse][12]
Parse a string into a [BigInteger][1].

[add][13]
Add two [BigIntegers][1].

[negate][14]
Get the additive inverse of a [BigInteger][1].

[abs][15]
Get the absolute value of a [BigInteger][1].

[subtract][16]
Subtract two [BigIntegers][1].

[next][17]
Get the next [BigInteger][1] (add one).

[prev][18]
Get the previous [BigInteger][1] (subtract one).

[compareAbs][19]
Compare the absolute value of two [BigIntegers][1].

[compare][20]
Compare two [BigIntegers][1].

[isUnit][21]
Return true iff **this** is either 1 or -1.

[multiply][22]
Multiply two [BigIntegers][1].

[square][23]
Multiply a [BigInteger][1] by itself.

[divide][24]
Divide two [BigIntegers][1].

[remainder][25]
Calculate the remainder of two [BigIntegers][1].

[divRem][26]
Calculate the integer quotient and remainder of two [BigIntegers][1].

[isEven][27]
Return true iff **this** is divisible by two.

[isOdd][28]
Return true iff **this** is not divisible by two.

[sign][29]
Get the sign of a [BigInteger][1].

[isPositive][30]
Return true iff **this** &gt; 0.

[isNegative][31]
Return true iff **this** &lt; 0.

[isZero][32]
Return true iff **this** == 0.

[exp10][33]
Multiply a [BigInteger][1] by a power of 10.

[pow][34]
Raise a [BigInteger][1] to a power.

[modPow][35]
Raise a [BigInteger][1] to a power (mod m).

[valueOf][36]
Convert a [BigInteger][1] to a native JavaScript integer.

[toJSValue][37]
Convert a [BigInteger][1] to a native JavaScript integer.

[Constants][4]

[MAX_EXP][38]
The largest exponent allowed in [pow][34] and [exp10][33] (0x7FFFFFFF or 2147483647).

### Functions

### BigInteger()
`function BigInteger(n, s)`

Convert a value to a [BigInteger][1].

Although [BigInteger()][1] is the constructor for [BigInteger][1] objects, it is best not to call it as a constructor.&nbsp; If **n** is a [BigInteger][1] object, it is simply returned as-is.&nbsp; Otherwise, [BigInteger()][1] is equivalent to [parse][12] without a radix argument.
``` javascript
var n0 = BigInteger();      // Same as <BigInteger.ZERO>
var n1 = BigInteger("123"); // Create a new <BigInteger> with value 123
var n2 = BigInteger(123);   // Create a new <BigInteger> with value 123
var n3 = BigInteger(n2);    // Return n2, unchanged
```

The constructor form only takes an array and a sign.&nbsp; **n** must be an array of numbers in little-endian order, where each digit is between 0 and 9 inclusive.&nbsp; A second parameter sets the sign: -1 for negative, +1 for positive, or 0 for zero.&nbsp; The array is **not copied and may be modified**.&nbsp; If the array contains only zeros, the sign parameter is ignored and is forced to zero.

``` javascript
new BigInteger([3,2,1], -1): create a new BigInteger with value -123
```

#### Parameters

`n`
Value to convert to a [BigInteger][1].

#### Returns

A [BigInteger][1] value.

#### See Also

[parse][12], [BigInteger][1]

### Constants

### ZERO

[BigInteger][1] 0.

### ONE

[BigInteger][1] 1.

### M_ONE

[BigInteger][1] -1.

### _0

Shortcut for [ZERO][5].

### _1

Shortcut for [ONE][6].

### small

Array of [BigIntegers][1] from 0 to 36.

These are used internally for parsing, but useful when you need a “small” [BigInteger][1].

#### See Also

[ZERO][5], [ONE][6], [_0][8], [_1][9]

## Functions

### toString

`BigInteger.prototype.toString = function(base)`

Convert a [BigInteger][1] to a string.

When **base** is greater than 10, letters are upper case.

#### Parameters

`base`
Optional base to represent the number in (default is base 10).&nbsp; Must be between 2 and 36 inclusive, or an Error will be thrown.

#### Returns

The string representation of the [BigInteger][1].

### parse

`BigInteger.parse = function(s, base)`

Parse a string into a [BigInteger][1].

**base** is optional but, if provided, must be from 2 to 36 inclusive.&nbsp; If **base** is not provided, it will be guessed based on the leading characters of **s** as follows:

  * ”0x” or “0X”: **base** = 16
  * ”0b” or “0B”: **base** = 2
  * ”0”: **base** = 8
  * else: **base** = 10

If no base is provided, or **base** is 10, the number can be in exponential form.&nbsp; For example, these are all valid:

``` javascript
BigInteger.parse("1e9");              // Same as "1000000000"
BigInteger.parse("1.234*10^3");       // Same as 1234
BigInteger.parse("56789 * 10 ** -2"); // Same as 567
```

If any characters fall outside the range defined by the radix, an exception will be thrown.

#### Parameters

`s`
The string to parse.

`base`
Optional radix (default is to guess based on **s**).

#### Returns

a [BigInteger][1] instance.

### add

`BigInteger.prototype.add = function(n)`


Add two [BigIntegers][1].

#### Parameters

`n`
The number to add to **this**.&nbsp; Will be converted to a [BigInteger][1].

#### Returns

The numbers added together.

#### See Also

[subtract][16], [multiply][22], [divide][24], [next][17]

### negate

&gt; BigInteger.prototype.negate = function()

Get the additive inverse of a [BigInteger][1].

#### Returns

A [BigInteger][1] with the same magnatude, but with the opposite sign.

#### See Also

[abs][15]

### abs

&gt; BigInteger.prototype.abs = function()

Get the absolute value of a [BigInteger][1].

#### Returns

A [BigInteger][1] with the same magnatude, but always positive (or zero).

#### See Also

[negate][14]

### subtract

`BigInteger.prototype.negate = function()`

Subtract two [BigIntegers][1].

#### Parameters

`n`
The number to subtract from **this**.&nbsp; Will be converted to a [BigInteger][1].

#### Returns

The **n** subtracted from **this**.

#### See Also

[add][13], [multiply][22], [divide][24], [prev][18]

### next

`BigInteger.prototype.next = function()`

Get the next [BigInteger][1] (add one).

#### Returns

**this** + 1.

#### See Also

[add][13], [prev][18]

### prev

`BigInteger.prototype.prev = function()`

Get the previous [BigInteger][1] (subtract one).

#### Returns

*this*
1.

#### See Also

[next][17], [subtract][16]

### compareAbs

`BigInteger.prototype.compareAbs = function(n)`

Compare the absolute value of two [BigIntegers][1].

Calling [compareAbs][19] is faster than calling [abs][15] twice, then [compare][20].

#### Parameters

`n`
The number to compare to **this**.&nbsp; Will be converted to a [BigInteger][1].

#### Returns

-1, 0, or +1 if **|this|** is less than, equal to, or greater than **|n|**.

#### See Also

[compare][20], [abs][15]

### compare

`BigInteger.prototype.compare = function(n)`


Compare two [BigIntegers][1].

#### Parameters

`n`
The number to compare to **this**.&nbsp; Will be converted to a [BigInteger][1].

#### Returns

-1, 0, or +1 if **this** is less than, equal to, or greater than **n**.

#### See Also

[compareAbs][19], [isPositive][30], [isNegative][31], [isUnit][21]

### isUnit

`BigInteger.prototype.isUnit = function()`

Return true iff **this** is either 1 or -1.

#### Returns

true if **this** compares equal to [BigInteger.ONE][6] or [BigInteger.M_ONE][7].

#### See Also

[isZero][32], [isNegative][31], [isPositive][30], [compareAbs][19], [compare][20], [BigInteger.ONE][6], [BigInteger.M_ONE][7]

### multiply

`BigInteger.prototype.multiply = function(n)`

Multiply two [BigIntegers][1].

#### Parameters

`n`
The number to multiply **this** by.&nbsp; Will be converted to a [BigInteger][1].

#### Returns

The numbers multiplied together.

#### See Also

[add][13], [subtract][16], [divide][24], [square][23]

### square

`BigInteger.prototype.square = function()`

Multiply a [BigInteger][1] by itself.

This is slightly faster than regular multiplication, since it removes the duplicated multiplcations.

#### Returns

`this.multiply(this)`

#### See Also

[multiply][22]

### divide

`BigInteger.prototype.divide = function(n)`

Divide two [BigIntegers][1].

[divide][24] throws an exception if **n** is zero.

#### Parameters

`n`
The number to divide **this** by.&nbsp; Will be converted to a [BigInteger][1].

#### Returns

The **this** / **n**, truncated to an integer.

#### See Also

[add][13], [subtract][16], [multiply][22], [divRem][26], [remainder][25]

### remainder

`BigInteger.prototype.remainder = function(n)`


Calculate the remainder of two [BigIntegers][1].

[remainder][25] throws an exception if **n** is zero.

#### Parameters

`n`
The remainder after **this** is divided **this** by **n**.&nbsp; Will be converted to a [BigInteger][1].

#### Returns

**this** % **n**.

#### See Also

[divRem][26], [divide][24]

### divRem

`BigInteger.prototype.divRem = function(n)`

Calculate the integer quotient and remainder of two [BigIntegers][1].

[divRem][26] throws an exception if **n** is zero.

#### Parameters

`n`
The number to divide **this** by.&nbsp; Will be converted to a [BigInteger][1].

#### Returns

A two-element array containing the quotient and the remainder.

`a.divRem(b)`

is exactly equivalent to

`[a.divide(b), a.remainder(b)]`

except it is faster, because they are calculated at the same time.

#### See Also

[divide][24], [remainder][25]

### isEven

`BigInteger.prototype.isEven = function()`

Return true iff **this** is divisible by two.

Note that [BigInteger.ZERO][5] is even.

#### Returns

true if **this** is even, false otherwise.

#### See Also

[isOdd][28]

### isOdd

`BigInteger.prototype.isOdd = function()`

Return true iff **this** is not divisible by two.

#### Returns

true if **this** is odd, false otherwise.

#### See Also

[isEven][27]

### sign

`BigInteger.prototype.sign = function()`

Get the sign of a [BigInteger][1].

#### Returns

  * -1 if **this** &lt; 0
  * 0 if **this** == 0
  * +1 if **this** &gt; 0

#### See Also

[isZero][32], [isPositive][30], [isNegative][31], [compare][20], [BigInteger.ZERO][5]

### isPositive

`BigInteger.prototype.isPositive = function()`

Return true iff **this** &gt; 0.

#### Returns

true if **this**.compare([BigInteger.ZERO][5]) == 1.

#### See Also

[sign][29], [isZero][32], [isNegative][31], [isUnit][21], [compare][20], [BigInteger.ZERO][5]

### isNegative

`BigInteger.prototype.isNegative = function()`

Return true iff **this** &lt; 0.

#### Returns

true if **this**.compare([BigInteger.ZERO][5]) == -1.

#### See Also

[sign][29], [isPositive][30], [isZero][32], [isUnit][21], [compare][20], [BigInteger.ZERO][5]

### isZero

`BigInteger.prototype.isZero = function()`

Return true iff **this** == 0.

#### Returns

true if **this**.compare([BigInteger.ZERO][5]) == 0.

#### See Also

[sign][29], [isPositive][30], [isNegative][31], [isUnit][21], [BigInteger.ZERO][5]

### exp10

`BigInteger.prototype.exp10 = function(n)`

Multiply a [BigInteger][1] by a power of 10.

This is equivalent to, but faster than

``` javascript
 if (n >= 0) {
    return this.multiply(BigInteger("1e" + n));
 } else { // n
    return this.divide(BigInteger("1e" + -n));
 }
 ```

#### Parameters

n
The power of 10 to multiply **this** by.&nbsp; **n** is converted to a javascipt number and must be no greater than [BigInteger.MAX_EXP][38] (0x7FFFFFFF), or an exception will be thrown.

#### Returns

**this** * (10 ** **n**), truncated to an integer if necessary.

#### See Also

[pow][34], [multiply][22]

### pow

`BigInteger.prototype.pow = function(n)`


Raise a [BigInteger][1] to a power.

In this implementation, 0**0 is 1.

#### Parameters

n
The exponent to raise **this** by.&nbsp; **n** must be no greater than [BigInteger.MAX_EXP][38] (0x7FFFFFFF), or an exception will be thrown.

#### Returns

**this** raised to the **nth** power.

#### See Also

[modPow][35]

### modPow

`BigInteger.prototype.modPow = function(exponent, modulus)`

Raise a [BigInteger][1] to a power (mod m).

Because it is reduced by a modulus, [modPow][35] is not limited by [BigInteger.MAX_EXP][38] like [pow][34].

#### Parameters

exponent
The exponent to raise **this** by.&nbsp; Must be positive.

modulus
The modulus.

#### Returns

**this** ^ **exponent** (mod **modulus**).

#### See Also

[pow][34],

### valueOf

` BigInteger.prototype.valueOf = function()`

Convert a [BigInteger][1] to a native JavaScript integer.

This is called automatically by JavaScipt to convert a [BigInteger][1] to a native value.

#### Returns

`parseInt(this.toString(), 10)`

#### See Also

[toString][11], [toJSValue][37]

### toJSValue

`BigInteger.prototype.toJSValue = function()`

Convert a [BigInteger][1] to a native JavaScript integer.

This is the same as valueOf, but more explicitly named.

#### Returns

` parseInt(this.toString(), 10)`

#### See Also

[toString][11], [valueOf][36]

### Constants

### MAX_EXP

The largest exponent allowed in [pow][34] and [exp10][33] (0x7FFFFFFF or 2147483647).


   [1]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.BigInteger
   [2]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger
   [3]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.Functions
   [4]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.Constants
   [5]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.ZERO
   [6]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.ONE
   [7]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.M_ONE
   [8]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger._0
   [9]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger._1
   [10]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.small
   [11]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.toString
   [12]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.parse
   [13]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.add
   [14]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.negate
   [15]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.abs
   [16]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.subtract
   [17]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.next
   [18]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.prev
   [19]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.compareAbs
   [20]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.compare
   [21]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.isUnit
   [22]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.multiply
   [23]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.square
   [24]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.divide
   [25]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.remainder
   [26]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.divRem
   [27]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.isEven
   [28]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.isOdd
   [29]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.sign
   [30]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.isPositive
   [31]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.isNegative
   [32]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.isZero
   [33]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.exp10
   [34]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.pow
   [35]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.modPow
   [36]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.valueOf
   [37]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.toJSValue
   [38]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html#BigInteger.MAX_EXP
   [39]: http://www.naturaldocs.org
   [40]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html/index/General.html
   [41]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html/index/Classes.html
   [42]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html/index/Constants.html
   [43]: http://silentmatt.com/biginteger-docs/files/biginteger-js.html/index/Functions.html

