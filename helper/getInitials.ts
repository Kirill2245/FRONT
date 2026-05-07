export function getInitials(
  name: string, 
  maxInitials: number = 2  // Можно ограничить количество инициалов
): string {
  if (!name || name.trim().length === 0) {
    return '';
  }
  
  const initials = name
    .trim()
    .split(/\s+/)
    .map(part => part.charAt(0).toUpperCase())
    .join('');
  
  return initials.slice(0, maxInitials);
}
