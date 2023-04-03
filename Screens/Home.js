
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from './Header';
import Post from './Post'
import Stories from './Stories';
import Users from './Users';
import BottomTab from './BottomTab';


export default function Home()
{ 
    return(
        <View style = {styles.container}>
           <Header/>
           <Stories/>
           <Users />
           <ScrollView >
           <Post/>
           </ScrollView>
           <BottomTab/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'black',
    }
});