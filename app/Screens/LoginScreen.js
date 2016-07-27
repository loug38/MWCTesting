import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,
         Dimensions, Navigator} from 'react-native';

//Custom Components
import StatusBarFiller from '../Components/StatusBarFiller';
import ViewContainer from '../Components/ViewContainer';
import Button from '../../node_modules/react-native-button';
import DatePicker from 'react-native-datepicker';

//globals
const window = Dimensions.get('window');
var colorTheme = '#007ACC';

class LoginScreen extends Component{
    _navigateToMainMenu(){
        this.props.navigator.push({
            ident: "MainMenu",
        });
    }

    _navigateToNewUser(){
        this.props.navigator.push({
            ident: "NewUser",
            sceneConfig: Navigator.SceneConfigs.VerticalSwipeJump,
        });
    }

    //Below I wrap the TextInputs with Views in order to have just a
    //line under the text input instead of a border all around.
    //borderBottomWidth doesn't work for TextInput but it does for
    //Views. Will change when facebook fixes the bug.
    render(){
        return(
            <View style={styles.container}>
                <StatusBarFiller backgroundColor={colorTheme}/>
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
                        backgroundColor={colorTheme}
                        style={styles.loginButton}>
                        Login
                    </Button>
                    <Button onPress={() => this._navigateToNewUser()}
                        style={styles.newUserButton}>
                        New Account
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
        width: 250,
        fontSize: 30,
        color: 'white',
        backgroundColor: colorTheme,
    },

    newUserButton: {
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: 10,
        padding: 5,
        fontSize: 15,
        color: 'white',
        backgroundColor: colorTheme
    },

    textInputWrapper: {
        height: 40,
        width: (window.width - 50),
        borderBottomWidth: 1,
        borderBottomColor: '#aaaaaa'
    }
});

module.exports = LoginScreen;
