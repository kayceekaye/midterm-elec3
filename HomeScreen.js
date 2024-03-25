import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'

const HomeScreen = ({ setScreen }) => {
    return (
        <View>
            <Header />
            <View style={{ marginTop: 20 }}>
                <View style={styles.But}> 
                    <Button
                        title='Add'
                        onPress={() => setScreen('ADD_NOTE')}
                    />
                </View>
                <View style={styles.But}>
                    <Button
                        title='Add'
                        onPress={() => setScreen('ALL_NOTES')}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    But: {
        marginTop: 10,
        height: 50,
        padding: 10
    }
})