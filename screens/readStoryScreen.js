import React from 'react';
import {Text,View, StyleSheet} from 'react-native';

export default class readStory extends React.Component{
    render(){
        return(
            <View>
                <Text>Read Story</Text>

            </View>
        )
    }
}
const styles=StyleSheet.create({
    story:{
        alignSelf:'center',
        marginTop:50
    }
})