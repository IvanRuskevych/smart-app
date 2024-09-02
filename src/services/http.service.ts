import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpService {
  constructor(
    public baseUrl = import.meta.env.VITE_SERVICE_URL,
    public fetchingService = axios
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
  }

  private getFullApiUrl(url: string | undefined): string {
    return `${this.baseUrl}/${url}`;
  }

  private sanitizeConfig(
    config: AxiosRequestConfig
  ): Omit<AxiosRequestConfig, 'url' | 'data'> {
    const { url: _url, data: _data, ...configWithoutUrlAndData } = config;
    return configWithoutUrlAndData;
  }

  public get<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.sanitizeConfig(config)
    );
  }
}
