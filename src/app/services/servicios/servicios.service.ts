import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor( private http: HttpClient) { }

  // Get List Users:
getListUsers(){
  return this.http.get ('https://reqres.in/api/users?page=2').pipe(map((resp: any []) =>
  resp.map(users =>
    ({name: users.name,
    code: users.alpha3Code
  }))
  ));
}

  // Get Single User:
getSingleUser(){
  return this.http.get ('https://reqres.in/api/users/2').pipe(map((resp: any []) =>
  resp.map(users =>
    ({name: users.name,
    code: users.alpha3Code
  }))
  ));
}
  // Post de Create:
// postCreate(){
//   return this.http.post ('https://reqres.in/api/users').pipe(map((resp: any []) =>
//   resp.map(users =>
//     ({name: users.name,
//     code: users.alpha3Code
//   }))
//   ));
// }

  // Delete:
delete(){
  return this.http.delete ('https://reqres.in/api/users/2').pipe(map((resp: any []) =>
  resp.map(users =>
    ({name: users.name,
    code: users.alpha3Code
  }))
  ));
}
}
