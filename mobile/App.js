import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import PhotoDetailScreen from './screens/PhotoDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'FoodieSnap' }} />
                <Stack.Screen name="Category" component={CategoryScreen} />
                <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
