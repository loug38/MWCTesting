import React, { Component } from 'react';
import {View, Text, StyleSheet, ListView, TouchableOpacity } from 'react-native';

import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

import Icon from 'react-native-vector-icons/FontAwesome';

const colorTheme = '#007ACC';

class ContactDetailsScreen extends Component{
    constructor(props){
        super(props);
    }

    _navigateToMessage(contact){
        this.props.navigator.push({
                ident: "Message",
                contact: contact,
        });
    }

    render(){
        return(
            <ViewContainer>
                <StatusBarFiller backgroundColor={colorTheme} />
                <NavigationBar   backgroundColor={colorTheme}
                                 leftWord="Back"
                                 title="Contact Details"
                                 rightWord="Message"
                                 nav={this.props.navigator}
                                 navTo="Message"
                                 />
                <View style={styles.details}>
                    <View style={styles.underline}>
                        <Text style={styles.name}>
                            {this.props.contact.name}
                        </Text>
                        <Text style={styles.job}>
                            {this.props.contact.job}
                        </Text>
                    </View>
                    <Text style={styles.description}>
                        {`Description of the job that the person performs also testing to see if this will wrap`}
                    </Text>
                    <View style={styles.contactView}>
                        <TouchableOpacity onPress={(event) => this._navigateToMessage(this.props.contact)}>
                            <Icon name="envelope" size={30} color={colorTheme} paddingTop={5}>
                            </Icon>
                        </TouchableOpacity>
                        <Text onPress={(event) => this._navigateToMessage(this.props.contact)} style={styles.contactInfo}>
                            {this.props.contact.contact}
                        </Text>
                    </View>
                </View>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        color: '#333333',
    },

    job: {
        marginTop: 15,
        marginLeft: 10,
        color: '#888888',
    },

    description: {
        marginTop: 10,
        color: '#555555',
    },

    details:{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },

    underline:{
        marginLeft: 0,
        marginRight: 0,
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor: '#777777',
    },

    contactInfo:{
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
    },

    contactView:{
        margin: 20,
        flexDirection: 'row'
    }
});

module.exports = ContactDetailsScreen;