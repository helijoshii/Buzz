import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Account = ({ number, password }) => {
    return (
        // <View style={styles.container}>
        //     <Text style={styles.accountDetails}>Account Details</Text>
        //     <View style={styles.accountContainer}>

        //     <Text style={styles.text}>Number: {number}</Text>
        //     <Text style={styles.text}>Password: {password}</Text>
        //     </View>
        // </View>
        <View style={styles.container}>
            <Text style={styles.accountDetails}>Account Details</Text>
            <View style={styles.accountContainer}>
                <Text style={styles.text}>Number: <Text style={styles.value}>{number}</Text></Text>
                <Text style={styles.text}>Password: <Text style={styles.value}>{password}</Text></Text>
            </View>
        </View>
    );
};

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#efedf5', 
        padding: 20,
    },
    accountContainer: {
        backgroundColor: '#FFFFFF', 
        paddingVertical: 50,
        paddingHorizontal: 70,
        borderColor: '#7b51fd',
        borderWidth: 2,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, 
        alignItems: 'center', 
    },
    text: {
        fontSize: 20,
        marginVertical: 5, 
        fontWeight: '500',
        color: 'black'
    },
    value: {
        fontWeight: 'bold', 
        color: '#7b51fd', 
    },
    accountDetails: {
        fontSize: 50,
        color: '#7b51fd',
        marginBottom: 70, 
    },
});
