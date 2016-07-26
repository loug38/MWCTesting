import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

const contacts = [
    {name: "Hal Jordan", job: "Claims Examiner", contact:"gl@gmail.com"},
    {name: "Barry Allen", job: "Physician", contact:"tf@gmail.com"},
    {name: "Guy Gardner", job: "Employer", contact:"gl2@gmail.com"},
    {name: "Wally West", job: "Supervisor", contact:"tf2@gmail.com"},
    {name: "Dinah Lance", job: "Nurse Case Manager", contact:"tbc@gmail.com"}
]

class ContactsScreen extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
        this.state ={
            contactsDataSource: ds.cloneWithRows(contacts);
        }
    }

    render(){
        return(
            <ViewContainer>
                <StatusBarFiller backgroundColor="#007AFF" />
                <NavigationBar backgroundColor="#007AFF"
                                leftWord="Back"
                                title="Contacts"
                                rightWord=""
                                nav={this.props.navigator}
                />
                <ListView
                    dataSource={this.state.contactsDataSource}
                    renderRow={(contact) => {return this._renderContactRow(contact)}}
                />
            </ViewContainer>
        );
    }

    _renderContactRow(contact){
        return(
            <TouchableOpacity style
        )
    }
}

const styles = StyleSheet.create({

});

module.exports = ContactsScreen;
