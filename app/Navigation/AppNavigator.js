import React, {Component} from 'react';
import {StyleSheet, Navigator, View, Text} from 'react-native';
import MainMenuScreen from '../../app/Screens/MainMenuScreen';
import LoginScreen from '../../app/Screens/LoginScreen';
import ContactsScreen from '../../app/Screens/ContactsScreen';
import NewUserScreen from '../../app/Screens/NewUserScreen'

class AppNavigator extends Component {

    //This class controls navigation from page to page and the animation
    //of the transition. To add more page navigations just add then to
    //the switch statement inside of _renderScene.
    render(){
        return(
            <Navigator
                initialRoute={{ident: this.props.initialRoute}}
                ref="AppNavigator"
                style={styles.navigatorStyles}
                renderScene={this._renderScene}
                configureScene={(route) => ({
                    ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
                })}
            />
        );
    }

    _renderScene(route, navigator){
        var globalNavigatorProps = {navigator}
        switch(route.ident){
            case "Login":
                return(
                    <LoginScreen {...globalNavigatorProps} />
                );
            case "NewUser":
                return(
                    <NewUserScreen {...globalNavigatorProps} />
                );
            case "MainMenu":
                return(
                    <MainMenuScreen {...globalNavigatorProps} />
                );
            case "Contacts":
                return(
                    <ContactsScreen {...globalNavigatorProps} />
                );
            default:
                return(
                    <LoginScreen {...globalNavigatorProps} />
                );
        }
    }
}

const styles = StyleSheet.create({
    navigatorStyles:{

    },
});

module.exports = AppNavigator;