export const PATHS = {
  HOME: '/',
  FAVOURITES: '/favourites',
  DETAILS: (id: string) => `/${id}`,
} as const;
