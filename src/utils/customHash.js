
const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function generateCustomHash(input) {
  if (typeof input !== "string") {
    throw new Error("Input must be a string");
  }

  if (input.length === 0) {
    return "";
  }

  let hash1 = 5381;
  let hash2 = 52711;

  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);

    hash1 = Math.imul(hash1 ^ code, 33);
    hash2 = Math.imul(hash2 ^ code, 31);
  }

  let seed = (hash1 ^ hash2 ^ input.length) >>> 0;

  let result = "";

  for (let i = 0; i < 9; i++) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;

    result += CHARACTERS[seed % CHARACTERS.length];
  }

  return result;
}
