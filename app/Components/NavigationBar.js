import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import StatusBarFiller from './StatusBarFiller';
import Icon from '../../node_modules/react-native-vector-icons/FontAwesome';
import ViewContainer from './ViewContainer';

//Uptop navigation bar. Takes in 5 parameters
//backgroundColor: the background color
//leftWord: the word on the top left (generally "back")
//navBarTitle: In the center, the title of the current page
//rightWord: the word on the top right (generally "add")
//nav: the navigator reference from where its coming from so you
//can back out to previous screen (pop screen off the stack.)

var colorTheme = '#007ACC';

class NavigationBar extends Component{
    colorTheme = this.props.backgroundColor;

    render(){
        return(
            <View>
                <StatusBarFiller backgroundColor="#007AFF" />
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.nav.pop()}>
                        <Icon name='angle-left' size={20} style={styles.backIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.nav.pop()}>
                        <Text style={styles.navBarButtonLeftText}>
                            {this.props.leftWord}
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.navBarTitle}>
                        {this.props.title}
                    </Text>
                    <TouchableOpacity onPress={() => this.props.nav.push({
                                                ident: this.props.navTo,
                                                })}>
                        <Text style={styles.navBarButtonRightText}>
                            {this.props.rightWord}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colorTheme,
        height: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 25,
    },

    backIcon:{
        color: '#ffffff',
        width: 20,
        paddingLeft: 10,
        paddingRight: 3,
    },

    forwardIcon:{
        color: '#ffffff',
        width: 20,
        paddingRight: 10,
        paddingTop: 5,
    },

    navBarButtonRightText:{
        color: '#ffffff',
        fontSize: 16,
        width: 90,
        paddingLeft: 10,
    },

    navBarButtonLeftText:{
        color: '#ffffff',
        fontSize: 16,
        width: 90,
        paddingRight: 10,
    },

    navBarTitle:{
        color: '#ffffff',
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
    },
});

module.exports = NavigationBar;
