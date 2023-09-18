import {Button, StyleSheet, View} from 'react-native';
import {slice1} from './store/features/generic2';
import {store, useAppDispatch} from './store/store';

function App() {
  console.log(store.getState());
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchPerson());
  // });
  // const {data}=useAppSelector(state=>state.wrappedSlice)

  return (
    <View style={{flex: 1}}>
      <View style={styles.add}>{/* <Add /> */}</View>
      <View style={styles.list}>
        <Button
          title="Refresh"
          onPress={() => {
            // dispatch({ type: 'INCREMENT_B' })
            // console.log(store.getState());
            // function incrementCounter(type = 'A') {
            //   return {
            //     type: `INCREMENT_${type}`,
            //   };
            // }
            // dispatch(incrementCounter());
            // console.log(store.getState());
            /////////////////////////////////////////////
            // dispatch(wrappedSlice.actions.magic());

            dispatch(slice1.fetchPerson());
          }}
        />
        <Button
          title="getState"
          onPress={() => {
            console.log(store.getState());
          }}
        />
        {/* <List /> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  add: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flex: 4,
    backgroundColor: '#fff',
  },
});
export default App;
