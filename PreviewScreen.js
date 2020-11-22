import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView, TextInput, TouchableOpacity,Image, FlatList,ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default class PreviewScreen extends React.Component{
	constructor(props){
		super(props);
		this.state={
			 selectedItem: null,
      		 renderData: props.route.params.pickedPhotos2
		}
	}

	 onPressHandler(id) {
    let renderData=[...this.state.renderData];
    for(let data of renderData){
      if(data.id==id){
        data.selected=(data.selected==null)?true:!data.selected;
        break;
      }
    }
    this.setState({renderData});
  }
	render(){
	
		return(
 		<View >
     	<ScrollView>
 			<View style={styles.container}>
 				<Text style={styles.titlename}>Poll Question</Text>
 			</View>
 			 <View style={styles.question}>
	 		<Text>{this.props.route.params.question}</Text>
	 		</View>
	 		
       		<FlatList       
       style={{marginTop:10, marginBottom:10}}
       data={this.state.renderData}
        keyExtractor={item => item.id}
       
       renderItem={({item})=>(
       	 <TouchableOpacity onPress={() => this.onPressHandler(item.id)}>
         <View  style={
                  item.selected==true
                    ? {
                        padding: 10,
                        
                        backgroundColor: 'rgb(167, 250, 181)',
                      }
                    : {
                        padding: 10,
                        
                        backgroundColor: '#fff',
                      }
                }>
          <Image
          
          source={{uri: item.localUri}}
          style={styles.images}
        />
        </View>
        </TouchableOpacity>
         )

     }
       />
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
       onPress={()=>this.props.navigation.navigate('Poll Page')}>
       <Text >Back</Text>
       </TouchableOpacity>
       
       </View>
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
 question:{
 	margin:30, 	
 	height:40,
 	padding:10,
 	 },
  titlename:{
  	textAlign:'center',
  	padding:10,
  	fontSize:25
  },
  images:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width:200,
    margin:20
 }
});










