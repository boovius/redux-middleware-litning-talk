import { Composition } from '../composition';

describe.only('Composition', ()=>{
  let action, composition, button, form;

  beforeEach(()=>{
    action = sinon.spy();

    composition = mount(<Composition send={action} />);
    button = composition.find('input[type="submit"]');
    form = composition.find('form');
  });

  describe('Layout', ()=>{
    it('has a text input', ()=>{
      const input = composition.find('input[type="text"]');
      expect(input.length).to.eql(1);
    });

    it('has a send button', ()=>{
      expect(button.length).to.eql(1);
    });
  });

  describe('Interaction', ()=>{
    describe('changing text', ()=>{
      const textInput = 'message';

      it('updates text on state', ()=>{
        const input = composition.find('input[type="text"]');
        input.simulate('change', {target: {value: textInput}});
        expect(composition.state('text')).to.eql(textInput);
      });
    });

    describe('send', ()=>{
      context('given text has value', ()=>{
        const textInput = 'message';

        it('sends text on state to action',()=>{
          composition.setState({text: textInput});

          form.simulate('submit');

          expect(action.called).to.eql(true)
          expect(action.lastCall.args[0]).to.eql(textInput);
          expect(composition.state('text')).to.eql('');
        });
      });

      context('given text is empty', ()=>{
        const textInput = '';

        it('sends text on state to action',()=>{
          composition.setState({text: textInput});

          form.simulate('submit');

          expect(action.called).to.eql(false)
        });
      });

      context('given text is null', ()=>{
        const textInput = null;

        it('sends text on state to action',()=>{
          composition.setState({text: textInput});

          form.simulate('submit');

          expect(action.called).to.eql(false)
        });
      });
    });
  });
});
