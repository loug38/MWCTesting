/* Financial screen in progress.                                      *
 * navigator string: "Financial"                                      *
 * Copyright 2016 Lou George All Rights Reserved.                     */

import React, { Component } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

//custom compnents
import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBarDrawer from '../../app/Components/NavigationBarDrawer';
import NavigationDrawer from '../../app/Components/NavigationDrawer';

//packages
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerLayout from 'react-native-drawer-layout';

//globals
const colorTheme = '#009900';
const window = Dimensions.get('window');

class FinancialScreen extends Component{
    _renderDrawer(){
        return (<NavigationDrawer navigator={this.props.navigator} callingScreen={"News Feed"}/>);
    }

    render(){
        var navigationView = this._renderDrawer();
        return(
            <ViewContainer>
                <DrawerLayout
                    drawerWidth={300}
                    drawerPosition={DrawerLayout.positions.left}
                    ref={(drawer) => {return this.drawer = drawer}}
                    renderNavigationView={() => navigationView}>
                    <StatusBarFiller backgroundColor={colorTheme} />
                    <NavigationBarDrawer backgroundColor={colorTheme} title="Feed" action={() => this.drawer.openDrawer()} />

                    <View style={styles.container}>

                        {/* Top Row */}
                        <View style={styles.rows}>
                            {/* Top Left */}
                            <TouchableOpacity>
                                <View style={styles.imgContainer}>
                                    <Text style={styles.title}> Payments </Text>
                                    <Text style={styles.title}>   </Text>
                                    <Icon name='money' size={100} color='#aaaaaa' style={styles.images}/>
                                </View>
                            </TouchableOpacity>

                            {/* Top Right */}
                            <TouchableOpacity>
                                <View style={styles.imgContainer}>
                                    <Text style={styles.title}> Take Photo of </Text>
                                    <Text style={styles.title}> Documents </Text>
                                    <Icon name='camera' size={100} color='#aaaaaa' style={styles.images}/>
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Bottom Row */}
                        <View style={styles.rows}>
                            {/* Bottome Left */}
                            <TouchableOpacity>
                                <View style={styles.imgContainer}>
                                    <Text style={styles.title}> Request Driving </Text>
                                    <Text style={styles.title}> Reimbursement</Text>
                                    <Icon name='car' size={100} color='#aaaaaa' style={styles.images}/>
                                </View>
                            </TouchableOpacity>

                            {/* Bottome Right */}
                            <TouchableOpacity>
                                <View style={styles.imgContainer}>
                                    <Text style={styles.title}> Payments </Text>
                                    <Text style={styles.title}>   </Text>
                                    <Icon name='money' size={100} color='#aaaaaa' style={styles.images}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </DrawerLayout>
            </ViewContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
    },

    rows: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },

    imgContainer: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
    },

    images: {
        padding: 25,
    },

    title: {
        alignSelf: 'center',
        color: '#888888',
        fontSize: 15,
    }
});

module.exports = FinancialScreen;
