/**
 * Khushi Travels - Static Asset Path Helper
 * Compatible with Next.js App Router and GitHub Pages basePath (/KhushiTravels).
 */

export const BASE_PATH = process.env.NODE_ENV === "production" ? "/KhushiTravels" : "";

export function getAssetPath(path: string | undefined | null): string {
  if (!path) return "";

  // If already absolute or data URL, return as-is
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  // If already prefixed with BASE_PATH, return as-is
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}

