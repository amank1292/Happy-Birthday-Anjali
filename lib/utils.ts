/**
 * Helper to resolve asset paths for both local preview and GitHub Pages subdirectory deployment
 */
export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  if (basePath) {
    return `${basePath}${cleanPath}`;
  }

  return cleanPath;
}
