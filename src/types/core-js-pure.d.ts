declare module 'core-js-pure/actual/structured-clone' {
  export default function structuredClone<T>(
    value: T,
    options?: StructuredSerializeOptions,
  ): T;
}
