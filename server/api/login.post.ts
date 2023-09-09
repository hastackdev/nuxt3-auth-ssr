import { useSessionAuth } from '@/server/utils/session';
interface Login {
  username: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<Login>(event);
    
    if (body.username !== 'john' && body.password !== 'password') {
      throw createError({
        statusCode: 400,
        statusMessage: 'User is not registered'
      });
    }

    const session = await useSessionAuth(event);
    await session.update({
      name: 'john',
      email: 'john@example.com'
    });

    return {
      success: true
    };
  } catch (err) {
    console.log(err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong'
    });
  }
});
