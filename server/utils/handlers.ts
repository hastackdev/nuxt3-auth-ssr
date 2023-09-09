import { createApp, type EventHandler, type H3Event } from 'h3';

import { parseSession } from '@/server/middleware/index';

const eventHandlers = (...handlers: EventHandler[]) => {
  return createApp().use(handlers).handler;
};

const authRoute = defineEventHandler(async (event) => {
  const sess = await parseSession(event);

  if (!sess) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Forbidden'
    });
  }
});

export const authHandler = (handler: EventHandler) => eventHandlers(authRoute, defineEventHandler(handler));
