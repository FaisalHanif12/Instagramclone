
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity 
} from 'react-native';

export default function Header()
{ 
    return(
      <View style = {styles.container}>
      <TouchableOpacity>
            <Image  style = {styles.logo} 
             source ={require('../assets/Images/insta4.png')}
            />
        </TouchableOpacity>
          
      
        <View style = {styles.iconcontainer}>
        <TouchableOpacity>
        <Image  style = {styles.icon} 
             source ={require('../assets/Images/plus.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
        <Image  style = {styles.icon1} 
             source ={require('../assets/Images/heart.png')}
            />

       </TouchableOpacity> 
        

       <TouchableOpacity>
           <View style = {styles.unread}>
                  <Text style = {styles.unreadText}>
                    11
                  </Text>
           </View>
        <Image  style = {styles.icon} 
             source ={require('../assets/Images/chat2.png')}
            />
        
           </TouchableOpacity>
        </View>
     

        </View>
    );

}

const styles = StyleSheet.create({
          container: {
                 flexDirection : 'row',
                 justifyContent : 'space-between',
                 alignItems : 'center',
                 marginHorizontal : 5,
          },
          logo : {
            
            width : 125,
            height : 60,
            resizeMode : 'contain',
          
          },
          iconcontainer : {
             flexDirection : 'row',

          },
          icon : {
              width : 30,
              height : 30,
              resizeMode : 'contain',
              marginLeft : 3,
              marginTop : 25,
          },
          icon1 : {
             width : 100,
             height : 80,
             resizeMode : 'contain',
             marginBottom : 5,
          },
          unread : {
            backgroundColor : '#FF3250',
            position : 'absolute',
            left :15,
            bottom : 50,
            width : 20,
            height : 18,
            borderRadius : 30,
            alignItems : 'center',
            justifyContent : 'center',
            zIndex : 100,
          },
          unreadText : {
            color : 'white',
            fontWeight : '600',
          }
});