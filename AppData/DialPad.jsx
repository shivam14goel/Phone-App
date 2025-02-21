import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const DialPad = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigation = useNavigation();


    const HomePage = () => {
        navigation.navigate('Home');
    };

    const handleDelete = () => {
        setPhoneNumber((prev) => prev.slice(0, prev.length - 1));
    };

    const handlePress = (num) => {
        setPhoneNumber((prev) => prev + num)
    };

    const handleCall = () => {
        alert(`Calling ${phoneNumber}`);
    };

    const digits = [
        ['1', '2', '3'],
        ['4', '5', '6'],
        ['7', '8', '9'],
        ['*', '0', '#']
    ];



    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header1}>
                <TouchableOpacity  onPress={HomePage}>
                    <MaterialIcons name="arrow-back" size={30} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Back</Text>
            </View>

            <View style={styles.Pad}>
            <View style={styles.input}>
                <Text style={styles.text1}>
                    {phoneNumber || 'Enter Number'}
                </Text>
                {phoneNumber.length > 0 && (
                    <TouchableOpacity onPress={handleDelete}>
                        <MaterialIcons name="backspace" size={25} />
                    </TouchableOpacity>
                )}

                <View style={styles.numberContainer}>
                    {digits.map((value, Index) => (
                        <View key={Index} style={styles.row}>
                            {value.map((num) => (
                                <TouchableOpacity
                                    style={styles.singleNumber}
                                    key={num}
                                    onPress={() => handlePress(num)}
                                >
                                    <Text style={styles.Number}>
                                        {num}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ))}
                </View>

                <TouchableOpacity style={styles.callBtn} onPress={() => handleCall()}>
                    <MaterialIcons name="call" size={40} color="white" />
                </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        // paddingTop: 25,
    },

    header1: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        elevation: 2,
        width: '100%',
    },

    headerText: {
        marginLeft: 16,
        fontSize: 18,
        fontWeight: '500',
    },

    Pad: {
        flex: 1,
        //backgroundColor: 'yellow',
        // borderRadius: 10,
        // width: '100%',
        // height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        height: 60,
        //marginLeft: 40,
        //borderWidth: 1,
        //padding: 5,
        //fontSize: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 10,
    },
    text1: {
        fontSize: 25,
        fontWeight: '500',

    },

    numberContainer: {
        flexDirection: 'column',
        margin: 15,
    },

    row: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        marginBottom: 16,
    },

    singleNumber: {
        backgroundColor: '#424242',
        margin: 8,
        height: 70,
        width: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        //elevation: 100
    },
    Number: {
        color: 'white',
        fontSize: 30,
        fontWeigth: 500

    },
    callBtn: {
        marginTop: 20,
        // width: '50%',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: 'center',
        // fontWeight: '',
        elevation: 100

    }

    // text1:{
    //     backgroundColor: 'red',
    // },
})

export default DialPad;