import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Text,
    FlatList,
    Image,
    ScrollView,
} from 'react-native';
// import {
//     BLACK_COLOR,
//     GREY_COLOR,
//     PRIMARY_COLOR,
//     SECONDARY_COLOR,
//     WHITE_COLOR,
// } from '../../Assets/themes/colors';

// import ProductItem from '../../Components/productItem';
// import Swiper from 'react-native-swiper';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import AbstractHeader from '../../Components/header';
// import { LARGE, MEDIUM } from '../../Assets/themes/fonts';
// import AbstractTextPicker from '../../Components/textPicker';

// import SmoothPicker from 'react-native-smooth-picker';
// import CartIcon from '../../../../assets/images/productDetail/cart.svg';
import Ripple from 'react-native-material-ripple';
import ReadMore from 'react-native-read-more-text';
import constants from '../../../constants/constants';
import AbstractButton from '../../../components/UI/Button2';
import CounterIcon from '@expo/vector-icons/FontAwesome5';

const dataCity = ['11', '22', '33', '44', '55', '66', '77', '88', '99', '00'];

const opacities = {
    0: 1,
    1: 1,
    2: 0.6,
    3: 0.3,
    4: 0.1,
};
const sizeText = {
    0: 20,
    1: 15,
    2: 10,
};

const Item = React.memo(({ opacity, selected, vertical, fontSize, name }) => {
    return (
        <View
            style={[
                styles.OptionWrapper,
                {
                    opacity,
                    borderColor: selected ? PRIMARY_COLOR : 'transparent',
                    height: selected ? 50 : 35,
                    width: selected ? 50 : 35,
                    marginTop: selected ? 0 : 7,
                },
            ]}>
            <Text style={{ fontSize }}>{name}</Text>
        </View>
    );
});

const ItemToRender = ({ item, index }, indexSelected, vertical) => {
    const selected = index === indexSelected;
    const gap = Math.abs(index - indexSelected);

    let opacity = opacities[gap];
    if (gap > 3) {
        opacity = opacities[4];
    }
    let fontSize = sizeText[gap];
    if (gap > 1) {
        fontSize = sizeText[2];
    }

    return (
        <Item
            opacity={opacity}
            selected={selected}
            vertical={vertical}
            fontSize={fontSize}
            name={item}
        />
    );
};

