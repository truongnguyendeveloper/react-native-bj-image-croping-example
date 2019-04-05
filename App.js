/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

import RNBJImageCroping from 'react-native-bj-image-croping'

export default App = () => {

  const [imageUri, setImageUri] = useState('')

  onTapImagePicker = () => {

    RNBJImageCroping.openImagePicker({
      type: 'library',
      aspectRatio: 'AspectRatio4x3',
      isCropping: true
    }).then(image => {
      setImageUri(image.uri)
    }, error => console.log(error))

  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        {
          imageUri !== '' &&
          <Image style={{ flex: 1 }} source={{ uri: imageUri }}></Image>
        }
      </View>
      <TouchableOpacity style={styles.button} onPress={() => this.onTapImagePicker()}>
        <Text style={{ textAlign: 'center' }}>GetImage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width*3/4,
    backgroundColor: 'orange',
    marginBottom: 0,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
