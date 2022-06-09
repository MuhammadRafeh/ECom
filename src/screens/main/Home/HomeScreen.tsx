import React, { useState } from 'react';
import {
    View,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Text,
    FlatList,
    Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import MenuIcon from '../../../../assets/images/HomeScreen/menu.svg';
import constants from '../../../constants/constants';
import Icon from '@expo/vector-icons/FontAwesome5';
import ProductItem from '../../../components/UI/ProductItem';

const HomeScreen = (props: any) => {
    const [products, setProducts] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ]);
    const [popular, setPopular] = useState(true);
    const [viewed, setViewed] = useState(false);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FEF3E4'} barStyle={'dark-content'} />
            <View style={{ backgroundColor: '#FEF3E4' }}>
                <View style={{ height: 30 }} />
                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchViewStyle}>
                            <View style={styles.roundedTextInput}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Search"
                                    onChangeText={text => { }}
                                />

                                <View style={styles.dividerStyle} />
                                <TouchableOpacity style={styles.searchButtonStyle}>
                                    <Icon name="search" size={17} color={constants.grey} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.menuViewStyle}>
                            <MenuIcon />
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 20 }} />

                    <View style={styles.tabViewStyle}>
                        <TouchableOpacity
                            onPress={() => {
                                setPopular(true);
                                setViewed(false);
                            }}
                            style={styles.buttonStyle}>
                            <Text
                                style={{
                                    color: popular ? 'black' : 'grey',
                                    fontSize: 14,
                                    fontWeight: popular ? '500' : '300',
                                }}>
                                Popular
                            </Text>
                            {popular && <View style={styles.underlineStyle} />}
                        </TouchableOpacity>

                        <View style={{ width: 50 }} />
                        <TouchableOpacity
                            onPress={() => {
                                setPopular(false);
                                setViewed(true);
                            }}
                            style={styles.buttonStyle}>
                            <Text
                                style={{
                                    color: viewed ? 'black' : 'grey',
                                    fontSize: 14,
                                    fontWeight: viewed ? '500' : '300',
                                }}>
                                Recently Viewed
                            </Text>
                            {viewed && <View style={styles.underlineStyle} />}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ height: 25 }} />

            {/* Swiper */}
            <View style={{ height: 180, marginLeft: 20, marginRight: 20 }}>
                <Swiper
                    loop={false}
                    showsButtons={false}
                    showsPagination={true}
                    paginationStyle={{ bottom: -10 }}
                    dotColor={constants.primary}
                    dot={<View style={styles.inActiveDotStyle} />}
                    activeDot={<View style={styles.activeDotStyle} />}>
                    <Image
                        source={{ uri: 'https://wallpaperaccess.com/full/1209562.jpg' }}
                        style={styles.imageStyle}
                    />
                    <Image
                        source={{
                            uri: 'https://images3.alphacoders.com/823/thumb-1920-82317.jpg',
                        }}
                        style={styles.imageStyle}
                    />
                    <Image
                        source={{
                            uri: 'https://image.shutterstock.com/image-photo/full-hd-image-ladybird-on-260nw-1952398060.jpg',
                        }}
                        style={styles.imageStyle}
                    />
                    <Image
                        source={{ uri: 'https://wallpaperaccess.com/full/1209562.jpg' }}
                        style={styles.imageStyle}
                    />
                </Swiper>
            </View>
            <View style={{ height: 15 }} />
            <FlatList
                contentContainerStyle={{
                    justifyContent: 'space-evenly',
                }}
                numColumns={2}
                style={styles.listStyle}
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={({ item, separators }) => (
                    <ProductItem key={item.id} marginLeft={item.id % 2 == 0 ? 20 : 0} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: constants.secondary,
    },
    searchContainer: {
        height: 50,
        flexDirection: 'row',
    },
    searchViewStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    menuViewStyle: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    roundedTextInput: {
        backgroundColor: constants.secondary,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderColor: constants.primary,
        borderWidth: 1,
        opacity: 0.5,
    },

    textInput: {
        flex: 1,
        paddingLeft: 10,
    },
    dividerStyle: {
        height: 25,
        width: 1,
        backgroundColor: constants.grey,
        alignSelf: 'center',
    },
    searchButtonStyle: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabViewStyle: { height: 30, flexDirection: 'row' },
    buttonStyle: {
        height: 30,
        width: 'auto',
        justifyContent: 'center',
    },
    underlineStyle: {
        height: 3,
        width: 40,
        backgroundColor: constants.primary,
        alignSelf: 'center',
        marginTop: 3,
        borderRadius: 10,
    },
    listStyle: {
        marginLeft: 20,
        marginRight: 20,
    },
    activeDotStyle: {
        backgroundColor: constants.primary,
        width: 10,
        height: 10,
        borderRadius: 50,
        margin: 4,
    },
    inActiveDotStyle: {
        backgroundColor: '#FEF3E4',
        width: 7,
        height: 7,
        borderRadius: 50,
        margin: 4,
    },
    imageStyle: { height: 160, width: '100%', borderRadius: 15 },
});