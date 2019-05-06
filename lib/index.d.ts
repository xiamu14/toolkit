interface Iparams {
  method: string;
  url: string;
  headers?: {
    [key: string]: any;
    'content-type'?: string;
  };
  data: object;
}
declare function axiosParamsConvert(params: Iparams): any;
