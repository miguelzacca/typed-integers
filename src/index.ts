export type i8 = number & { readonly i8: true }
export type i16 = number & { readonly i16: true }
export type i32 = number & { readonly i32: true }

export type u8 = number & { readonly u8: true }
export type u16 = number & { readonly u16: true }
export type u32 = number & { readonly u32: true }

export type f32 = number & { readonly f32: true }
export type f64 = number & { readonly f64: true }

export class Uint8 extends Number {
  constructor(value: number) {
    super((value | 0) & 0xff)
  }

  toType(): u8 {
    return this.valueOf() as u8
  }
}

export class Uint16 extends Number {
  constructor(value: number) {
    super((value | 0) & 0xffff)
  }

  toType(): u16 {
    return this.valueOf() as u16
  }
}

export class Uint32 extends Number {
  constructor(value: number) {
    super(value >>> 0)
  }

  toType(): u32 {
    return this.valueOf() as u32
  }
}

export class Int8 extends Number {
  constructor(value: number) {
    super(((value | 0) << 24) >> 24)
  }

  toType(): i8 {
    return this.valueOf() as i8
  }
}

export class Int16 extends Number {
  constructor(value: number) {
    super(((value | 0) << 16) >> 16)
  }

  toType(): i16 {
    return this.valueOf() as i16
  }
}

export class Int32 extends Number {
  constructor(value: number) {
    super(value | 0)
  }

  toType(): i32 {
    return this.valueOf() as i32
  }
}

export class Float32 extends Number {
  constructor(value: number) {
    super(new Float32Array([value])[0])
  }

  toType(): f32 {
    return this.valueOf() as f32
  }
}

export class Float64 extends Number {
  constructor(value: number) {
    super(new Float64Array([value])[0])
  }

  toType(): f64 {
    return this.valueOf() as f64
  }
}

const TypedArrays = {
  Int8Array,
  Int16Array,
  Int32Array,
  Uint8Array,
  Uint16Array,
  Uint32Array,
  Float32Array,
  Float64Array,
} as const

export function toTypedArray<
  T extends Number,
  K extends keyof typeof TypedArrays,
>(values: T[], type: K): InstanceType<(typeof TypedArrays)[K]> {
  const noTypedValues = values.map((v) => v.valueOf())
  return new TypedArrays[type](noTypedValues) as InstanceType<
    (typeof TypedArrays)[K]
  >
}

const TypedIntegers = {
  Int8,
  Int16,
  Int32,
  Uint8,
  Uint16,
  Uint32,
  Float32,
  Float64,
} as const

export function toArray<K extends keyof typeof TypedIntegers>(
  values: number[],
  type: K,
): InstanceType<(typeof TypedIntegers)[K]>[] {
  return values.map((v) => new TypedIntegers[type](v)) as InstanceType<
    (typeof TypedIntegers)[K]
  >[]
}
