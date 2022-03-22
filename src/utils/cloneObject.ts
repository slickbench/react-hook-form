var structuredClone = require('realistic-structured-clone');

export default function cloneObject<T>(data: T): T {
  return structuredClone(data);
}
