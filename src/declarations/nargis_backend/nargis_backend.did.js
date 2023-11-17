
export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({ 'id' : IDL.Nat, 'textarea' : IDL.Text });
  return IDL.Service({
    'addTodo' : IDL.Func([IDL.Text], [IDL.Nat], []),
    'deleteTodo' : IDL.Func([IDL.Nat], [], ['oneway']),
    'getAllTodo' : IDL.Func([], [IDL.Vec(Note)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