const DetailScreen = props => {
    const [products, setProducts] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ]);
    const [detail, setDetail] = useState(true);
    const [review, setReview] = useState(false);
    const [value, setValue] = useState(false);
    const [selected, setSelected] = useState(4);
    const refPicker = useRef(null);

    function handleChange(index) {
        setSelected(index);
        refPicker.current.scrollToIndex({
            animated: false,
            index: index,
            viewOffset: -30,
        });
    }
    const _renderTruncatedFooter = handlePress => {
        return (
            <Text style={{ color: PRIMARY_COLOR, marginTop: 5 }} onPress={handlePress}>
                Read more
            </Text>
        );
    };

    const _renderRevealedFooter = handlePress => {
        return (
            <Text style={{ color: PRIMARY_COLOR, marginTop: 5 }} onPress={handlePress}>
                Show less
            </Text>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={WHITE_COLOR} barStyle={'dark-content'} />

            <AbstractHeader title={'Details'} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ flexGrow: 1 }}>
                <View style={{ marginLeft: 20, marginRight: 20 }}>
                    {/* Swiper */}
                    <View style={{ height: 330 }}>
                        <Swiper
                            loop={false}
                            showsButtons={false}
                            showsPagination={true}
                            paginationStyle={{ marginBottom: 0 }}
                            dotColor={PRIMARY_COLOR}
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

                    {/* Content */}
                    <View style={styles.infoViewStyle}>
                        <Text style={styles.infoTextStyle}>Product Name</Text>
                        <Text style={[styles.infoTextStyle, { color: PRIMARY_COLOR }]}>
                            #5000
                        </Text>
                    </View>

                    {/* Size Picker and Quantity */}
                    <View style={{ height: 60, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <AbstractTextPicker
                                title={'Size'}
                                items={[
                                    {
                                        label: 'Size',
                                        value: 'Size',
                                    },
                                    { label: 'L', value: 'L' },
                                    {
                                        label: 'M',
                                        value: 'M',
                                    },
                                    {
                                        label: 'S',
                                        value: 'S',
                                    },
                                ]}
                                onSelect={pickerValue => setValue({ value: pickerValue })}
                            />
                        </View>
                        <View style={{ width: 50 }} />
                        <View style={{ flex: 1 }}>
                            <View style={styles.quantityViewStyle}>
                                <Text style={styles.quantityTextStyle}>Quantity</Text>
                                <View style={styles.counterViewStyle}>
                                    <CounterIcon
                                        onPress={() => {
                                            console.warn('increment');
                                        }}
                                        name={'plus'}
                                        size={15}
                                        color={PRIMARY_COLOR}
                                    />

                                    <Text style={styles.countTextStyle}>5</Text>

                                    <CounterIcon
                                        onPress={() => {
                                            console.warn('decrement');
                                        }}
                                        name={'minus'}
                                        size={15}
                                        color={PRIMARY_COLOR}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Color Picker */}
                    <View style={styles.colorPickerContainer}>
                        <View style={styles.wrapperHorizontal}>
                            <Text style={{ paddingRight: 15 }}>Color</Text>
                            <SmoothPicker
                                initialScrollToIndex={selected}
                                refFlatList={refPicker}
                                onScrollToIndexFailed={() => { }}
                                keyExtractor={(_, index) => index.toString()}
                                showsHorizontalScrollIndicator={false}
                                horizontal={true}
                                data={dataCity}
                                scrollAnimation
                                onSelected={({ item, index }) => handleChange(index)}
                                renderItem={option => ItemToRender(option, selected, true)}
                                magnet
                            />
                            <Icon
                                name="chevron-right"
                                size={20}
                                color={GREY_COLOR}
                                style={{ marginLeft: 15 }}
                            />
                        </View>
                        {/* <View>
            <Text>{`Your selection is ${dataCity[selected]}`}</Text>
          </View> */}
                    </View>

                    {/* Cart/Buy */}
                    <Text style={styles.cartTextStyle}>View Size Chart</Text>
                    <View style={{ height: 50, flexDirection: 'row' }}>
                        <View style={{ flex: 2 }}>
                            <AbstractButton
                                alignItems={'flex-start'}
                                buttonText={'Buy Now'}
                            />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Ripple
                                rippleCentered={true}
                                rippleContainerBorderRadius={5}
                                style={{
                                    height: 50,
                                    width: 70,
                                    borderColor: PRIMARY_COLOR,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <CartIcon />
                            </Ripple>
                        </View>
                    </View>

                    {/* Tabs */}
                    <View style={{ height: 40 }} />

                    <View style={styles.tabViewStyle}>
                        <TouchableOpacity
                            onPress={() => {
                                setDetail(true);
                                setReview(false);
                            }}
                            style={styles.buttonStyle}>
                            <Text
                                style={{
                                    color: detail ? BLACK_COLOR : GREY_COLOR,
                                    fontSize: 14,
                                    fontWeight: detail ? '500' : '300',
                                }}>
                                Details
                            </Text>
                            {detail && <View style={styles.underlineStyle} />}
                        </TouchableOpacity>

                        <View style={{ width: 50 }} />
                        <TouchableOpacity
                            onPress={() => {
                                setDetail(false);
                                setReview(true);
                            }}
                            style={styles.buttonStyle}>
                            <Text
                                style={{
                                    color: review ? 'black' : 'grey',
                                    fontSize: 14,
                                    fontWeight: review ? '500' : '300',
                                }}>
                                Reviews
                            </Text>
                            {review && <View style={[styles.underlineStyle, { width: 60 }]} />}
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 15 }} />

                    {/* Read More Text */}
                    <ReadMore
                        numberOfLines={3}
                        renderTruncatedFooter={_renderTruncatedFooter}
                        renderRevealedFooter={_renderRevealedFooter}
                    // onReady={this._handleTextReady}
                    >
                        <Text style={styles.text}>
                            Customer engagement software for omni channel customer
                            conversations on web, mobile and apps. Customer messaging platform
                            with all tools for real time engagement across Omni channel. Omni
                            Channel Messaging. Co-Browsing. Facebook Messenger.
                        </Text>
                    </ReadMore>

                    {/* Content */}
                    <View style={{ height: 50 }} />
                    <View style={[styles.infoViewStyle, { height: 40 }]}>
                        <Text style={styles.infoTextStyle}>Recomended Products</Text>
                        <Text
                            style={[
                                styles.infoTextStyle,
                                { color: PRIMARY_COLOR, fontWeight: '400' },
                            ]}>
                            View All
                        </Text>
                    </View>
                </View>

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
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: WHITE_COLOR,
    },

    infoViewStyle: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    infoTextStyle: { fontSize: LARGE, color: BLACK_COLOR, fontWeight: '500' },

    activeDotStyle: {
        backgroundColor: PRIMARY_COLOR,
        width: 10,
        height: 10,
        borderRadius: 50,
        margin: 4,
    },
    inActiveDotStyle: {
        backgroundColor: SECONDARY_COLOR,
        width: 7,
        height: 7,
        borderRadius: 50,
        margin: 4,
    },
    imageStyle: { height: '100%', width: '100%', borderRadius: 15 },
    quantityViewStyle: {
        width: '100%',
        borderWidth: 1.3,
        borderTopColor: WHITE_COLOR,
        borderRightColor: WHITE_COLOR,
        borderBottomColor: PRIMARY_COLOR,
        borderLeftColor: WHITE_COLOR,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    quantityTextStyle: {
        fontSize: MEDIUM,
        color: BLACK_COLOR,
    },
    counterViewStyle: {
        height: 30,
        width: 80,
        borderRadius: 3,
        backgroundColor: SECONDARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    countTextStyle: {
        fontSize: MEDIUM,
        fontWeight: 'bold',
        paddingRight: 12,
        paddingLeft: 12,
    },

    colorPickerContainer: {
        marginTop: 20,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperHorizontal: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    OptionWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 7,
        marginRight: 7,
        borderWidth: 1,
        borderRadius: 100,
    },
    cartTextStyle: {
        textAlign: 'right',
        color: PRIMARY_COLOR,
        fontWeight: '500',
        fontSize: MEDIUM,
        paddingBottom: 10,
        paddingTop: 15,
    },

    tabViewStyle: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonStyle: {
        height: 30,
        width: 'auto',
        justifyContent: 'center',
    },
    underlineStyle: {
        height: 3,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        alignSelf: 'center',
        marginTop: 3,
    },
    listStyle: {
        marginLeft: 20,
        marginRight: 20,
    },
});