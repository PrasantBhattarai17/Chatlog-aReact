import { StyleSheet, Text, View } from 'react-native';
import ChatLog from './components/ChatLog';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatLog/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: '#fff',
    justifyContent:"space-between"
  },
});
