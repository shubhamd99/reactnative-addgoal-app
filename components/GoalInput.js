import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide" transparent={true}>
            <View style={styles.inputContainer}>
                <View style={styles.wrapper}>
                    <TextInput placeholder="Course Goal" style={styles.textInput} onChangeText={goalInputHandler}
                    value={enteredGoal} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Add" onPress={addGoalHandler}/>
                        </View>
                        <View style={styles.button}>
                            <Button title="Cancel" onPress={props.cancelHandler} color="red" />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    wrapper: {
        width: '80%',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10
    },
    textInput: {
        width: '100%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 15
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: '80%'
    },
    button: {
        width: '50%'
    }
});

export default GoalInput;
