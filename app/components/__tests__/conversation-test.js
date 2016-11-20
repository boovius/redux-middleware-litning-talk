import Conversation from '../conversation';
import Message from '../message';

describe('Converastion', ()=>{
  let conversation, messageData;

  beforeEach(()=>{
    messageData = [
      {
        sender: 'person-1',
        content: 'message-1',
      },
      {
        sender: 'person-2',
        content: 'message-2'
      }
    ];
    conversation = mount(<Conversation messages={messageData}/>);
  });

  describe('Initialization', ()=>{
    it('takes messages', ()=>{
      expect(conversation.prop('messages')).to.eql(messageData);
    });
  });

  describe('Layout', ()=>{
    it('has a message for every message', ()=>{
      const messages = conversation.find(Message);
      expect(messages.length).to.eql(messageData.length);
    });
  });
});
