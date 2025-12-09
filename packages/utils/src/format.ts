/** Normalize whitespace and trim edges */
export const normalizeText = (input: string): string => input.trim().replace(/\s+/g, ' ');

export const slugify = (input: string): string =>
  normalizeText(input)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const formatPhone = (input: string): string => {
  const digits = input.replace(/\D/g, '');
  if (digits.length < 10) return digits;
  return `+${digits.slice(0, digits.length - 10)} ${digits.slice(-10, -7)}-${digits.slice(-7, -4)}-${digits.slice(-4)}`.replace(
    /\s+/g,
    ' ',
  );
};

export const maskEmail = (email: string): string => {
  const [user, domain] = email.split('@');
  if (!domain) return email;
  const safeUser = user.length <= 2 ? `${user[0]}*` : `${user.slice(0, 2)}***`;
  return `${safeUser}@${domain}`;
};

export const truncate = (text: string, length = 140): string =>
  text.length > length ? `${text.slice(0, length - 3)}...` : text;
