import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef} from 'react';
import {useAppDispatch} from '../store/store';
import {addPerson, savePerson} from '../store/features/personSlice';

const Add = () => {
  const name = useRef<string>('');
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Person name : </Text>
      <TextInput
        style={styles.input}
        onChange={e => { 
          name.current = e.nativeEvent.text;
        }}
        onSubmitEditing={() => {
          dispatch(addPerson({name: name.current}));
        }}
      />
      <Button
        onPress={() => {
          dispatch(savePerson(name.current));
        }}
        title="Add"
      />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
});
