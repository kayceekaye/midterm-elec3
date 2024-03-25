import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const AddNoteScreen = ({ setScreen, addNote }) => {
const [note, setNote] = useState('')
const onNoteChange = (text) => {
    setNote(text)
}
const onClick = () => {
    addNote(note)
    setScreen('ALL_NOTES')
}
    return (
        <View>
            <View style={styles.But}>
                <Button
                    title="Back"
                    onPress={() => setScreen('HOME')}
                />
            </View>
            <View>
                <Text>AddNoteScreen</Text>
            </View>
            <View>
                <TextInput
                style={styles.input}
                value={note}
                onChangeText={onNoteChange}
                
                />
            </View>
            <View style={styles.But}>
                <Button
                    title="ADD"
                    onPress={() => onClick()}
                />
            </View>
        </View>

    )
}

export default AddNoteScreen

const styles = StyleSheet.create({
    But: {
        marginTop: 10,
        height: 50,
        padding: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})