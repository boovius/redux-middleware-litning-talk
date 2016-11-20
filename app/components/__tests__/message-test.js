import Message from '../message';

describe('Message', ()=>{
  let message, messageData;

  beforeEach(()=>{
    messageData = {
      sender: 'sender',
      content: 'content'
    };
    message = mount(
      <Message
        sender={messageData.sender}
        content={messageData.content}
        />
    );
  });

  describe('Initialization', ()=>{
    it('has sender and content', ()=>{
      expect(message.prop('sender')).to.eql(messageData.sender);
      expect(message.prop('content')).to.eql(messageData.content);
    });
  });

  describe('Layout', ()=>{
    it('has text of its content', ()=> {
      expect(message.text()).to.eql(messageData.content);
    });
  });
});
