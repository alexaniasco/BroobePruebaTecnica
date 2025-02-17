import {Text, TextInput} from 'react-native';

// ... existing code ...

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {
  fontFamily: 'Satoshi-Regular',
};

// ... existing code ...

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.style = {
  fontFamily: 'Satoshi-Regular',
};
