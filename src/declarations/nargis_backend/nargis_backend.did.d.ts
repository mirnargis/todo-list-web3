
import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Note { 'id' : bigint, 'textarea' : string }
export interface _SERVICE {
  'addTodo' : ActorMethod<[string], bigint>,
  'deleteTodo' : ActorMethod<[bigint], undefined>,
  'getAllTodo' : ActorMethod<[], Array<Note>>,
}
