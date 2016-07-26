import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,
         Dimensions } from 'react-native';

import StatusBarFiller from '../Components/StatusBarFiller';
import ViewContainer from '../Components/ViewContainer';
import Button from '../../node_modules/react-native-button';

const window = Dimensions.get('window');

class LoginScreen extends Component{
    _navigateToMainMenu(){
        this.props.navigator.push({
            ident: "MainMenu",
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBarFiller backgroundColor="#007AFF" />
                    <Image style={styles.logo}
                        source={require('../../img/loginlogo1.png')}
                    />
                    <View style={styles.textInputWrapper}>
                        <TextInput style={styles.textFields}
                            onChangeText={(text) => this.setState({text})}
                            placeholder="Login"
                        />
                    </View>
                    <View style={styles.textInputWrapper}>
                        <TextInput style={styles.textFields}
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({text})}
                            placeholder="Password"
                        />
                    </View>
                    <Button onPress={() => this._navigateToMainMenu()}
                        style={styles.loginButton}>
                        Login
                    </Button>
                    <Image style={styles.dcLogo}
                        source={require('../../img/datacareLogo.png')}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginTop: 100,
    },

    dcLogo:{
        width: 200,
        resizeMode: 'contain',
    },

    textFields:{
        height: 40,
        width: (window.width - 50),
    },

    loginButton: {
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: 40,
        padding: 5,
        width: 150,
        fontSize: 30,
        color: 'white',
        backgroundColor: '#007AFF',
    },

    textInputWrapper: {
        height: 40,
        width: (window.width - 50),
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa'
    }
});

module.exports = LoginScreen;
