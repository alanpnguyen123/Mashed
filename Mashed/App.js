import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import img1 from './img/mashedLogo.png';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// splash screen
function Splash ( {navigation} ) {
  return (
    <View style={styles.splash}>
      <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
        <img src={img1} alt="Mashed Logo"/>
      </TouchableOpacity>
    </View>
  );
}

// sign up screen
function SignUp ( {navigation} ) {
  return (
    <View style={styles.splash}>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        <Text> Sign Up </Text>
      </TouchableOpacity>
    </View>
  );
}

// login screen
function Login ( {navigation} ) {
  return (
    <View style={styles.splash}>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <Text> Log In </Text>
      </TouchableOpacity>
    </View>
  );
}

// home screen
function Home ( {navigation} ) {
  return (
    <View style={styles.splash}>
      <TouchableOpacity>
        <Text> Home </Text>
      </TouchableOpacity>
    </View>
  );
}

// explore screen
function Explore ( {navigation} ) {
  return (
    <View style={styles.splash}>
        <Text> Explore </Text>
    </View>
  );
}

// challenges screen
function Challenges ( {navigation} ) {
  return (
    <View style={styles.splash}>
      <TouchableOpacity>
        <Text> Challenges </Text>
      </TouchableOpacity>
    </View>
  );
}

// profile screen
function Profile ( {navigation} ) {
  return (
    <View style={styles.splash}>
        <Text> Profile </Text>
    </View>
  );
}

// settings screen
// function Settings ( {navigation} ) {
//   return (
//     <View style={styles.splash}>
//         <Text> Settings </Text>
//     </View>
//   );
// }

// navigation and overall functions
const Tab = createBottomTabNavigator();

function App () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Splash" component={Splash} options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen name="SignUp" component={SignUp} options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen name="Login" component={Login} options={{
            tabBarStyle: { display: "none" },
            headerShown: false,
          }}
        />
        <Tab.Screen name="Home" component={Home} options={{
            headerShown: false,
            // tabBarIcon: () => <MaterialCommunityIcons name="home" size={30}/>
          }}
        />
        <Tab.Screen name="Explore" component={Explore} options={{
            headerShown: false,
            // tabBarIcon: () => <MaterialCommunityIcons name="compass" size={30}/>
          }}
        />
        <Tab.Screen name="Challenges" component={Challenges} options={{
            headerShown: false,
            // tabBarIcon: () => <MaterialCommunityIcons name="home" size={30}/>
          }}
        /> 
        <Tab.Screen name="Profile" component={Profile} options={{
            headerShown: false,
            // tabBarIcon: () => <MaterialCommunityIcons name="account" size={30}/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


// styling 
const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#9492ef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




export default App;