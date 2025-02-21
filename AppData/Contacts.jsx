import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView, Text, View, StyleSheet, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { Modal } from 'react-native';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { ScrollView } from 'react-native';

const Contacts = () => {

    const [contacts, setContacts] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    const [newContact, setNewContact] = useState({
        name: '',
        phoneNumber: '',
    });

    const navigation = useNavigation();

    const HomePage = () => {
        navigation.navigate('Home');
    };
    

    const addContact = () => {
        if (newContact.name === '' || newContact.phoneNumber === '') {
            Alert.alert('Please enter name and phone number');
            return;
        }

        setContacts(prevContacts => [
            ...prevContacts,
            { ...newContact, id: Date.now().toString() }
        ]);
        setModalVisible(false);
        setNewContact({
            name: '',
            phoneNumber: '',
        });
    };

    const renderContact = ({ item }) => (
        <TouchableOpacity style={styles.contactItem}>
            <View style={styles.avatarContainer}>
                <Text style={styles.avatar}>{item.name[0].toUpperCase()}</Text>
            </View>
            <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{item.name}</Text>
                <Text style={styles.contactNumber}>{item.phoneNumber}</Text>
            </View>
            <TouchableOpacity style={styles.callButton}>
                <MaterialIcons name="phone" size={24} color="#4CAF50" />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity  onPress={HomePage}>
                                    <MaterialIcons name="arrow-back" size={30} />
                                </TouchableOpacity>
                <Text style={styles.title}>
                    Contacts
                </Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setModalVisible(true)}
                >
                    <MaterialIcons name="person-add" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list}
                data={contacts}
                renderItem={renderContact}
                keyExtractor={item => item.id}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <MaterialIcons name="people" size={48} color="#ccc" />
                        <Text style={styles.emptyText}>No contacts yet</Text>
                    </View>
                }
            />
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>
                            Add New Contact
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            value={newContact.name}
                            onChangeText={text => setNewContact(prev => ({ ...prev, name: text }))}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Number"
                            value={newContact.phoneNumber}
                            onChangeText={text => {
                                // Only allow numbers and limit length
                                const numbersOnly = text.replace(/[^0-9]/g, '').slice(0, 10);
                                setNewContact(prev => ({ ...prev, phoneNumber: numbersOnly }))
                            }}
                            keyboardType='numeric'
                            maxLength={10}
                        />
                        <View style={styles.modalButtons}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.saveButton]}
                                onPress={addContact}
                            >
                                <Text style={styles.buttonText}>
                                    Save
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                                style={[styles.modalButton, styles.cancelButton]}
                            >
                                <Text style={styles.buttonText}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        elevation: 2,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    addButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 25,
    },

    list: {
        flex: 1,
    },

    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
        marginTop: 20,
    },

    emptyText: {
        marginTop: 10,
        color: '#666',
        fontSize: 25,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    modalButton: {
        flex: 1,
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#ff5252',
    },
    saveButton: {
        backgroundColor: '#4CAF50',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    },

    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 2,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    avatar: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#757575',
    },
    contactInfo: {
        flex: 1,
    },
    contactName: {
        fontSize: 18,
        fontWeight: '500',
    },
    contactNumber: {
        color: '#666',
        marginTop: 4,
    },
    callButton: {
        padding: 10,
    },
})

export default Contacts