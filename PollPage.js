import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView, TextInput, TouchableOpacity,Image, FlatList,ScrollView } from 'react-native';
import Constants from 'expo-constants';


export default class PollPage extends React.Component {
  constructor(){
    super();
    this.state={
      previewVisible:'none',
      question:''
    }
  }
 render(){
   if(this.props.route.params===undefined)
   {
     this.setState({previewVisible:'none'})
      this.props.route.params={
    pickedPhotos:[]
  }
  
    
   }
  

 	return(
 		<View >
     <ScrollView>
 			<View style={styles.container}>
 				<Text style={styles.titlename}>Poll Question</Text>
 			</View>
 			 <View style={styles.question}>
	 		<TextInput 	
          ref="question"
          onChangeText={ (question)=>{
            
             this.setState({question})}}

	        placeholder="Add your poll question here" /> 
	 		</View>
	 		<View style={styles.SelectButton}>
	 		<TouchableOpacity 
       style={{flex:1,flexDirection:'row', justifyContent:'center', alignItems:'center'}}
       onPress={()=>
         {
           this.props.navigation.navigate('Image Selection Screen')
           this.setState({previewVisible:'block'})
         }}>
	 		<Text >Select photos</Text>
	 		</TouchableOpacity>
	 		</View>
       <FlatList
       numColumns={3}
       style={{marginTop:10, marginBottom:10}}
       data={this.props.route.params.pickedPhotos}

       extradata={this.state}
       renderItem={({item})=>(
         <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
          <Image
          
          source={{uri: item.localUri}}
          style={styles.images}
        />
        </View>
         )

     }
       />
       {
         this.state.previewVisible==='block' ?
       <View style={{marginLeft:'30%',
   borderStyle:'solid',
   marginBottom:'10%',
   height:40,   
   borderWidth:2,
   borderRadius:5,
   width:'30%',
   position:'relative',
   justifyContent: 'center',
    alignItems: 'center',
   backgroundColor:'rgb(3, 152, 252)',
   }}>
       <TouchableOpacity 
       style={{flex:1,flexDirection:'row', justifyContent:'center', alignItems:'center'  }}
       onPress={()=>this.props.navigation.navigate('Preview Screen',{pickedPhotos2:this.props.route.params.pickedPhotos,question:this.state.question})}>
       <Text >Preview</Text>
       </TouchableOpacity>
       
       </View>
       :
       null
     }
       </ScrollView>
 		</View>

 		);
 }
}

const styles = StyleSheet.create({
  
  container: {
    paddingTop: 40,
    position: 'relative',
    backgroundColor:'rgb(102, 252, 3)'

  },
  titlename:{
  	textAlign:'center',
  	padding:10,
  	fontSize:25
  },
 question:{
 	margin:30,
 	borderStyle:'solid',
 	height:40,
 	padding:10,
 	borderWidth:2,
 	borderRadius:5
 },
 SelectButton:{
 	marginLeft:'30%',
 	borderStyle:'solid',
 	height:40, 	
 	borderWidth:2,
 	borderRadius:5,
 	width:'30%',
 	position:'relative',
 	justifyContent: 'center',
    alignItems: 'center',
 	backgroundColor:'rgb(3, 152, 252)',
 },
 
 images:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    margin:2
 }
});










