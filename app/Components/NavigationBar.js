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

class NavigationBar extends Component{
    render(){
        return(
            <View>
                <StatusBarFiller backgroundColor="#007AFF" />
                <View style={{backgroundColor: this.props.backgroundColor,
                            height: 60,
                            flexDirection: 'row',
                            paddingTop: 25}}>
                    <TouchableOpacity onPress={() => this.props.nav.pop()}>
                        <Icon name='chevron-left' style={styles.backIcon}>
                            <Text style={styles.navBarButtonText}>
                                {`   ${this.props.leftWord}`}
                            </Text>
                        </Icon>
                    </TouchableOpacity>
                    <Text style={styles.navBarTitle}>
                        {this.props.title}
                    </Text>
                    <Text style={styles.navBarButtonText}>
                        {this.props.rightWord}
                    {/* This is a transparent icon to help center the title
                        can ignore it for now. */}
                    </Text>
                        <Icon name='chevron-right' style={styles.forwardIcon}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backIcon:{
        color: '#ffffff',
        height: 32,
        paddingLeft: 10,
        paddingTop: 3,
    },

    forwardIcon:{
        color: 'transparent',
    },

    navBarButtonText:{
        color: '#ffffff',
        fontSize: 16,
        alignItems: 'flex-start',
        textAlign: 'center',
        width: 60
    },

    navBarTitle:{
        color: '#ffffff',
        flex: 1,
        textAlign: 'center',
        paddingRight: 10,
        fontSize: 20,
    },
});

module.exports = NavigationBar;
