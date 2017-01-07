import Message from '../message';

describe('Message', ()=>{
  let component, messageData;

  beforeEach(()=>{
    messageData = {
      authored: true,
      text: 'text',
      sunk: true
    };
    component = mount(
      <Message
        authored={messageData.authored}
        text={messageData.text}
        sunk={messageData.sunk}
        />
    );
  });

  describe('Initialization', ()=>{
    it('has text and authored prope and has message class', ()=>{
      expect(component.prop('authored')).to.eql(messageData.authored);
      expect(component.prop('text')).to.eql(messageData.text);
      expect(component.find('.message').length).to.eql(1);
    });
  });

  describe('Layout', ()=>{
    it('has text of its text', ()=> {
      expect(component.text()).to.eql(messageData.text);
    });

    context('when message authored', ()=>{
      it('has authored class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('authored')).to.eql(true);
      });
    });

    context('when message not authored', ()=>{
      beforeEach(()=>{
        component = mount(
          <Message
            authored={false}
            text={messageData.text}
            />
        );
      });

      it('has received class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('received')).to.eql(true);
      });
    });

    context('when message is sunk', () => {
      it('has sunk class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('sunk')).to.eql(true);
      });
    });

    context('when message not sunk', ()=>{
      beforeEach(()=>{
        messageData = {
          authored: false,
          text: 'text'
        };
        component = mount(
          <Message
            sunk={false}
            text={messageData.text}
            />
        );
      });

      it('has unsunk class', ()=>{
        const message = component.find('.message')
        expect(message.hasClass('unsunk')).to.eql(true);
      });
    });
  });
});
