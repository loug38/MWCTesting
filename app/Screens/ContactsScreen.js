import React, {Component} from 'react';
import {Text, View, StyleSheet, ListView, TouchableOpacity, Alert} from 'react-native';

//Custom Components
import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

//Packages
import Icon from 'react-native-vector-icons/FontAwesome';

//globals
var colorTheme = '#007ACC';
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

    //In the case of pressing a contact for more info
    _navigateToContactDetails(contact){
        this.props.navigator.push({
            ident: "ContactDetails",
            contact: contact,
        });
    }

    //in the case the message button has been pressed
    _sendMessage(contact){
        this.props.navigator.push({
            ident: "Message",
            contact: contact,
        });
    }

    //in the case the call button has been pressed
    _makeCall(contact){
        Alert.alert(
            contact.name,
            'Here is where calls will go',
            [{text: 'OK', onPress:() => console.log('OK')}]
        );
    }


    _renderContactRow(contact){
        return(
            //Each row has 3 parts:
            //Icon position/name InfoIcon (Pressable for more info)
            <View style={styles.rows}>
                <TouchableOpacity style={styles.contactRow} onPress={(event) => this._navigateToContactDetails(contact)}>
                    <Icon name="user" size={25} style={styles.contactIcon} />
                    <View style={styles.info}>
                        <Text style={styles.contactJob}>
                            {contact.job}
                        </Text>
                        <Text style={styles.contactName}>
                            {contact.name}
                        </Text>
                    </View>
                    <View style={{flex: 1}}/>
                    <Icon   name="envelope"
                            size={25}
                            style={styles.infoIcon}
                            onPress={(event) => this._sendMessage(contact)}
                    />
                    <Icon   name="phone"
                            size={25}
                            style={styles.infoIcon}
                            onPress={(event) => this._makeCall(contact)}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <ViewContainer>
                <StatusBarFiller backgroundColor={colorTheme} />
                <NavigationBar backgroundColor={colorTheme}
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
        marginTop: 15,
        flexDirection: 'row',
        height: 40,
    },

    info: {
        flexDirection: 'column',
        height: 40,
    },

    infoIcon:{
        paddingTop: 5,
        paddingRight: 20,
        color: colorTheme
    },

    contactIcon:{
        color: colorTheme,
        marginLeft: 20,
        paddingRight: 10,
        paddingTop: 5,
    },

    contactJob:{
        fontSize: 20,
    },

    contactName:{
        fontSize: 14,
        color: '#999999'
    },

    rows: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        paddingBottom: 15,
    },
});

module.exports = ContactsScreen;
