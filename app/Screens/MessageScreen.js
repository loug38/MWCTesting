import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableHighlight, Dimensions } from 'react-native';

import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

const colorTheme = '#6E5BAA';
const window = Dimensions.get('window');

class MessageScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: '',
            mssageList: [],
        };
    }

    onSendPress(){
        consoloe.log(this.state.message);
        this.setState({message: ''});
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBarFiller backgroundColor={colorTheme} />
                <NavigationBar   backgroundColor={colorTheme}
                                leftWord="Back"
                                title={this.props.contact.name}
                                rightWord=""
                                nav={this.props.navigator}/>
                <View style={styles.chatContainer}>
                    <Text style={{color: '#000000'}}> Chat </Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.textContainer}>
                        <TextInput
                            style={styles.input}
                            value={this.state.message}
                            onChangeText={(text) => this.setState({message:text})}
                        />
                    </View>
                    <View style={styles.sendContainer}>
                        <TouchableHighlight
                            underlayColor={colorTheme}
                            onPress={() => this.onSendPress()}>
                            <Text style={{color: '#ffffff'}}> SEND </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    chatContainer: {
        flex: 11,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colorTheme,
    },

    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    sendContainer: {
        justifyContent: 'flex-end',
        paddingRight: 10,
    },

    input: {
        width: window.width - 70,
        color: '#555555',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        height: 32,
        borderColor: '#6E5BAA',
        borderWidth: 1,
        borderRadius: 2,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
});

module.exports = MessageScreen;
