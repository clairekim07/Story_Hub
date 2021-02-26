import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text,View, TouchableOpacity, StyleSheet,TextInput,Image} from 'react-native';
import {createAppContainer, NavigationContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import readStoryScreen from './screens/readStoryScreen';
import writeStoryScreen from './screens/writeStoryScreen';
import { Header } from 'react-native-elements';

export default class App extends React.Component{
  render(){

  return (
    <View style={styles.container}>
      <Header
          backgroundColor={'#8CE2FF'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#081c61', fontSize: 16 },
          }}
        />
      <Container/>
      <StatusBar style="auto" />
    </View> 
  )}
}


const Navigator = createBottomTabNavigator({
  write:{screen:writeStoryScreen},
  read:{screen:readStoryScreen} 
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName;
      if(routeName === 'write'){
        return( <Image
          source={require('./assets/write.png')}
          style={{width:30, height:30}}                
          />)
      } else if (routeName === 'read'){
        return( <Image
          source={require('./assets/read.png')}
          style={{width:30, height:30}}
          />)
      }
      
    },
  })
})

const Container = createAppContainer(Navigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
