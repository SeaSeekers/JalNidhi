import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {

  // Example image URLs with corresponding website URLs
  const imageUrls = [
   
    { imageUrl: 'https://infinitylearn.com/surge/wp-content/uploads/2022/01/MicrosoftTeams-image-42.jpg', websiteUrl: 'https://infinitylearn.com/surge/wp-content/uploads/2022/01/MicrosoftTeams-image-42.jpg' },
    { imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGhpUYZj0XgBw/profile-displayphoto-shrink_800_800/0/1702571159603?e=1707955200&v=beta&t=17NnBHg5Aq_zFT2nWKjlSrJO0aSA4V_RhyiPULJiuFo', websiteUrl: 'https://www.linkedin.com/in/sea-seekers-5215232a5/' },
    { imageUrl: 'https://infinitylearn.com/surge/wp-content/uploads/2022/01/MicrosoftTeams-image-42.jpg', websiteUrl: 'https://infinitylearn.com/surge/wp-content/uploads/2022/01/MicrosoftTeams-image-42.jpg' },
    { imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGhpUYZj0XgBw/profile-displayphoto-shrink_800_800/0/1702571159603?e=1707955200&v=beta&t=17NnBHg5Aq_zFT2nWKjlSrJO0aSA4V_RhyiPULJiuFo', websiteUrl: 'https://www.linkedin.com/in/sea-seekers-5215232a5/' },
    { imageUrl: 'https://infinitylearn.com/surge/wp-content/uploads/2022/01/MicrosoftTeams-image-42.jpg', websiteUrl: 'https://infinitylearn.com/surge/wp-content/uploads/2022/01/MicrosoftTeams-image-42.jpg' },
    { imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGhpUYZj0XgBw/profile-displayphoto-shrink_800_800/0/1702571159603?e=1707955200&v=beta&t=17NnBHg5Aq_zFT2nWKjlSrJO0aSA4V_RhyiPULJiuFo', websiteUrl: 'https://www.linkedin.com/in/sea-seekers-5215232a5/' },
    { imageUrl: 'https://infinitylearn.com/surge/wp-content/uploads/2022/01/MicrosoftTeams-image-42.jpg', websiteUrl: 'https://infinitylearn.com/surge/wp-content/uploads/2022/01/MicrosoftTeams-image-42.jpg' },
    { imageUrl: 'https://media.licdn.com/dms/image/D4D03AQGhpUYZj0XgBw/profile-displayphoto-shrink_800_800/0/1702571159603?e=1707955200&v=beta&t=17NnBHg5Aq_zFT2nWKjlSrJO0aSA4V_RhyiPULJiuFo', websiteUrl: 'https://www.linkedin.com/in/sea-seekers-5215232a5/' },
    // Add more image URLs as needed
  ];

  const navigation = useNavigation();

  const handleImagePress = (websiteUrl) => {
    Linking.openURL(websiteUrl);
  };

  const handleSuggestionsPress = () => {
    // Navigate to the "Suggestions by Users" screen
    // Replace 'SuggestionsScreen' with the actual name of your suggestions screen component
    navigation.navigate('Suggestions');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>COMMUNITY</Text>
      </View>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>ARTICLES BY USER</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.articles}>
            {imageUrls.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleImagePress(item.websiteUrl)}
              >
                <Image source={{ uri: item.imageUrl }} style={styles.icon} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={handleSuggestionsPress}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>SUGGESTIONS BY USER</Text>
            <ScrollView style={styles.suggestionsContainer}>
              <Text style={styles.suggestionText}>
                "It'd be great if the app could provide real-time updates on the water quality in my area. Knowing the quality of the water I'm using is crucial."
                "It'd be great if the app could provide real-time updates on the water quality in my area. Knowing the quality of the water I'm using is crucial."
                "It'd be great if the app could provide real-time updates on the water quality in my area. Knowing the quality of the water I'm using is crucial."
              </Text>
            </ScrollView>
          </View>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <View style={styles.sideBySideContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>BLOGS</Text>
              <View style={styles.blogContainer}>
                {/* Placeholder for Blog content */}
                <Text style={styles.blogContent}>Blog Entry 1</Text>
                {/* Add more blog entries here */}
              </View>
            </View>
          </View>
          <View style={styles.sideBySideContainer}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>VIDEOS</Text>
              <View style={styles.videoContainer}>
                {/* Placeholder for Video content */}
                <View style={styles.videoPlaceholder}>
                  <Text style={styles.videoContent}>Video Title 1</Text>
                </View>
                {/* Add more video placeholders here */}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingTop: height * 0.02,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
  },
  sectionContainer: {
    marginBottom: height * 0.02,
  },
  sectionTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    padding: width * 0.03,
  },
  articles: {
    flexDirection: 'row',
    paddingLeft: width * 0.03,
  },
  suggestionText: {
    fontStyle: 'italic',
    padding: width * 0.03,
    backgroundColor: '#f0f0f0',
    marginHorizontal: width * 0.03,
    borderRadius: width * 0.02,
  },
  blogContainer: {
    paddingHorizontal: width * 0.03,
    height: height * 0.15,  // Adjusted height to match videoPlaceholder
    borderRadius: width * 0.02,  // Added borderRadius
    backgroundColor: '#eaeaea',  // Added background color
    marginBottom: height * 0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blogContent: {
    backgroundColor: '#eaeaea',
    marginBottom: height * 0.01,
    padding: width * 0.03,
    borderRadius: width * 0.02,
  },
  videoContainer: {
    paddingHorizontal: width * 0.03,
  },
  videoPlaceholder: {
    backgroundColor: '#eaeaea',
    marginBottom: height * 0.01,
    padding: width * 0.03,
    height: height * 0.15,
    borderRadius: width * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContent: {
    // Style for video title or content within the placeholder
  },
  icon: {
    width: width * 0.6,
    height: height * 0.2,
    borderRadius: width * 0.02,
  },
  suggestionsContainer: {
    maxHeight: height * 0.15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.03,
    paddingBottom: height * 0.02,
  },
  sideBySideContainer: {
    flex: 1,
  },
});

export default App;