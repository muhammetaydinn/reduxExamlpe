import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../store/store';
import {deletePerson} from '../store/features/personSlice';

const List = () => {
  const persons = useAppSelector(state => state.person.persons);
  const dispatch = useAppDispatch();
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>List</Text>
        </View>
        {persons.map((person, index) => {
          return (
            <TouchableOpacity
              key={index.toString()}
              onPress={() => {
                dispatch(deletePerson({index: index}));
              }}>
              <View
                style={[
                  styles.card,
                  {
                    backgroundColor:
                      'rgba(255, 0, 255, ' + index / persons.length + 1 + ')',
                  },
                ]}>
                <Text style={styles.cardText} key={index.toString()}>
                  {person.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default List;

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  card: {
    width: '80%',
    height: 50,
    backgroundColor: '#000',

    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});
