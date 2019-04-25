import { State, Action } from '@ngxs/store';

export class Add {
  static readonly type = 'Add';
}

export class Delete {
  static readonly type = 'Delete';
}

@State<any[]>({
  name: 'count',
  defaults: ["Test 1"]
})
export class CountState {
  @Action(Add)
  add({ getState, setState }) {
    setState([...getState(), `Test ${getState().length+1}`]);
  }

  @Action(Delete)
  delete({ getState, setState }) {
    let state = getState();
    state.re
  }
}
