// Global Stylesheet
import { StyleSheet } from 'react-native';

/**************************** 
 HEX Colors 
--flickr-pink: #f72585ff;
--byzantine: #b5179eff;
--purple: #7209b7ff;
--purple-2: #560badff;
--trypan-blue: #480ca8ff;
--trypan-blue-2: #3a0ca3ff;
--persian-blue: #3f37c9ff;
--ultramarine-blue: #4361eeff;
--dodger-blue: #4895efff;
--vivid-sky-blue: #4cc9f0ff;
*****************************/



export default StyleSheet.create({
  blueText: {
    color: 'blue'
  },
  redText: {
    color: 'red'
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#fff'
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});
