import request from 'axios';
import { store } from '../store';
import { errorData } from '../store/store-error-data/store-error-data';
import { clearErrorAction } from '../store/api-actions';
import { ErrorType } from '../types/error';
import { Httpcode } from '../const';

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
      case Httpcode.BAD_REQUEST:
        handleError(response.data.error);
        break;
      case Httpcode.UNAUTHORIZED:
        handleError(response.data.error);
        break;
      case Httpcode.NOT_FOUND:
        handleError(response.data.error);
        break;
    }
  }
};
