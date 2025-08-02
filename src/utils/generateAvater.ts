// utils/generateAvatar.ts
export function generateAvatar(name: string) {
  const encodedName = encodeURIComponent(name);
  return `https://ui-avatars.com/api/?name=${encodedName}&background=FECACA&color=B91C1C&size=96&rounded=true&format=png`;
}
