export interface RequestHandler<TRequest, TResponse> {
  handle(data: TRequest): TResponse;
}
