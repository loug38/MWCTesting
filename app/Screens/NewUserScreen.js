import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,
         Dimensions} from 'react-native';

import ViewContainer from '../Components/ViewContainer';
import StatusBarFiller from '../Components/StatusBarFiller';
import NavigationBar from '../Components/NavigationBar';

import Button from 'react-native-button';
import DatePicker from 'react-native-datepicker';

const windwo = Dimensions.get('window');

class NewUserScreen extends Component{
    constructor(props){
        super(props);
        this.state ={
            date: "",
        }
    }

    _navigateToLogin(){
        this.props.navigator.pop
    }

    render(){
        return(
            <ViewContainer>
                <StatusBarFiller backgroundColor="#007AFF" />
                <NavigationBar  backgroundColor="#007AFF"
                                leftWord="Back"
                                title="Create Account"
                                rightWord=""
                                nav={this.props.navigator}
                />
                <Text style={styles.fieldDescription}>
                    Birthdate
                </Text>
                <View style={styles.container}>
                    <DatePicker
                        style={{width:200}}
                        date={this.state.date}
                        mode='date'
                        placeholder='Birthday'
                        format="MM-DD-YYYY"
                        minDate="01-01-1900"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        onDateChange={(date) => {this.setState({date: date});}}
                    />
                </View>
                <Text style={styles.fieldDescription}>
                    Claim Number
                </Text>
                <View style={styles.textInputWrapper}>
                    <TextInput style ={styles.textFields}
                        placeholder="xxxxxxx-xxxx"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <Text style={styles.fieldDescription}>
                    Social Security Number
                </Text>
                <View style={styles.textInputWrapper}>
                    <TextInput style ={styles.textFields}
                        placeholder="xxx-xx-xxxx"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <Text style={styles.fieldDescription}>
                    Username
                </Text>
                <View style={styles.textInputWrapper}>
                    <TextInput style ={styles.textFields}
                        placeholder="Username"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <Text style={styles.fieldDescription}>
                    Password
                </Text>
                <View style={styles.textInputWrapper}>
                    <TextInput style ={styles.textFields}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <Text style={styles.fieldDescription}>
                    Confirm Password
                </Text>
                <View style={styles.textInputWrapper}>
                    <TextInput style ={styles.textFields}
                        placeholder="Password"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>
                <Button onPress={() => this.props.navigator.pop()}
                    style={styles.createAccountButton}>
                        Create Account
                </Button>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    fieldDescription:{
        color: '#777777',
        paddingTop: 20,
        fontSize: 10,
        paddingLeft: 20,
    },

    container:{
        padding: 20,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    textInputWrapper: {
        height: 40,
        width: (window.width - 50),
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa',
    },

    textFields:{
        height: 40,
    },

    createAccountButton:{
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: 80,
        marginLeft: 50,
        marginRight: 50,
        padding: 5,
        fontSize: 15,
        color: 'white',
        backgroundColor: '#007AFF',
    },
});

module.exports = NewUserScreen;
