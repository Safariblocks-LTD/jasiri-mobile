import { Platform, StatusBar } from "react-native";

const appStyles = {
  safeAreaContainer: {
    flex: 1,
    marginTop: Platform.OS === "android"
     ? StatusBar.currentHeight
     : 0
  },
  container: {
    flex: 1,
    padding: 8
  },
  paragraph: {
    marginBottom: 12
  }
};

export default appStyles;