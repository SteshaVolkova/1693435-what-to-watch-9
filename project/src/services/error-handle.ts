import request from 'axios';
import { store } from '../store';
import { errorData } from '../store/store-error-data/store-error-data';
import { clearErrorAction } from '../store/api-actions';
import { ErrorType } from '../types/error';
import { HttpCode } from '../const';
import { serverStatus } from '../store/server-status/server-status';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(errorData(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        handleError(response.data.error);
        break;
      case HttpCode.Unauthorized:
        handleError(response.data.error);
        break;
      case HttpCode.NotFound:
        store.dispatch(serverStatus(false));
        break;
    }
  }
};
