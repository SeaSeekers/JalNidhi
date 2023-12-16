//waterRecognitionScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as VisionService from './visionservice' ; // Your API call file
import ComplaintForm from './submit'; // Assuming the ComplaintForm file location

export default function IntegratedScreen() {
  const [imageUri, setImageUri] = useState(null);
  const [labels, setLabels] = useState([]);
  const [showImageRecognition, setShowImageRecognition] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      detectLabels(result.uri);
      setShowImageRecognition(true);
    }
  };

  const detectLabels = async (uri) => {
    try {
      const labelResults = await VisionService.detectLabels(uri);
      setLabels(labelResults);
    } catch (error) {
      console.error('Error detecting labels:', error);
    }
  };

  const handleToggleRecognition = () => {
    setShowImageRecognition(!showImageRecognition);
    // Clear image and labels when toggling off
    if (!showImageRecognition) {
      setImageUri(null);
      setLabels([]);
    }
  };

  return (
    <View style={styles.container}>
      {!showImageRecognition ? (
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Select Image</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.imageContainer}>
          <Image source={{ uri: imageUri }} style={styles.image} />

          <Text style={styles.labelText}>Detected Labels:</Text>
          {labels.map((label, index) => (
            <Text key={index} style={styles.labelText}>
              {label.description}
            </Text>
          ))}
          <TouchableOpacity onPress={handleToggleRecognition} style={styles.button}>
            <Text style={styles.buttonText}>Toggle Recognition</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Render ComplaintForm component */}
      <ComplaintForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});