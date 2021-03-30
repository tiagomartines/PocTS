export interface IRequestHandler<TRequest, TResponse> {
  handle(data: TRequest): TResponse;
}
