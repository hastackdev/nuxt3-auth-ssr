import { H3Event } from 'h3';
import { sessionAuthConfig } from '@/server/utils/session';

export const parseSession = async (event: H3Event) => {
  try {
    const cookie = getCookie(event, sessionAuthConfig.name as string);
    const result = await unsealSession(event, sessionAuthConfig, cookie || '');

    return result;
  } catch {
    return null;
  }
};
export default defineEventHandler(async (event) => {
  event.context.auth = await parseSession(event);
});
