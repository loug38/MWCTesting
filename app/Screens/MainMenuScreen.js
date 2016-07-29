import React, {Component} from 'react';
import {StyleSheet, AppRegistry, Text, View,TouchableOpacity,
        Navigator, Dimensions, InteractionManager} from 'react-native';

//Custom Components
import ViewContainer from '../../app/Components/ViewContainer';
import StatusBarFiller from '../../app/Components/StatusBarFiller';
import NavigationBar from '../../app/Components/NavigationBar';

//packages
import Icon from 'react-native-vector-icons/FontAwesome';
import SpinKit from 'react-native-spinkit';

const colorTheme = '#007ACC';

//globals
const window = Dimensions.get('window');

//Main navigation for the app
class MainMenuScreen extends Component {

    //Necessary constructor for ListView. The code is really wonky,
    //because facebook still hasn't implemented a better syntax for
    //a listview but this does work completely, so don't worry about it
    //too much. Still easier than doing it natively.
    constructor(props){
        super(props);
    }

    _navigateToMenuItem(menuItem){
        if (menuItem == "Contacts"){
            this.props.navigator.push({
                ident: "Contacts",
            });
        }

        if (menuItem == "Financial"){
            this.props.navigator.push({
                ident: "Financial",
            });
        }

        if (menuItem == "Message"){
            this.props.navigator.push({
                ident: "Message",
            })
        }

        if (menuItem == "Medical"){
            this.props.navigator.push({
                ident: "Medical",
            });
        }

        if (menuItem == "Message Center"){
            this.props.navigator.push({
                ident: "Message Center",
            });
        }
    }

    render(){
        return(
            <ViewContainer>
                <StatusBarFiller backgroundColor={colorTheme} />
                <NavigationBar   backgroundColor={colorTheme}
                                leftWord="Logout"
                                title="MainMenu"
                                rightWord=""
                                nav={this.props.navigator}/>
                <View style={styles.container}>

                    {/* Top Row */}
                    <View style={styles.rows}>
                        {/* Top Left */}
                        <TouchableOpacity onPress={(event) => this._navigateToMenuItem("Contacts")}>
                            <View style={styles.imgContainer}>
                                <Text style={styles.title}> Contacts </Text>
                                <Icon name='group' size={100} color={colorTheme} style={styles.images}/>
                            </View>
                        </TouchableOpacity>

                        {/* Top Right */}
                        <TouchableOpacity onPress={(event) => this._navigateToMenuItem("Financial")}>
                            <View style={styles.imgContainer}>
                                <Text style={styles.title}> Financial</Text>
                                <Icon name='money' size={100} color={colorTheme} style={styles.images}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Middle Row */}
                    <View style={styles.rows}>
                        {/* Middle Left */}
                        <TouchableOpacity onPress={(event) => this._navigateToMenuItem("Medical")}>
                            <View style={styles.imgContainer}>
                                <Text style={styles.title}> Medical </Text>
                                <Icon name='plus' size={100} color={colorTheme} style={styles.moddedImages}/>
                            </View>
                        </TouchableOpacity>

                        {/* Middle Right */}
                        <TouchableOpacity onPress={(event) => this._navigateToMenuItem("Calendar")}>
                            <View style={styles.imgContainer}>
                                <Text style={styles.title}> Calendar </Text>
                                <Icon name='calendar' size={100} color={colorTheme} style={styles.moddedImages}/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Bottom Row */}
                    <View style={styles.rows}>
                        {/* Bottom Left */}
                        <TouchableOpacity onPress={(event) => this._navigateToMenuItem("Claims")}>
                            <View style={styles.imgContainer}>
                                <Text style={styles.title}> Claims </Text>
                                <Icon name='legal' size={100} color={colorTheme} style={styles.images}/>
                            </View>
                        </TouchableOpacity>

                        {/* Bottom Right */}
                        <TouchableOpacity onPress={(event) => this._navigateToMenuItem("Message Center")}>
                            <View style={styles.imgContainer}>
                                <Text style={styles.title}> Messages </Text>
                                <Icon name='envelope' size={100} color={colorTheme} style={styles.images}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
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
});

module.exports = MainMenuScreen;
