import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

//Custom Components
import ViewContainer from './ViewContainer';


class ControlPanel extends Component{
    render(){
        return(
            <ViewContainer>
                <Text> 1 </Text>
                <Text> 2 </Text>
                <Text> 3 </Text>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({

});

module.exports = ControlPanel;
