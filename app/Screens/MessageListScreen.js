import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ListView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

const colorTheme = '#6E5BAA';

const contacts = [
    {name: "Hal Jordan", job: "Claims Examiner", contact:"gl@gmail.com"},
    {name: "Barry Allen", job: "Physician", contact:"tf@gmail.com"},
    {name: "Guy Gardner", job: "Employer", contact:"gl2@gmail.com"},
    {name: "Wally West", job: "Supervisor", contact:"tf2@gmail.com"},
    {name: "Dinah Lance", job: "Nurse Case Manager", contact:"tbc@gmail.com"}
]

class MessageListScreen extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
        this.state ={
            contactsDataSource: ds.cloneWithRows(contacts),
        };
    }

    _navigateToMessage(contact){
        this.props.navigator.push({
            ident: "Message",
            contact: contact,
        });
    }

    _renderMessageHistory(contact){
        return(
            <View style={styles.rows}>
                <TouchableOpacity style={styles.contactRow} onPress={() => this._navigateToMessage(contact)}>
                    <View style={styles.splitContactAndPreview}>
                        <View style={styles.circleContainer}>
                            <Text style={styles.circle}> {contact.name[0]} </Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.contactName}>
                                {contact.name}
                            </Text>
                            <Text style={styles.contactJob}>
                                {contact.job}
                            </Text>
                            <Text style={styles.prevewText}>
                                This is where the preview of the message will go.
                                Right now there's nothing connected on the back end,
                                and this message is just hard coded.
                            </Text>
                        </View>
                    </View>
                    <View style={{flex: 1}}/>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <ViewContainer>
                <StatusBarFiller backgroundColor={colorTheme} />
                <NavigationBar   backgroundColor={colorTheme}
                                leftWord="Back"
                                title="Messages"
                                rightWord=""
                                nav={this.props.navigator}/>
                <View style={styles.container}>
                    <ListView
                        dataSource={this.state.contactsDataSource}
                        renderRow={(contact) => {return this._renderMessageHistory(contact)}}
                    />
                </View>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },

    rows: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
    },

    info: {
        paddingLeft: 5,
        paddingRight: 5,
        marginRight: 5,
        flexDirection: 'column',
        flexWrap: 'wrap',
        margin: 5,
    },

    contactName:{
        paddingTop: 5,
        fontSize: 20,
    },

    contactJob:{
        fontSize: 14,
        color: '#999999'
    },

    splitContactAndPreview: {
        flexDirection: 'row'
    },

    prevewText: {
        color: '#999999',
        flexWrap: 'wrap',
        fontSize: 13,
        paddingTop: 5,
        paddingBottom: 5,
    },

    circleContainer: {
        paddingTop: 15,
        paddingLeft: 5,
    },

    circle: {
        paddingLeft: 11,
        paddingTop: 8,
        fontSize: 25,
        backgroundColor: colorTheme,
        color: 'white',
        height: 50,
        width: 50,
        overflow: 'hidden',
        borderRadius: 25,
    },

    ppLogo: {
        color: 'green',
        alignSelf: 'center',
    },

    ppText:{
        fontSize: 9,
        color: 'green',
        alignSelf: 'center',
    },
});

module.exports = MessageListScreen;
