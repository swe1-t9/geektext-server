import { queryField } from 'nexus';

const HelloWorld = queryField('hello_world', {
  type: 'String',
  resolve() {
    return 'Hi';
  }
});

export { HelloWorld };
