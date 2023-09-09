export const useStateAuth = () => {
  const auth = useState<Record<string, any> | null>('auth', () => null);

  return auth;
};
