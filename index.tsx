import * as React from "react";
import { TextInput, TextInputProps } from "react-native";

export default function ModifiedTextInput(props: TextInputProps) {
  const editableRef: any = React.useRef();

  return (
    <>
      <TextInput
        {...props}
        style={{
          display: "none",
        }}
        value={props.value}
        ref={editableRef}
      />
      <TextInput
        {...props}
        value={props.value}
        editable
        onFocus={(e) => {
          editableRef.current.focus();
        }}
        onBlur={(e) => {
          e.preventDefault();
        }}
      />
    </>
  );
}

