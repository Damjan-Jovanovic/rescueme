import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {NativeBaseProvider,Box,Pressable,VStack,Text,Center,HStack,Divider,Icon} from "native-base";
const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <NativeBaseProvider>
      <Center>
        <Text mt="12" fontSize="18">
          This is {props.route.name} page.
        </Text>
      </Center>
    </NativeBaseProvider>
  );
}

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
function MyDrawer() {
  return (
    <NativeBaseProvider>
      <Box safeArea flex={1}>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Profile" component={Component} />
          <Drawer.Screen name="Home" component={Component} />
          <Drawer.Screen name="Setting" component={Component} />
          <Drawer.Screen name="Community" component={Component} />
          <Drawer.Screen name="Invite member" component={Component} />
          <Drawer.Screen name="Premium" component={Component} />
        </Drawer.Navigator>
      </Box>
    </NativeBaseProvider>
  );
}
export default MyDrawer
