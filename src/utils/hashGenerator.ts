export function newHash() {
  const chars = "abcdefghijklmnopqrstuvwz0123456789";
  let hash = "";
  for (let i = 0; i < 16; i++) {
    hash += chars.at(Math.floor(Math.random() * chars.length));
  }
  return hash;
}
