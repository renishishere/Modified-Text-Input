# ModifiedTextinput

Better textinput component for react native that waits for state value to change before updating whats shown on screen

## Usage

Use the component the same way you would use a normal textinput component.

## Example

### With TextInput

![Alt Text](https://github.com/renishishere/Modified-Text-Input/blob/main/without.gif?raw=true)

### With ModifiedTextInput

![Alt Text](https://github.com/renishishere/Modified-Text-Input/blob/main/with.gif?raw=true)

You can see that without ModifiedTextInput, the text jitters as the state attempts to keep up with the key presses. With ModifiedTextInput, the text is only updated when the state is updated, so the text is always in sync with the state.

## Limitations

This library will not be receiving any more support, and this is a pretty hacky solution anyways. I recommend reading the code and modifying it for your use case. If you do make improvements, please make a pull request so others can benefit from your changes.

There is currently no support for selection.
