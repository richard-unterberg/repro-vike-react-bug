const getSystemTheme = (): 'dark' | 'light' => {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
  return prefersDarkScheme.matches ? 'dark' : 'light'
}

export default getSystemTheme
