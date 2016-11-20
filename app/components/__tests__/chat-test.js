import Chat from '../chat';

describe('Chat', ()=> {
  let chat;
  beforeEach(() => {
    chat = shallow(<Chat/>);
  });

  describe('Initialization', ()=> {
  });
  describe('Layout', ()=> {
    it('has a conversation box', ()=> {
      const conversation = chat.find('.converation');
      expect(conversation.length).to.eql(1);
    });
    it('has a message box', ()=> {
      const message = chat.find('.message');
      expect(message.length).to.eql(1);
    });
  });
  describe('Interaction', ()=> {
  });
});
