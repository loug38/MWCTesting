import React, {Component} from 'react';
import {StyleSheet, AppRegistry, Text, View,TouchableOpacity, ListView,
        Navigator,} from 'react-native';

//Custom Components
import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

//packages
import Icon from 'react-native-vector-icons/FontAwesome';
const colorTheme = '#007ACC';


//globals
const menu = [
    {item: "Contacts", icon: "group"},
    {item: "Financial", icon: "money"},
    {item: "Medical", icon: "plus"},
    {item: "Calendar", icon: "calendar"},
    {item: "Claims", icon: "legal"},
]

//Main navigation for the app
class MainMenuScreen extends Component {

    //Necessary constructor for ListView. The code is really wonky,
    //because facebook still hasn't implemented a better syntax for
    //a listview but this does work completely, so don't worry about it
    //too much. Still easier than doing it natively.
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state ={
            menuDataSource: ds.cloneWithRows(menu),
        };
    }

    _navigateToMenuItem(menuItem){
        if (menuItem.item == "Contacts")
        {
            this.props.navigator.push({
                ident: "Contacts",
            });
        }
    }

    // Each of the actual items in the list in format:
    // Icon "Word" >
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

    render(){
        return(
            <ViewContainer>
                {/* Status bar and navigation bar*/}
                <StatusBarFiller backgroundColor={colorTheme} />
                <NavigationBar  backgroundColor={colorTheme}
                                leftWord="Logout"
                                title="Main Menu"
                                rightWord=""
                                nav={this.props.navigator}
                />
                {/* BODY */}
                <ListView
                    dataSource={this.state.menuDataSource}
                    renderRow={(menuItem) => {return this._renderMenuRow(menuItem)}}
                />
            </ViewContainer>
        );
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
        color: '#007ACC',
        height: 30,
        width: 30,
        marginLeft: 20,
        marginTop: 5,
    },

    menuMoreIcon: {
        color: '#007ACC',
        height: 20,
        width: 20,
        marginRight: 20,
        marginTop: 10,
    },
});

module.exports = MainMenuScreen;
