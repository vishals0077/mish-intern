import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {ImageBrowser} from 'expo-image-picker-multiple'
import 'react-native-gesture-handler';
export default class ImageSelectionScreen extends React.Component {
  
  constructor(){
    super();
    this.state={
       hasCameraPermission: null,
       hasCameraRollPermission: null,
       seelctedPhotos:null
    }
  }

  imagesCallback = (callback) => {
    callback.then((photos) => {
     this.setState({seelctedPhotos:photos})
    }).catch((e) => console.log(e))
  };

  updateHandler = (count, onSubmit) => {
    console.log(' selected')
    
  };

  renderSelectedComponent = (number) => (
    <View style={styles.countBadge}>
      <Text style={styles.countBadgeText}>{number}</Text>
    </View>
  );

  render() {
    const emptyStayComponent = <Text style={styles.emptyStay}>No photos</Text>;
    const noCameraPermissionComponent = <Text style={styles.emptyStay}>Go to settings and provide access to camera to this app</Text>;
    
    return (
      <View style={[styles.flex, styles.container]}>
      <TouchableOpacity style={styles.ProceedButton} onPress={()=>this.props.navigation.navigate('Poll Page',{pickedPhotos:this.state.seelctedPhotos})}>
      <Text style={{fontSize:20, backgroundColor:'rgb(82, 156, 247)',padding:10,borderStyle:'solid',
     borderWidth:1,
     borderRadius:5}}>proceed</Text>
      </TouchableOpacity>
        <ImageBrowser
          max={10}
          onChange={this.updateHandler}
          callback={this.imagesCallback}
          renderSelectedComponent={this.renderSelectedComponent}
          emptyStayComponent={emptyStayComponent}
          noCameraPermissionComponent={noCameraPermissionComponent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  flex: {
    flex: 1
  },
  ProceedButton:{
    
    textAlign:'center',
    marginBottom:10,
    marginTop:35,
    marginLeft:10,
    padding:10,
    alignSelf:'flex-start',

  },
  container: {
    textAlign:'center',
    justifyContent:'center',
   
    position: 'relative'
  },
  emptyStay:{
    textAlign: 'center',
  },
  countBadge: {
    paddingHorizontal: 8.6,
    paddingVertical: 5,
    borderRadius: 50,
    position: 'absolute',
    right: 3,
    bottom: 3,
    justifyContent: 'center',
    backgroundColor: '#0580FF'
  },
  countBadgeText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 'auto',
    color: '#ffffff'
  }
});