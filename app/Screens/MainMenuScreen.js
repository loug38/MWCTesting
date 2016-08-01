import React, {Component} from 'react';
import {StyleSheet, AppRegistry, Text, View,TouchableOpacity,
        Navigator, Dimensions, InteractionManager, ListView} from 'react-native';

//Custom Components
import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';
import ControlPanel from '../../app/Components/ControlPanel';

//packages
import Icon from 'react-native-vector-icons/FontAwesome';
import SpinKit from 'react-native-spinkit';
import Button from 'react-native-button';
import DrawerLayout from 'react-native-drawer-layout';

const colorTheme = '#007ACC';

//globals
const window = Dimensions.get('window');

const feedInfo = [
    {category: 'message', data: 'this is a test message', associatedContact: 'Hal Jordan', associatedContactJob: 'Claim Examiner'},
    {category: 'claim', data: 'you have a new claim', associatedContact: '', associatedContactJob: ''},
    {category: 'financial', data: 'you have a new paycheck coming in today', associatedContact: '', associatedContactJob: ''},
    {category: 'medical', data: 'you are running low on prescriptions', associatedContact: 'Avia', associatedContactJob: ''},
    {category: 'contacts', data: 'a new contact has been added', associatedContact: 'Barry Allen', associatedContactJob: 'Physician'},
];

//Main navigation for the app
class MainMenuScreen extends Component {

    //Necessary constructor for ListView. The code is really wonky,
    //because facebook still hasn't implemented a better syntax for
    //a listview but this does work completely, so don't worry about it
    //too much. Still easier than doing it natively.
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
        this.state ={
            feedDataSource: ds.cloneWithRows(feedInfo),
        };
    }

    _renderFeedRow(feedInfo){
        var icon = '';
        switch(feedInfo.category){
            case 'message':{
                icon = 'envelope';
                break;
            }
            case 'claim':{
                icon='legal';
                break;
            }
            case 'financial':{
                 icon='money';
                 break;
            }
            case 'medical':{
                icon='plus';
                break;
            }
            case 'contacts':{
                icon='user';
                break;
            }
        };

        return(
            //Each row has 3 parts:
            //Icon position/name InfoIcon (Pressable for more info)
            <View>
                <TouchableOpacity onPress={(event) => console.log('kk')}>
                    <Icon name={icon} size={25} style={styles.contactIcon} />
                    <Text> {feedInfo.data} </Text>
                </TouchableOpacity>
            </View>
        )
    }

    _navigateToMenuItem(menuItem){
        switch (menuItem) {
            case 'Contacts':
                this.props.navigator.push({ident: "Contacts",});
            case 'Financial':
                this.props.navigator.push({ident: "Financial",});
            case 'Message':
                this.props.navigator.push({ident: "Message",});
            case 'Medical':
                this.props.navigator.push({ident: "Medical"});
            case 'Message Center':
                this.props.navigator.push({ident: "Message Center"});
        };

    }

    render(){
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#ffffff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
                    In the drawer
                </Text>
            </View>
        );
        return(
            <DrawerLayout
                drawerWidth={300}
                drawerPosition={DrawerLayout.positions.left}
                ref={(drawer) => {return this.drawer = drawer}}
                renderNavigationView={() => navigationView}>
                <View>
                    <StatusBarFiller backgroundColor= {colorTheme} />
                    <View style={styles.mainMenuNavBar}>
                        <View style={styles.navBarTitleContainer}>
                            <Text style={styles.navBarTitle}>
                                Feed
                            </Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={(drawer) => this.drawer.openDrawer()}>
                                <Icon name='bars' size={20} style={styles.backIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ListView
                        dataSource={this.state.feedDataSource}
                        renderRow={(feedRow) => {return this._renderFeedRow(feedRow)}}
                    />
                </View>
            </DrawerLayout>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
    },

    mainMenuNavBar: {
        marginTop: 20,
        height: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: colorTheme,
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
        width: (window.width / 2) - 30,
    },

    images: {
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 25,
    },

    moddedImages: {
        paddingLeft: 35,
        paddingTop: 15,
        paddingRight: 25,
        paddingBottom: 25,
    },

    title: {
        alignSelf: 'center',
        color: '#888888',
        fontSize: 15,
    },

    navBarTitleContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    navBarTitle:{
        color: '#ffffff',
        fontSize: 20,
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 10,
    },

    backIcon:{
        color: '#ffffff',
        alignSelf: 'flex-start',
        width: 30,
        paddingLeft: 10,
    },
});

module.exports = MainMenuScreen;
