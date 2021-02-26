import React from 'react';
import {Text,View, TouchableOpacity, StyleSheet,TextInput,Image} from 'react-native';

export default class writeStory extends React.Component{
constructor(){
    super();
    this.state={
        title:'',
        author:'',
        write:''
    }}
    render(){
        return(
            <View>
                <TextInput
                style={styles.textInput}
                placeholder="Title of the Story Here"
                value={this.state.title}
                />
                <TextInput
                style={styles.textInput}
                placeholder="Author of the Story Here"
                value={this.state.author}
                />
                <TextInput
                style={styles.textInput}
                multiline={true}
                placeholder="Write Story Here"
                value={this.state.write}
                />
                <TouchableOpacity style={styles.submit}>
                <Text>Submit</Text>
                </TouchableOpacity>


            </View>
        )
    }

}
const styles= StyleSheet.create({
    textInput:{
        width:200,
        height:30,
        margin:20,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderTopWidth:2,
        borderBottomWidth:2
    },
    submit:{
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 10,
        backgroundColor: '#081c61',
        width: 250,
        height: 70,
        marginTop: 100,
        paddingTop: 5,
    }
})