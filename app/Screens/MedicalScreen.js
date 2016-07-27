import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';

import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

const colorTheme = '#007ACC';

class MedicalScreen extends Component{
    render(){
        return(
            <ViewContainer>
                <StatusBarFiller backgroundColor={colorTheme} />
                <NavigationBar   backgroundColor={colorTheme}
                                leftWord="Back"
                                title="Medical"
                                rightWord=""
                                nav={this.props.navigator}/>
                <Text>
                    Medical Screen
                </Text>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({

});

module.exports = MedicalScreen;
