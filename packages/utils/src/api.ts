import { ApiError, ApiResponse } from '@cynalitx/types';

const randomTraceId = (): string => {
  const maybeCrypto: { randomUUID?: () => string } | undefined =
    typeof globalThis !== 'undefined'
      ? (globalThis as unknown as { crypto?: { randomUUID?: () => string } }).crypto
      : undefined;
  if (maybeCrypto?.randomUUID) return maybeCrypto.randomUUID();
  return `trace-${Math.random().toString(36).slice(2, 10)}`;
};

export const successResponse = <T>(data: T): ApiResponse<T> => ({
  success: true,
  data,
});

export const errorResponse = (
  message: string,
  code = 'bad_request',
  details?: string[],
): ApiResponse<never> => {
  const error: ApiError = {
    code,
    message,
    details,
    traceId: randomTraceId(),
  };

  return {
    success: false,
    error,
  };
};
