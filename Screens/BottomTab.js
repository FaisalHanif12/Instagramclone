import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export const BottomTabarray=[
    {
        name : 'Home',
        iconurl : 
                 require('../assets/Images/home.png')
    },

    {
        name : 'Search',
        iconurl : 
                 require('../assets/Images/search.png')
    },

    {
        name : 'Reels',
        iconurl : 
                 require('../assets/Images/ReelsF.png')
    },


    {
        name : 'shop',
        iconurl : 
                 require('../assets/Images/shop2.png')
    },

    {
        name : 'profile',
        iconurl : 
                 require('../assets/Images/Faisal2.jpg')
    },
];

export default function BottomTab()
{
    return(
        <View style = {{flexDirection : 'row', marginTop : 10 , justifyContent : 'space-between'}}>
             {BottomTabarray.map((obj,index)=>(
           <TouchableOpacity 
           
           key={index} >

        <Image   style = {styles.icon}  
        
               source={obj.iconurl}/>
           

          
           </TouchableOpacity>

))}
        </View>
    )
}

const styles = StyleSheet.create({
      icon : {
         width : 33,
         height : 33,
         marginLeft : 20,
         borderRadius : 5
      }
});