import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddToCartScreen from '../../screens/main/AddToCart/AddToCartScreen';
import FavoriteScreen from '../../screens/main/Favorite/FavoriteScreen';
import HomeScreen from '../../screens/main/Home/HomeScreen';
import MenuScreen from '../../screens/main/Menu/MenuScreen';
import OptionsScreen from '../../screens/main/Options/OptionsScreen';

const Tab = createBottomTabNavigator();

function MainBottomTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
            <Tab.Screen name="Options" component={OptionsScreen} />
            <Tab.Screen name="AddToCart" component={AddToCartScreen} />
            <Tab.Screen name="Menu" component={MenuScreen} />
        </Tab.Navigator>
    );
}

export default MainBottomTabNavigator;