import React, { useState } from 'react';
import { View, StatusBar, FlatList, StyleSheet } from 'react-native';
import AbstractHeader from '../../../components/UI/Header';
import AbstractButton from '../../../components/UI/Button2';
import CartItem from '../../../components/UI/CartItem';

const FavoriteScreen = (props: any) => {
    const [products, setProducts] = useState<any>([
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
    ]);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#FEF3E4'} barStyle={'dark-content'} />
            {/* Header */}
            <AbstractHeader title={'Favourite'} />

            <FlatList
                style={{ marginLeft: 20, marginRight: 20 }}
                showsVerticalScrollIndicator={false}
                data={products}
                renderItem={({ item }) => <CartItem key={item.id} />}
                keyExtractor={item => item.id.toString()}
            />

            <View style={{ margin: 20 }}>
                <AbstractButton buttonText={'Order Now'} />
            </View>
        </View>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF3E4',
    },
});
