import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
      button: {
    alignItems: 'center',
    backgroundColor: '#E3E8E7',
    padding: 10,
    width: 300,
    margin: 5
    // marginTop: 16,
  },
  container: {
    // borderWidth: 1
  },
  head: {
    
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 22,
    textTransform: 'capitalize',
  },
  content: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // marginLeft: 20
  },
  categorty_header: {
    fontSize: 19, 
    fontWeight: 'bold', 
    textTransform: 'capitalize',
    marginLeft: 20
  },
  category_container: {
    flexDirection: 'column',
    width: '100%', 
    marginTop: 20
  },
  section: {
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 10
  },
  section_image: {
    width: '10%', 
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    paddingBottom: 5, 
    height: 50 
  },
  section_container: {
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '90%', 
    height: 50
  },
  section_body: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',  
    width: '100%', 
    padding: 10
  },
  image: {
    width: 26, 
    height: 26
  },
  section_footer: {
    flexDirection: 'column', 
    alignItems: 'center', 
    width: '90%', 
    height: 50, 
    marginLeft: 30
  },
  category_body: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  category_text: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    textTransform: 'capitalize'
  },
  category_divider: { 
    backgroundColor: 'grey',  
    height: 1,
    // borderWidth: 1
  },
  content_body: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20
  },
  content_main: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 20
  },
});