import { queryField } from 'nexus/dist';

const HelloWorld = queryField('hello_world', {
  type: 'String',
  resolve() {
    return 'Hi';
  }
});

export { HelloWorld };
