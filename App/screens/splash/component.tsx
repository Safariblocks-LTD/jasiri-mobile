//Splash Screen
// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Image,
  Text
} from 'react-native';
import { styles } from "./styles";
import Loader from '../../components/loading';
import AsyncStorage from "@react-native-async-storage/async-storage";
import routes from '../../navigation/routes';

const Splash = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('accountData').then((value) =>{
        console.log(value)
        if(value){
          navigation.navigate(routes.LOGIN)
         
        }
        else{
          navigation.navigate('Home')
        }
        
      }).catch(err=>navigation.navigate(routes.HOME));
      
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/jasiri_1.gif')}
        style={{width: '80%', resizeMode: 'contain', margin: 30}}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
      {/* <Loader loading={true}/> */}
    </View>
  );
};

export default Splash;

