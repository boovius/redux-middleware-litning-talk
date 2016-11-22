import Message from '../message';

describe('Message', ()=>{
  let message, messageData;

  beforeEach(()=>{
    messageData = {
      authored: true,
      content: 'content'
    };
    message = mount(
      <Message
        authored={messageData.authored}
        content={messageData.content}
        />
    );
  });

  describe('Initialization', ()=>{
    it('has content and authored prope and has message class', ()=>{
      expect(message.prop('authored')).to.eql(messageData.authored);
      expect(message.prop('content')).to.eql(messageData.content);
      expect(message.find('div').hasClass('message')).to.eql(true);
    });
  });

  describe('Layout', ()=>{
    it('has text of its content', ()=> {
      expect(message.text()).to.eql(messageData.content);
    });

    context('when message authored', ()=>{
      it('has authored class', ()=>{
        expect(message.find('div').hasClass('authored')).to.eql(true);
      });
    });

    context('when message not authored', ()=>{
      beforeEach(()=>{
        messageData = {
          authored: false,
          content: 'content'
        };
        message = mount(
          <Message
            authored={messageData.authored}
            content={messageData.content}
            />
        );
      });

      it('has received class', ()=>{
        expect(message.find('div').hasClass('received')).to.eql(true);
      });
    });
  });
});
