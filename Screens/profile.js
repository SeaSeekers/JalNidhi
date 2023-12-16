import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const navigation = useNavigation();

  // User data mock-up
  const userData = {
    username: 'Arshpreet Singh',
    email: 'Preeta5072@gmail.com',
  };

  // Navigation handlers
  const handleSignOut = () => {
    // Implement your sign-out logic here
    navigation.navigate('Welcome'); // Navigate to the login screen
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Ionicons name="notifications" size={24} color="#fff" style={styles.notificationIcon} /> */}
        <FontAwesome name="user-circle" size={24} color="#fff" />
        <Text style={styles.headerText}>User Account</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome back,</Text>
        <Text style={styles.usernameText}>{userData.username}!</Text>
        <Text style={styles.emailText}>Email: {userData.email}</Text>

        <TouchableOpacity onPress={handleSignOut} style={styles.button}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Information</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Faqs')} style={styles.button}>
          <Text style={styles.buttonText}>FAQs</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button}>
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => handleNavigation('ContactUs')} style={styles.button}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  notificationIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
    marginLeft: 2,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  usernameText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  emailText: {
    fontSize: 16,
    marginBottom: 4,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#3498db', // You can customize button colors
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AccountScreen;
