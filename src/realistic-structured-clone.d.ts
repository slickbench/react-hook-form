declare module 'realistic-structured-clone' {
  export default function realisticStructuredClone<T>(
    value: T,
    options?: StructuredSerializeOptions,
  ): T;
}
