import React, { Component } from 'react'
import { TextInput, View, StyleSheet, Button, Text, Image} from 'react-native'
import ListItem from './src/components/ListItem'
export default class Index extends Component {

    state = {
        inputAd: '',
        list: []
    }

    onChangeText(text) {
        this.setState({
            inputAd: text,
        })
    }

    kaydet() {
        let yeniList = this.state.list
        yeniList.push(this.state.inputAd)

        this.setState({ list: yeniList,inputAd:'' })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={{
                            uri: 'http://www.ferditezcan.cf/assets/img/dene/xxx.png',
                        }}
                        style={{ width: 160, height: 160 }}
                    />
                    <Text style={{ fontSize: 30 }}>Ferdi Tezcan</Text>
                    <TextInput
                        style={{
                            height: 40,
                            fontSize: 20,
                            borderColor: 'black',
                            borderWidth: 1,
                            width: '80%',
                            borderRadius: 16
                        }}
                        onChangeText={(text) => this.onChangeText(text)}
                        value={this.state.inputAd}
                    />
                    <Button
                        title="kaydet"
                        onPress={() => this.kaydet()}
                    />
                </View>
                
                <View style={styles.content}>

                    {
                        this.state.list.map((item, index) => {
                            return <ListItem key={index} ad={item} />
                        })

                    }
                </View>
                
            </View>
        
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'snow'
    },
    header: {
        flex: 0.45,
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 0.55,
    }
})
