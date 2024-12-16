# typed-integers

```bash
npm i typed-integers
```

## Usage

**Utility types, for readability and support only. Type conversion required.**

- `i8`
- `i16`
- `i32`
- `u8`
- `u16`
- `u32`
- `f32`
- `f64`

Example:

```ts
const num1 = <u8>10
const num2 = 2000 as u16
```

**Classes with real implementation**

- `Int8`
- `Int16`
- `Int32`
- `Uint8`
- `Uint16`
- `Uint32`
- `Float32`
- `Float64`

Example:

```ts
const num1 = new Uint8(-10) // 246
const num2: u8 = num1.toType()
const num2: number = num1.valueOf()
```

**Utils**

- `toTypedArray`
- `toArray`

API:

- `toTypedArray(values, type)`
- `toArray(values, type)`

Example:

```ts
const nums: Uint8[] = toArray([10, 20, 30], 'Uint8')
const typed: Uint8Array = toTypedArray(nums, 'Uint8Array')
```
