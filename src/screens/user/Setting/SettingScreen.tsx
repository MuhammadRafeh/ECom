import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    ScrollView,
    Image,
} from 'react-native';

import Ripple from 'react-native-material-ripple';
import MoonIcon from '../../Assets/icons/settingPage/moon.svg';
import EditIcon from '../../Assets/icons/settingPage/edit.svg';
import OrderIcon from '../../Assets/icons/settingPage/order.svg';
import NotificationIcon from '../../Assets/icons/settingPage/notification.svg';
import PaymentIcon from '../../Assets/icons/settingPage/payment.svg';
import LanguageIcon from '../../Assets/icons/settingPage/language.svg';
import HelpIcon from '../../Assets/icons/settingPage/help.svg';
import ReferalIcon from '../../Assets/icons/settingPage/referal.svg';
import TermsIcon from '../../Assets/icons/settingPage/terms.svg';
import PrivacyIcon from '../../Assets/icons/settingPage/privacy.svg';
import constants from '../../../constants/constants';
import AbstractHeader from '../../../components/UI/Header';
import SettingItem from '../../../components/user/Setting/SettingItem';
import { EXTRA_LARGE, LARGE, SMALL } from '../../../constants/fonts';

const SettingScreen = (props: any) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={constants.primary} barStyle={'light-content'} />
            {/* Header */}
            <AbstractHeader
                headerBgColor={constants.primary}
                iconColor={constants.secondary}
                title={'Settings'}
                titleColor={constants.secondary}
            />

            <ScrollView
                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}>
                {/* App Mode */}
                <View style={styles.modeMainViewStyle}>
                    <View style={styles.modeViewStyle1}>
                        <View style={styles.modeViewStyle2}>
                            <MoonIcon />
                        </View>
                    </View>
                </View>
                {/* Profile Data */}

                <View style={styles.profileMainViewStyle}>
                    <View style={styles.profileViewStyle1}>
                        <View style={styles.imageViewStyle}>
                            <View style={styles.imageCircleStyle}>
                                <Image
                                    source={{
                                        uri: 'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
                                    }}
                                    style={styles.imageStyle}
                                />
                            </View>
                        </View>
                        <View style={styles.bioViewStyle}>
                            <Text style={styles.nameTextStyle}>Cameron Williamson</Text>
                            <Text style={styles.viewProfileTextStyle}>View Profile</Text>
                        </View>
                        <View style={styles.editViewStyle}>
                            <Ripple
                                rippleCentered={true}
                                rippleContainerBorderRadius={50}
                                style={styles.rippleStyle}>
                                <EditIcon />
                            </Ripple>
                        </View>
                    </View>
                </View>
                {/* Content View */}
                <View style={{ height: 40, backgroundColor: constants.primary }} />
                <View style={styles.contentViewStyle}>
                    <SettingItem Element={() => <OrderIcon />} title={'My Orders'} />
                    <SettingItem
                        Element={() => <NotificationIcon />}
                        title={'Notifications'}
                        numOfAlerts={4}
                    />
                    <SettingItem
                        Element={() => <PaymentIcon />}
                        title={'Manage Address'}
                    />
                    <SettingItem
                        Element={() => <PaymentIcon />}
                        title={'Manage Payment'}
                    />
                    <SettingItem
                        Element={() => <LanguageIcon />}
                        title={'Change Language'}
                        changeLang={true}
                        langName={'English'}
                    />
                    <SettingItem Element={() => <HelpIcon />} title={'Help'} />
                    <SettingItem
                        Element={() => <ReferalIcon />}
                        title={'Referal'}
                        hideArrowNext={true}
                    />
                    <SettingItem
                        Element={() => <TermsIcon />}
                        title={'Rate App'}
                        hideArrowNext={true}
                    />
                    <SettingItem
                        Element={() => <TermsIcon />}
                        title={'Term of Use'}
                        hideArrowNext={true}
                    />
                    <SettingItem
                        Element={() => <PrivacyIcon />}
                        title={'Privacy Policy'}
                        hideArrowNext={true}
                    />

                    <View style={styles.logoutViewStyle}>
                        <Text style={styles.logoutTextStyle}>Logout</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF3E4',
    },
    modeMainViewStyle: {
        height: 40,
        backgroundColor: constants.primary,
    },
    modeViewStyle1: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginLeft: 20,
        marginRight: 20,
    },
    modeViewStyle2: {
        height: 25,
        width: 50,
        justifyContent: 'center',
        backgroundColor: constants.secondary,
        borderRadius: 50,
    },
    profileMainViewStyle: {
        height: 100,
        backgroundColor: constants.primary,
    },
    profileViewStyle1: {
        height: '100%',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
    },
    imageViewStyle: {
        width: 80,
        justifyContent: 'center',
    },
    imageCircleStyle: {
        height: 65,
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderColor: constants.secondary,
        borderWidth: 3,
    },
    imageStyle: {
        height: 60,
        width: 60,
        borderRadius: 100,
        alignSelf: 'center',
    },
    bioViewStyle: {
        flex: 2,
        justifyContent: 'center',
    },
    nameTextStyle: {
        color: constants.secondary,
        fontSize: LARGE,
        fontWeight: '500',
    },
    viewProfileTextStyle: {
        color: constants.secondary,
        fontSize: SMALL,
        fontWeight: '300',
        paddingTop: 7,
    },
    editViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rippleStyle: {
        height: 30,
        width: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAC57A',
    },
    contentViewStyle: {
        flex: 1,
        flexGrow: 1,
        borderRadius: 25,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: constants.secondary,
        bottom: 30,
    },
    logoutViewStyle: { height: 80, justifyContent: 'center', alignItems: 'center' },
    logoutTextStyle: {
        fontSize: EXTRA_LARGE,
        fontWeight: 'bold',
        color: constants.primary,
    },
});

