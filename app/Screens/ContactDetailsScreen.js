import React, { Component } from 'react';
import {View, Text, StyleSheet, ListView, TouchableOpacity } from 'react-native';

import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

const colorTheme = '#007ACC';

class ContactDetailsScreen extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
        this.state ={
            detailsDataSource: ds.cloneWithRows(this.props.contact.contact),
        };
    }

    _renderDetailRow(contact){
        return(
            <TouchableOpacity style={styles.contactRow} onPress={console.log('OK')}>
                <View style={styles.contactInfo}>
                    <Text style={styles.contactJob}>
                        {contact.contact}
                    </Text>
                </View>
                <View style={{flex: 1}}/>
            </TouchableOpacity>
        )
    }

    render(){
        return(
            <ViewContainer>
                <StatusBarFiller backgroundColor={colorTheme} />
                <NavigationBar   backgroundColor={colorTheme}
                                 leftWord="Back"
                                 title="ContactDetails"
                                 rightWord=""
                                 nav={this.props.navigator}/>
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
                        {`Description of the job that the person performs`}
                    </Text>
                </View>
                <ListView
                    dataSource={this.state.detailsDataSource}
                    renderRow={() => {return this._renderDetailRow(this.props.contact)}}
                />
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        color: colorTheme,
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
        flexDirection: 'row',
        borderBottomWidth: 3,
        borderBottomColor: '#aaaaaa',
    },

    job:{
        marginLeft: 60,
        marginTop: 15,
        paddingLeft: 20,
        color: '#555555'
    },

    contactInfo:{
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
    },
});

module.exports = ContactDetailsScreen;
