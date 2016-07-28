import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

//Allows to put oa color under the status bar and recolors the
//text on the status bar (carrier, wifi, clock, battery)

class StatusBarFiller extends Component{
    render(){
        return(
            <StatusBar
                barStyle='light-content'
                backgroundColor={this.props.backgroundColor}
            />
        );
    }
}

const styles = StyleSheet.create({
    statusBar: {
        height: 20,
    },
});

module.exports = StatusBarFiller;
