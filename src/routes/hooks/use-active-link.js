export function useActiveLink(path, activeSection = 'home') {
  return path === `/#${activeSection}`;
}