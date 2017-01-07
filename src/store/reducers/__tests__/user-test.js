import { RECEIVE_USER } from '../../../constants';
import deepFreeze from 'deep-freeze';
import user from '../user';

describe('user reducer', () => {
  describe(RECEIVE_USER, () => {
    const stateBefore = {}
    const userData = {
      id: 'id',
      displayName: 'displayName',
      email: 'email'
    };

    const action = {
      type: RECEIVE_USER,
      user: userData
    };

    const stateAfter = {
      id: 'id',
      displayName: 'displayName',
      email: 'email'
    };

    deepFreeze(stateBefore);
    deepFreeze(action);
    it('sets messages to data received', () => {
      expect(user(stateBefore, action)).to.eql(stateAfter);
    });
  });
});
