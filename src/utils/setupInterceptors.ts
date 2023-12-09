import {
  isAxiosError,
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export const logOnDev = (message: string) => {
  if (process.env.MODE === "development") {
    console.log(message);
  }
};

// const onLoading = async (type: string) => {
//   const baseStorage = useBaseStore();
//   const { startLoading, stopLoading, cancelLoading } = baseStorage;
//   switch (type) {
//     case "request":
//       startLoading();
//       break;
//     case "response":
//       stopLoading();
//       break;
//     case "error":
//       cancelLoading();
//       break;
//     default:
//       break;
//   }
//   return Promise.resolve();
// };

const onError = async (message: string) => {
  console.log(message);
  // const baseStore = useBaseStore();
  // const { setAlertMessage } = baseStore;
  // setAlertMessage({
  //   type: "error",
  //   message,
  // });
  // return Promise.resolve();
};

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const { method, url } = config;

  logOnDev(`[API] ${method?.toUpperCase()} ${url} | Request`);
  // onLoading("request");

  if (method === "get") {
    config.timeout = 15000;
  }

  return config;
};

const onResponse = (response: AxiosResponse) => {
  const { method, url } = response.config;
  const { status } = response;

  logOnDev(`[API ${method?.toUpperCase()} ${url} | Resopnse ${status}]`);
  return response;
};
const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (isAxiosError(error)) {
    const { message } = error;
    const { method, url } = error.config as InternalAxiosRequestConfig;
    const { status, statusText } = error.response as AxiosResponse;

    logOnDev(
      `[API] ${method?.toUpperCase()} ${url} | Error ${status} ${statusText} | ${message}`
    );

    switch (status) {
      case 401: {
        onError("로그인이 필요합니다.");
        break;
      }
      case 403: {
        onError("권한이 필요합니다.");
        break;
      }
      case 404: {
        onError("잘못된 요청입니다.");
        break;
      }
      case 500: {
        onError("서버에 문제가 발생했습니다.");
        break;
      }
      default: {
        onError("알 수 없는 오류가 발생했습니다.");
        break;
      }
    }
  } else {
    logOnDev(`[API | Error ${error.message}]`);
    onError(error.message as string);
  }

  // onLoading("error");
  return Promise.reject(error);
};

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest);
  instance.interceptors.response.use(onResponse, onErrorResponse);
  return instance;
};

export { setupInterceptors };
