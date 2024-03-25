import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './HomeScreen';
import AddNoteScreen from './AddNoteScreen';
import AllNoteScreen from './AllNoteScreen';

export default function App() {
  const [screen, setScreen] =  useState('HOME')
  const onSetScreen = (val) => {
    setScreen(val)
  }
  const ScreenType = {
    home: "HOME",
    addNote: "ADD_NOTE",
    allNote: "ALL_NOTES"
  }
  const saveNote = () => {

  }
  return (
    <SafeAreaView
      style={styles.container}>
      {screen == ScreenType.home && <HomeScreen setScreen={onSetScreen} />}
      {screen == ScreenType.addNote && <AddNoteScreen setScreen={onSetScreen} addNote = {saveNote} />}
      {screen == ScreenType.allNote && <AllNoteScreen setScreen={onSetScreen} />}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    paddingTop: 20
  },
});
