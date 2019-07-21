const regWhiteSpace = new RegExp(/\s/);
const regFormatEmail = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);

const validations = {
  required: {
    test: value => value.length > 0,
    message: name => `${name}: required`
  },

  min: {
    test: (value, arg) => value.length >= arg,
    message: (name, arg) => `${name}: min length is: ${arg}`
  },

  max: {
    test: (value, arg) => value.length <= arg,
    message: (name, arg) => `${name}: max length is: ${arg}`
  },

  minMax: {
    test: (value, arg) => {
      const tempValues = arg.split('-');
      const min = tempValues[0];
      const max = tempValues[1];
      const { length } = value;
      return length >= min && length <= max;
    },
    message: (name, arg) => `${name}: max length is: ${arg}`
  },

  whiteSpace: {
    test: value => !regWhiteSpace.test(value),
    message: name => `${name} contain whitespace`
  },

  formatEmail: {
    test: value => regFormatEmail.test(value),
    message: name => `${name} invalid format email`
  }
};

const validate = type => (value, name, arg) => (
  { isValid: validations[type].test(value, arg), message: validations[type].message(name, arg) }
);

export default validate;
