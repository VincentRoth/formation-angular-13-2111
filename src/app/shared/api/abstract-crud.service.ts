import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class AbstractCrudService<T extends { id?: number }> {
  protected httpClient: HttpClient;

  constructor(injector: Injector, private resource: string) {
    this.httpClient = injector.get(HttpClient);
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(`/api/${this.resource}`);
  }

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(`/api/${this.resource}/${id}`);
  }

  create(animal: T): Observable<T> {
    return this.httpClient.post<T>(`/api/${this.resource}`, animal);
  }

  update(animal: T): Observable<T> {
    return this.httpClient.put<T>(`/api/${this.resource}/${animal.id}`, animal);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`/api/${this.resource}/${id}`);
  }
}
