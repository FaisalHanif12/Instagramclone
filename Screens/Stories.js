
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Users from './Users';


const user = [
    {
        username : 'Faisal',
        image : 
              require('../assets/Images/Faisal6.jpg'),
    },

    {
        username : 'Hassan',
        image : 
              require('../assets/Images/Hassan.jpg'),
    },

    {
        username : 'Umer',
        image : 
              require('../assets/Images/Faisal3.jpg'),
    },

    {
        username : 'Usama',
        image : 
              require('../assets/Images/Faisal4.jpg'),
    },

    {
        username : 'Jawad',
        image : 
              require('../assets/Images/Faisal5.jpg'),
    },

    {
        username : 'Adnan',
        image : 
              require('../assets/Images/Faisal7.jpg'),
    },

    {
        username : 'Ans',
        image : 
              require('../assets/Images/Faisal1.jpg'),
    },
];


export default function Stories()
{ 
    return(
        <View>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator = {false}
            >
                {user.map((story , index )=>(

                  <View   key = {index}
                  >
                   
                       <Image    source={story.image}

                       
                     style = {styles.story}
                     />
 
                     <Text style = {{color : 'white', marginLeft : 20}}>
                   
                        {story.username}

                    </Text>

                  </View>
                  
                ))}

             </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
     story : {
        width : 70 ,
        height : 70,
        borderRadius : 45,
        marginLeft : 10,
        borderWidth : 2,
        borderColor : '#ff8501',
     } 
}); 