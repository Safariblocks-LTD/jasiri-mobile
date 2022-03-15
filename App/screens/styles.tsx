import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
  container: {
    flex: 1, 
    padding: 16, 
    width: '100%', 
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#E3E8E7',
    justifyContent: 'space-between',
  },

  eclipseContainer: {
    top: 0,
    flexDirection: 'column'
  },
  ecslipe3: {
    width: 186,
    height: 163,
    overflow: 'hidden', 
    backgroundColor: '#403131', 
    top: -56, 
    left: -24, 
    position: 'absolute', 
    opacity: .09, 
    borderRadius: 130
  },
  eclipse2: {
    width: 186,
    height: 163,
    overflow: 'hidden', 
    backgroundColor: '#8E5858', 
    top: 0, 
    left: -59, 
    position: 'absolute', 
    opacity: .07, 
    borderRadius: 130
  },
  imageContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
      flexDirection: 'column',
    //   height: 250,
    width:"100%"
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center'
    },

  buttonTextBoxContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#3BD5C2',
    justifyContent: 'center',
    width: '80%',
    height: 42,
    borderRadius: 15,
  },
  
  account: {
    backgroundColor: '#3BD5C2',
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    fontStyle: 'normal',
  },
 
});
