import { HttpClient } from "protractor-http-client"
import { ResponsePromise } from 'protractor-http-client/dist/promisewrappers';

interface IPerson {
  nome: string,
  sobrenome: string
}

export class PersonRoutes {
  response: any;
  private baseUrl: string = 'http://localhost:5001/';
  /**
   * Retorna uma lista de pessoas
   */
  public async getPersons(): Promise<any> {
    let result: string;
    const http = new HttpClient(this.baseUrl);
    const userGetResponse: ResponsePromise = http.get("/api/persons");
    await userGetResponse.stringBody.then(jsonString => {
      result = jsonString;
    });
    return JSON.parse(result).length;
  }

  public async getPerson(id: number): Promise<string> {
    const http = new HttpClient(this.baseUrl);
    const userGetResponse: ResponsePromise = http.get("/api/persons/1");
    let result: string;
    await userGetResponse.jsonBody.get("nome").then(data => {
      result = data;
    });
    return result.toString();
  }

  // public async getPerson(id: number, data: IPerson): Promise<any> {
  //   let result: string;
  //   const http = new HttpClient(this.baseUrl);
  //   const userGetResponse: ResponsePromise = http.get("/api/persons/1");
  //   await userGetResponse.stringBody.then(jsonString => {
  //     result = jsonString;
  //   });
  //   return JSON.parse(result).length;
  // }

}
