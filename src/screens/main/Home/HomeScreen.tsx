import React, { useState } from 'react';
import { View, StatusBar, FlatList, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import constants from '../../../constants/constants';
import ProductItem from '../../../components/UI/ProductItem';

const HomeScreen = (props: any) => {
    const [products, setProducts] = useState([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ]);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={constants.secondary} barStyle={'dark-content'} />

            {/* Swiper */}
            <View style={{ height: 160 }}>
                <Swiper
                    loop={false}
                    showsButtons={false}
                    showsPagination={true}
                    paginationStyle={{ marginBottom: 0 }}
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
        backgroundColor: '#FEF3E4',
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
    imageStyle: { height: 160, width: '100%' },
});
