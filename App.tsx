import * as React from 'react';
import { View, Button, Dimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Animated, { FadeInLeft } from 'react-native-reanimated';

const Stack = createNativeStackNavigator();
const {width} = Dimensions.get('window')

function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* <Animated.View
        style={{ width: 150, height: 150, backgroundColor: 'green' }}
        sharedTransitionTag="sharedTag"
      /> */}
       <Animated.Text  entering={FadeInLeft.duration(400).delay(500)} style={{marginVertical: 50, fontSize: 19, paddingHorizontal: 100}}>
      The Serendipitous Symphony: Exploring the Unforeseen Harmonies of Life
      </Animated.Text>
       <Animated.Image source={{uri: 'https://t4.ftcdn.net/jpg/03/08/25/59/360_F_308255920_Hk8uUfEH4t4JpoiidNyxL02EKie8dONk.jpg'}} 
      style={{ width: width, height: 250}} resizeMode={'contain'} sharedTransitionTag="sharedTag" />
      <Button title="Screen2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      {/* <Animated.View
        style={{ width: width, height: 250, backgroundColor: 'red' }}
        sharedTransitionTag="sharedTag"
      /> */}
       <Animated.Image source={{uri: 'https://t4.ftcdn.net/jpg/03/08/25/59/360_F_308255920_Hk8uUfEH4t4JpoiidNyxL02EKie8dONk.jpg'}} 
      style={{ width: width, height: 250}} resizeMode={'contain'} sharedTransitionTag="sharedTag" />
      <Animated.Text entering={FadeInLeft.duration(400).delay(500)} style={{marginVertical: 50, fontSize: 19, paddingHorizontal: 100}}>
      The Serendipitous Symphony: Exploring the Unforeseen Harmonies of Life
      </Animated.Text>
      <Button title="Screen1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
}

export default function SharedElementExample() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}