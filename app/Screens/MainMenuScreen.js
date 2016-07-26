import React, {Component} from 'react';
import {StyleSheet, AppRegistry, Text, View,TouchableOpacity, ListView,
        Navigator,} from 'react-native';

import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';
import Icon from 'react-native-vector-icons/FontAwesome';

const menu = [
    {item: "Contacts", icon: "group"},
    {item: "Financial", icon: "money"},
    {item: "Medical", icon: "plus"},
    {item: "Calendar", icon: "calendar"},
    {item: "Claims", icon: "legal"},
]

//Main navigation for the app
class MainMenuScreen extends Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state ={
            menuDataSource: ds.cloneWithRows(menu),
        };
    }

    render(){
        return(
            <ViewContainer>
                <StatusBarFiller backgroundColor="#007AFF" />
                <NavigationBar  backgroundColor="#007AFF"
                                leftWord="Logout"
                                title="Main Menu"
                                rightWord=""
                                nav={this.props.navigator}
                />
                <ListView
                    dataSource={this.state.menuDataSource}
                    renderRow={(menuItem) => {return this._renderMenuRow(menuItem)}}
                />
            </ViewContainer>
        );
    }

    _renderMenuRow(menuItem){
        return(
            <TouchableOpacity style={styles.menuRow} onPress={(event) => this._navigateToMenuItem(menuItem)}>
                <Icon name={menuItem.icon} size={25} style={styles.prependIcon} />
                <Text style={styles.menuItemName}>
                    {menuItem.item}
                </Text>
                <View style={{flex: 1}}/>
                <Icon name="chevron-right" style={styles.menuMoreIcon} />
            </TouchableOpacity>
        )
    }

    _navigateToMenuItem(menuItem){
        if (menuItem.item == "Contacts")
        {
            this.props.navigator.push({
                ident: "Contacts",
            });
        }
    }
}

const styles = StyleSheet.create({
    textSample:{
        fontSize: 20,
        color: '#345678',
    },

    backIcon:{
        color: '#112233',
        height: 10,
        width: 10,
        paddingLeft: 5,
        paddingTop: 5,
    },

    navBarText:{
        color: '#ff0000',
    },

    menuRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
    },

    menuItemName:{
        marginLeft: 5,
        fontSize: 20,
        padding: 20,
    },

    prependIcon: {
        color: '#0071FF',
        height: 30,
        width: 30,
        marginLeft: 20,
        marginTop: 5,
    },

    menuMoreIcon: {
        color: '#007AFF',
        height: 20,
        width: 20,
        marginRight: 20,
        marginTop: 10,
    },
});

module.exports = MainMenuScreen;
