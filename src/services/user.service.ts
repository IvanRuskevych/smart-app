import { AxiosResponse } from 'axios';

import { IUser } from '../types';
import { HttpService } from './http.service';
import { API_KEYS } from '../shared/keys';

class UserService extends HttpService {
  constructor() {
    super();
  }

  public async getUsers(): Promise<AxiosResponse<IUser[]>> {
    return this.get({ url: API_KEYS.USERS });
  }
}

export const userService = new UserService();
