import React from 'react';
import {StyleSheet, View, Modal, ActivityIndicator, Text} from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import LottieView from "lottie-react-native";

const Loader = (props) => {
  const {loading, ...attributes} = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {
        console.log('close modal');
      }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
            <LottieView
       source={require('../assets/jasiri_loader.json')}
        autoPlay
        loop
        style={styles.lottie}
    />
        </View>
      </View>
    </Modal>

   
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#000000',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#000000',
    height: 200,
    width: 200,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
    lottie: {
    width: 200,
    height: 200,
  },
});