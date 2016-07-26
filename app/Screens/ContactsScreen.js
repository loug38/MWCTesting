import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, TouchableOpacity} from 'react-native';

//Custom Components
import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

//Packages
import Icon from 'react-native-vector-icons/FontAwesome';

//globals
const contacts = [
    {name: "Hal Jordan", job: "Claims Examiner", contact:"gl@gmail.com"},
    {name: "Barry Allen", job: "Physician", contact:"tf@gmail.com"},
    {name: "Guy Gardner", job: "Employer", contact:"gl2@gmail.com"},
    {name: "Wally West", job: "Supervisor", contact:"tf2@gmail.com"},
    {name: "Dinah Lance", job: "Nurse Case Manager", contact:"tbc@gmail.com"}
]

class ContactsScreen extends Component{

    //Necessary constructor for ListView. The code is really wonky,
    //because facebook still hasn't implemented a better syntax for
    //a listview but this does work completely, so don't worry about it
    //too much. Still easier than doing it natively.
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
        this.state ={
            contactsDataSource: ds.cloneWithRows(contacts),
        };
    }

    _renderContactRow(contact){
        return(
            <TouchableOpacity style={styles.contactRow} onPress={console.log("clicked")}>
                <Icon name="user" size={30} style={styles.contactIcon} />
                <View style={styles.info}>
                    <Text style={styles.contactJob}>
                        {contact.job}
                    </Text>
                    <Text style={styles.contactName}>
                        {contact.name}
                    </Text>
                </View>
            </TouchableOpacity>
        )
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
}

const styles = StyleSheet.create({
    contactRow: {
        marginTop: 20,
        flexDirection: 'row',
        height: 40,
    },

    info: {
        flexDirection: 'column',
        height: 40,
    },

    contactIcon:{
        color: '#007AFF',
        marginLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
    },

    contactJob:{
        fontSize: 20,
    },

    contactName:{
        fontSize: 15,
        color: '#999999'
    },
});

module.exports = ContactsScreen;
