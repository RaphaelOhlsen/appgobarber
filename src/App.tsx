import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#382e2e" />
    <View style={{ flex: 1, backgroundColor: '#382e2e' }} />
  </>
);
export default App;
