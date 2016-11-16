import Chat from '../chat';

describe('Chat', ()=> {
  it('chats', ()=> {
    const chat = mount(<Chat/>);
    expect(chat.text()).to.eql('hello world');
  });
});
