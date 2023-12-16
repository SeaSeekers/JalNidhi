//Not working right now will work to be in here api work needed 
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// import * as VisionService from './visionService';

export default function VisionScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [labels, setLabels] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      detectAndSetLabels(result.uri);
    }
  };

  const detectAndSetLabels = async (uri) => {
    try {
      const labelResults = await VisionService.detectLabels(uri);
      setLabels(labelResults);
    } catch (error) {
      console.error('Error detecting labels:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Select Image</Text>
      </TouchableOpacity>

      {imageUri && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />

          <Text style={styles.labelText}>Detected Labels:</Text>
          {labels.map((label, index) => (
            <Text key={index} style={styles.labelText}>{label.description}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 16,
    marginBottom: 5,
  },
});
