import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {NativeBaseProvider,Box,Pressable,VStack,Text,Center,HStack,Divider,Icon} from "native-base";
import {Image, StyleSheet, Alert, SafeAreaView, View} from "react-native";
import SwipeButton from 'rn-swipe-button';
import colors from '../config/colors';
import HomeScreen from './HomeScreen';
import InviteContactScreen from './InviteContactScreen';

const Drawer = createDrawerNavigator();

//Main function
function Component(props) {
  return (
      <Center>
          <Text mt="12" fontSize="18">
            This is {props.route.name} page. 
            User name ...
          </Text>
      </Center>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
  },
  swipebtn: {
    
  },
});


const getIcon = (screenName) => {
  switch (screenName) {
    case "Profile":
      return "email";
    case "Home":
      return "send";
    case "Community":
      return "heart";
    case "Setting":
      return "archive";
    case "Invite member":
      return "trash-can";
    case "Premium":
      return "alert-circle";
    default:
      return undefined;
  }
};

//Drawer component
function CustomDrawerContent(props) {
  return (
    <NativeBaseProvider>
      <DrawerContentScrollView {...props} safeArea>
        <VStack space="6" my="2" mx="1">
          <Box px="4">
            <Text bold color="gray.700">
              Mail
            </Text>
            <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
              john_doe@gmail.com
            </Text>
          </Box>
          <VStack divider={<Divider />} space="4">
            <VStack space="3">
              {props.state.routeNames.map((name, index) => (
                <Pressable
                  px="5"
                  py="3"
                  rounded="md"
                  bg={
                    index === props.state.index
                      ? "rgba(6, 182, 212, 0.1)"
                      : "transparent"
                  }
                  onPress={(event) => {
                    props.navigation.navigate(name);
                  }}
                >
                  <HStack space="7" alignItems="center">
                    <Icon
                      color={
                        index === props.state.index ? "primary.500" : "gray.500"
                      }
                      size="5"
                      as={<MaterialCommunityIcons name={getIcon(name)} />}
                    />
                    <Text
                      fontWeight="500"
                      color={
                        index === props.state.index ? "primary.500" : "gray.700"
                      }
                    >
                      {name}
                    </Text>
                  </HStack>
                </Pressable>
              ))}
            </VStack>
            <VStack space="5">
              <VStack space="3">
                <Pressable px="5" py="3" onPress={() => props.navigation.navigate("Connexion")}>
            
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialCommunityIcons name="bookmark" />}
                    />
                    <Text fontWeight="500" color="gray.700">
                      Upgrade now
                    </Text>
                  </HStack>
                </Pressable>
              </VStack>
            </VStack>

            <VStack space="5">
              <VStack space="3">
                <Pressable px="5" py="3" onPress={() => props.navigation.navigate("Connexion")}>
            
                  <HStack space="7" alignItems="center">
                    <Icon
                      color="gray.500"
                      size="5"
                      as={<MaterialCommunityIcons name="bookmark" />}
                    />
                    <Text fontWeight="500" color="gray.700">
                      Logout
                    </Text>
                  </HStack>
                </Pressable>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </DrawerContentScrollView>
    </NativeBaseProvider>
  );
}

//Navigation with drawer
function MyDrawer() {
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1}>
        <Drawer.Navigator
          drawerContent={(props, index) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Profile" component={Component} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Setting" component={Component} />
          <Drawer.Screen name="Community" component={Component} />
          <Drawer.Screen name="Invite member" component={InviteContactScreen} />
          <Drawer.Screen name="Premium" component={Component} />
        </Drawer.Navigator>
      </Box>
    </NativeBaseProvider>
  );
}
export default MyDrawer
