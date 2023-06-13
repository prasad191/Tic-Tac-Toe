import {View, Text, TextInput, Image, TouchableOpacity,ToastAndroid} from 'react-native';
import {useState} from 'react';
const Home = ({navigation}) => {
  let [name1, Setname1] = useState('');
  let [name2, Setname2] = useState('');
  const displayToastWithGravityAndOffset = (msg) => {  
    ToastAndroid.showWithGravityAndOffset(  
      msg,
      ToastAndroid.LONG,  
      ToastAndroid.BOTTOM,  
      25,  
      50  
    );  
  };  
  function startGame() {
    if(name1.length == 0 || name2.length ==0){
      displayToastWithGravityAndOffset("Please Enter Names of Players");
    }else{
        navigation.navigate('Game',{
            'name1':name1,
            'name2':name2,
        })
    }
  }

  return (
    <View
      style={{backgroundColor: '#1A1D50', flex: 1, justifyContent: 'center'}}>
      <View style={{}}>
        <Text style={{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>
          Enter Names of Players
        </Text>
        <View style={{marginHorizontal: 35}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 25,
              alignItems: 'center',
              backgroundColor: '#101032',
              marginVertical: 15,
            }}>
            <Image
              source={require('../assets/x.png')}
              style={{height: 25, width: 25, marginLeft: 18}}
            />
            <TextInput
              style={{
                width: '100%',
                borderRadius: 20,
                paddingLeft: 20,
                flex: 1,
              }}
              value={name1}
              placeholder="Player One"
              onChangeText={text => Setname1(text)}
            />
          </View>
          <View
            style={{
              // flex:1,
              flexDirection: 'row',
              borderRadius: 25,
              alignItems: 'center',
              backgroundColor: '#101032',
            }}>
            <Image
              source={require('../assets/o.png')}
              style={{height: 30, width: 30, marginLeft: 15}}
            />
            <TextInput
              style={{
                width: '100%',
                borderRadius: 20,
                paddingLeft: 20,
                flex: 1,
              }}
              value={name2}
              placeholder="Player One"
              onChangeText={text => Setname2(text)}
            />
          </View>
          <TouchableOpacity style={{width:'100%',backgroundColor:'#0099CB',height:40,borderRadius:25,justifyContent:'center',alignItems:'center',marginTop:20}} onPress={() => startGame()}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
