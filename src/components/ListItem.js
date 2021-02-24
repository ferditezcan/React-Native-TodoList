import React ,{Component}from 'react'
import {View,Text} from 'react-native'

export default class ListItem extends Component{

    render(){
        return(
            <View style={{width:'100%',height:35,alignItems:'center',borderBottomWidth:1,justifyContent:'center'}}>
                <Text style={{ fontSize: 21, fontStyle:'italic'}}>{this.props.ad}</Text>
            </View>
        )
    }
}