export interface Iparams {
  method: string;
  url: string;
  headers?: {
    [key: string]: any;
    'content-type'?: string;
  };
  data: object;
}
export declare function axiosParamsConvert(params: Iparams): any;

export declare function moveElement(arr: any[], n: number): any[];
