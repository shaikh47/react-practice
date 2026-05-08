interface MiddlewareContext {
  request: Request;
}
type NextFunction = () => Promise<unknown>;

const loggingMiddleware = async (
  { request }: MiddlewareContext,
  next: NextFunction,
): Promise<void> => {
  const url = new URL(request.url);

  console.log(`Starting navigation: ${url.pathname}${url.search}`);
  const start = performance.now();

  await next();

  const duration = performance.now() - start;
  console.log(`Navigation completed in ${duration.toFixed(2)}ms`);
};

export default loggingMiddleware;
