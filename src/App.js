import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Input, Button} from 'react-native-elements';
const App = () => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <View style={styles.container}>
      <Input
        placeholder="01000000000"
        label="휴대폰번호"
        borderColor="#3A7BF2"
      />
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="SKT" value="skt" />
        <Picker.Item label="LG" value="lg" />
      </Picker>
      <Input
        style={styles.inputContainerStyle}
        placeholder="홍길동"
        label="이름"
      />

      <Button title="확인" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 25,
  },
  inputContainerStyle: {
    marginTop: 16,
    width: '90%',
  },
});

export default App;
