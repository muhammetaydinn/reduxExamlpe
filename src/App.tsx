import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Header, LearnMoreLinks} from 'react-native/Libraries/NewAppScreen';
import Add from './components/Add';
import List from './components/List';
import {Provider} from 'react-redux';
import {store, } from './store/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View style={styles.add}>
        <Add />
      </View>
      <View style={styles.list}>
        <List />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create(
  {
  add: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 4,
    backgroundColor: '#fff',
    },
  },
);
export default App;
