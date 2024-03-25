import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const AllNoteScreen = ({setScreen, list}) => {
    const [notes, setNotes] = useState([
        {
            id:1,
            note:"note1"
        },
        {
            id:2,
            note:"note2"
        },

    ])
    const renderItems = () => {
        let myLists = []
        for (let i = 0; i < notes.length; i++) {
            const obj = notes[i];
            let content = (
                <Text>{obj.note}</Text>
               
            )
            myLists.push(content)
        }
        return myLists
    }
  return (
    <View>
        <View>{renderItems()}</View>
        <View style={styles.But}>
                <Button
                    title="Back"
                    onPress={() => setScreen('HOME')}
                />
            </View>
      <Text>AllNoteScreen</Text>
    </View>
  )
}

export default AllNoteScreen

const styles = StyleSheet.create({})