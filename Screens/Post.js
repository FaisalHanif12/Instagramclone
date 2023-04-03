
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Users from './Users';
import { Divider } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';



 export const user = [
    {
        username : 'Hassan',
        image : 
               
        require('../assets/Images/Hassan.jpg'),
    },

    {
        username : 'Faisal Hanif',
        image : 
              require('../assets/Images/Faisal2.jpg'),
    },

    {
        username : 'Faisal1',
        image : 
              require('../assets/Images/Faisal3.jpg'),
    },

    {
        username : 'Faisal2',
        image : 
              require('../assets/Images/Faisal4.jpg'),
    },

    {
        username : 'Ehsan',
        image : 
              require('../assets/Images/Faisal5.jpg'),
    },

    {
        username : 'Adnan',
        image : 
              require('../assets/Images/Faisal6.jpg'),
    },

    {
        username : 'Ans',
        image : 
              require('../assets/Images/Faisal7.jpg'),
    },
];

const Postfootericon = [
    {name : 'Likes',
       
      Imagepost : require('../assets/Images/heart.png'),


    },

    {name : 'comment',
       
    Imagepost : require('../assets/Images/comment.png'),

    
    },

    {name : 'share',
       
    Imagepost : require('../assets/Images/share.png'),

    
    },

    {name : 'Saved',
       
    Imagepost : require('../assets/Images/save.png'),

    
    },
];


export const postdata = [

    {Imageurl : 
        require('../assets/Images/Faisal10.jpg'),
user : user[1].username,
likes : 4869,
caption : 'Attitude Buil Personality',
profilepic : user[1].image,

Comments : [

{
  userss : 'Hassan',
  Comment :

 'Wow This is Really Awesome',
},

{
 userss : 'Abdul Rehman',
 Comment :

'Absouletely Amazing I did not see ever such an amazing Picture',
},

],

},

 
];


export default function Post(post)
{ 
    return(
        <View style = {{marginBottom : 20}}>
        <View style = {styles.divide}>
        </View>
         
         <PostHeader  post = {post}/>
 
         <Postimage/>
        
          <Postfooter />
    
           <Likes/>

           <Comment/>
             <View style = {{marginBottom : 10}}>
             <Comment1/>
             </View>
          
           <PostHeader  post = {post}/>

           <Postimage1/>

           <Postfooter />

           <Likes1 />

           <CommentSec />

           <Comment1 />
         
        </View>

    );
}


const PostHeader =(post)=>{
    return (
        <View style = {{ 
                    justifyContent : 'space-between',
                    flexDirection : 'column',
                    alignItems : 'flex-start',
                    margin : 0,
          }}>
          
             {postdata.map((post , index)=>(
     
               <View   key={index} style = {{flexDirection : 'row', alignItems : 'center',}}>
                    <Image 
                   
                    source={post.profilepic}
                    
                  // source= {require('../assets/Images/Faisal3.jpg')}
                     style = {styles.story}
                     
            />

           

<Text style = {{color : 'white', fontWeight : '500', marginLeft : 10, marginBottom : 40}}>
    {post.user}
    </Text>

       <Text style = {{color : 'white',marginLeft:250,marginBottom:45, fontWeight : '900'}}>
            ...
        </Text>

        </View>

 ))}
       
     </View>

    );
};

const Postimage = () =>{
    return (
        <View style = {{marginTop : -40}}>

        
        <Image   
        
          source={require('../assets/Images/Faisal3.jpg')} 
          
            style = {{width : '100%', resizeMode : 'cover', height : 450}}/>
          </View>
    )
}


const Postimage1 = () =>{
    return (
        <View style = {{marginTop : -40}}>

        
        <Image   
        
          source={require('../assets/Images/Faisal4.jpg')} 
          
            style = {{width : '100%', resizeMode : 'cover', height : 450}}/>
          </View>
    )
}

const Postfooter = () =>{
    return (
        <View style = {{flexDirection : 'row'}}>
             <Iconss   imagestyle={styles.footer}
         Imageurl = {Postfootericon[0].Imagepost}
        />
         <Iconss   imagestyle={styles.footer1}
         Imageurl = {Postfootericon[1].Imagepost}
        />
         <Iconss   imagestyle={styles.footer2}
         Imageurl = {Postfootericon[2].Imagepost}
        />

        <View style = {{flex : 1 , alignItems : 'flex-end'}}>
        <Iconss   imagestyle={styles.footer2}
         Imageurl = {Postfootericon[3].Imagepost}
        />
        </View>
        </View>
       
    )
}

const Iconss =({imagestyle , Imageurl})=>{
    return(
        <TouchableOpacity>
            <Image  style = {imagestyle}
            source = {Imageurl}/>
        </TouchableOpacity>
    )
}

const Likes =()=>{
    return(
        <View style = {{marginLeft : 10 }}>
            <Text style = {{color : 'white', fontWeight : '600'}}>
                100650 Likes
            </Text>
        </View>
    )
}


const Likes1 =()=>{
    return(
        <View style = {{marginLeft : 10 }}>
            <Text style = {{color : 'white', fontWeight : '600'}}>
                50956 Likes
            </Text>
        </View>
    )
}

const Comment = ()=>{
    return(
        <View style = {{flexDirection : 'row', marginLeft : 10, marginTop : 4}}>
            <Text style = {{color : 'white', fontWeight : '600'}}>
                Faisal Hanif
            </Text> 
            <Text style = {{color : 'white', marginLeft : 20 }}>
                "Attitude Buil Personality"
            </Text>
           
        </View>
    )
}



const CommentSec = ()=>{
    return(
        <View style = {{flexDirection : 'row', marginLeft : 10, marginTop : 4}}>
            <Text style = {{color : 'white', fontWeight : '600'}}>
                Faisal Hanif
            </Text> 
            <Text style = {{color : 'white', marginLeft : 20 }}>
                "Challenges Always Make You Stronger"
            </Text>
           
        </View>
    )
}

const Comment1 =()=>{
    return(
    <View style = {{marginLeft : 10}}>
        <Text style ={{color : 'gray'}}>
            View all Comments
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
     divide : {
        marginTop : 0,
        flexDirection :'row',
        color : 'white',
        borderWidth : 1,
        borderColor : 'white',
        width : '100%',
        height : 0,
     },
     story : {
        width : 40,
        height : 40,
        borderRadius : 45,
        marginLeft : 10,
        borderWidth : 2,
        borderColor : '#ff8501',
        marginTop : 10,
        marginBottom : 50,
     }, 
     footer : {
       width : 60,
       height : 60,
     },
     footer1 : {
        width : 45,
        height : 45,
        marginLeft : 3,
        marginTop : 8
      },
      footer2 : {
        width : 25,
        height : 25,
        marginLeft : 16,
        marginTop : 20,
      },
});