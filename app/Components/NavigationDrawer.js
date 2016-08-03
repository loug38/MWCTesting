/* This is the navigation drawer. It is accessable from only certain  *
 * screens via swipe in from left or from the hamburger button. It    *
 * takes in a navigator reference from the screen calling it, and     *
 * the title of the screen it came in from as a string to keep from   *
 * navigating to the same screen again causing the stack to grow      *
 * with no way to pop the screen off.                                 *
 * 'navigator' send in this.props.navigator                           *
 * 'callingScreen' send in the string you would send the navigator    *
 * Copyright 2016 Lou George All Rights Reserved.                     */


import React, {Component} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,
        Navigator, Dimensions, ListView, Image} from 'react-native';

//Custom Components
import ViewContainer from '../../app/Components/ViewContainer';

//packages
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';

const colorTheme = '#007ACC';

//globals
const window = Dimensions.get('window');

const menu = [
    {item: "News Feed", icon: "newspaper-o"},
    {item: "Contacts", icon: "group"},
    {item: "Financial", icon: "money"},
    {item: "Medical", icon: "plus"},
    {item: "Calendar", icon: "calendar"},
    {item: "Claims", icon: "legal"},
    {item: "Message Center", icon: "envelope"},
    {item: "Settings", icon: "gear"},
];

//Main navigation for the app
class NavigationDrawer extends Component {
    //Necessary constructor for ListView. The code is really wonky,
    //because facebook still hasn't implemented a better syntax for
    //a listview but this does work completely, so don't worry about it
    //too much. Still easier than doing it natively.
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
        this.state ={
            menuDataSource: ds.cloneWithRows(menu),
        };
    }

    //Render Drawer Menu
    _renderMenuRow(menuInfo){
        return(
            <View style={styles.drawerRows}>
                <TouchableOpacity onPress={(event) => this._navigateToMenuItem(menuInfo.item)}>
                    <View style={styles.splitIconAndInfo}>
                        <View style={styles.iconContainer}>
                            <Icon name={menuInfo.icon} size={30} color={'#555555'} />
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text style={{paddingTop: 5, fontSize: 15}}> {menuInfo.item} </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _navigateToMenuItem(menuItem){
        if (menuItem == this.props.callingScreen) {
            return;
        }
        switch (menuItem) {
            case 'News Feed':
                this.props.navigator.push({ident: "News Feed"});
                break;
            case 'Contacts':
                this.props.navigator.push({ident: "Contacts",});
                break;
            case 'Financial':
                this.props.navigator.push({ident: "Financial",});
                break;
            case 'Message':
                this.props.navigator.push({ident: "Message",});
                break;
            case 'Medical':
                this.props.navigator.push({ident: "Medical"});
                break;
            case 'Message Center':
                this.props.navigator.push({ident: "Message Center"});
                break;
            case 'News Feed':
                this.props.navigator.push({ident: "News Feed"});
                break;
        };
    }

    retFunction(){
        return (navigationView);
    }

    render(){
        return (
            <View style={styles.navDrawer}>
                {/* Top of the navigation drawer (background + user profile) */}
                <View style={styles.topImage}>
                    <Image style={{resizeMode: 'cover', width: 300, height: 150, flex: 1}}
                           source={require('../../img/googlenownewyork.png')}>
                           <View style={{marginLeft: 30, marginTop: 35}}>
                                <View style={styles.circleBackground}>
                                    <Icon name='user' size={50} color={'#ffffff'} style={{marginLeft:15, marginTop:5}}/>
                                </View>
                           </View>
                           <View style={{alignItems: 'flex-start', marginTop: 20, marginLeft: 10}}>
                                <Text style={{fontSize: 20, color: '#ffffff', backgroundColor: 'transparent'}}> username@gmail.com </Text>
                           </View>
                    </Image>
                </View>

                {/* The actual navigation menu */}
                <View style={{borderBottomWidth: 1, borderBottomColor: '#666666', padding: 5}}>
                    <Text style={{marginLeft: 3, fontSize: 20, color: '#666666'}}>
                        Navigation
                    </Text>
                </View>
                <ListView
                    dataSource={this.state.menuDataSource}
                    renderRow={(menuRow) => {return this._renderMenuRow(menuRow)}}
                    removeClippedSubviews={false}
                    initialListSize={10}
                />

                {/* Everything below the navigation menu */}
                <TouchableOpacity onPress={() => this.props.navigator.pop()}>
                    <Text style={{fontSize: 15, margin: 20}}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
    },

    navDrawer: {
        flex: 1,
        backgroundColor: '#efefef',
    },

    drawerMenuText: {
        fontSize: 20,
        color: '#000000',
    },

    iconContainer: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        width: 75,
    },

    drawerRows: {
        flex: 1,
        marginTop: 3,
        marginBottom: 3,
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 10,
    },

    topImage: {
        width: 300,
        height: 150,
        flexDirection: 'column',
    },

    circleBackground: {
        borderRadius: 35,
        overflow: 'hidden',
        backgroundColor: colorTheme,
        width: 70,
        height: 70,
    },

    splitIconAndInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
    },
});

module.exports = NavigationDrawer;
