import { Injectable } from '@angular/core';

export type User = {
    id: number;
    name: string;
    ph_no: number;
    Email: string;
  };

@Injectable()

  export class CusDetailService{
    public users: User[] = [{ id: 1, name: "althaf", ph_no: 6303083127,Email: "allu1819@gmail.com" }];
    public count = 2;

    public addUser(user: User) {
        this.users.push({...user, id: this.count++});
      }
  }