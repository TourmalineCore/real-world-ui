/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ToDo {
  id: number;
  name: string;
}

export interface ToDosResponse {
  toDos: ToDo[];
}

export interface NewToDoRequest {
  name: string;
}

export interface NewToDoResponse {
  newToDoId: number;
}

export interface CompleteToDosRequest {
  toDoIds: number[];
}
