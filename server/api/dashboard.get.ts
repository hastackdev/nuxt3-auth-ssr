import { authHandler } from '@/server/utils/handlers';

export default authHandler(async (event) => {
  try {
    return {
      result: 'protected route'
    };
  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
});
