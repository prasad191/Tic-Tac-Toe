import {View, Text, Image, TouchableOpacity} from 'react-native';

const Result = ({route,navigation}) => {
  const name1 = route.params.name1;
  const name2 = route.params.name2;
  const winner = route.params.winner;

  return (
    <View
      style={{
        backgroundColor: '#1A1D50',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
      <View style={{marginHorizontal: 40, marginTop: 75}}>
        <View
          style={{
            flexDirection: 'row',
            height: 110,
            alignContent: 'stretch',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <View
            style={[
              {
                height: 100,
                backgroundColor: '#101032',
                height: '100%',
                width: 100,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              },
              winner == 1 ? {borderWidth: 2, borderColor: 'white'} : null,
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 10,
                color: 'white',
                fontSize: 15,
              }}>
              {name1}
            </Text>
            <Image
              source={require('../assets/x.png')}
              style={{height: 33, width: 33, marginTop: 10}}
            />
            <Text
              style={[
                {
                  fontWeight: 'bold',
                  marginTop: 5,
                  marginBottom: 10,
                  fontSize: 15,
                },
                winner == 1 ? {color: '#69ff4f'} : {color: 'pink'},
              ]}>
              {winner == 1 ? 'Winner' : 'Loser'}
            </Text>
          </View>
          <View
            style={[
              {
                height: 100,
                backgroundColor: '#101032',
                height: '100%',
                width: 100,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              },
              winner == 2 ? {borderWidth: 2, borderColor: 'white'} : null,
            ]}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 10,
                color: 'white',
                fontSize: 15,
              }}>
              {name2}
            </Text>
            <Image
              source={require('../assets/o.png')}
              style={{height: 40, width: 40, marginTop: 10}}
            />
            <Text
              style={[
                {
                  fontWeight: 'bold',
                  marginTop: 5,
                  marginBottom: 10,
                  fontSize: 15,
                },
                winner == 2 ? {color: '#69ff4f'} : {color: 'pink'},
              ]}>
              {winner == 2 ? 'Winner' : 'Loser'}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 300,
            backgroundColor: '#101032',
            marginTop: 60,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                { winner==0 ? 'Better luck next time' : 'WINNER'}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#69ff4f',
                  fontSize: 35,
                  fontWeight: 'bold',
                }}>
                {(winner == 0 ? "DRAW :(" : (winner == 1 ? name1 : name2))}
              </Text>
            </View>
          }
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: '#0099CB',
            height: 40,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}
          onPress={() => navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Home',
              }
            ],
          })}
          >
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Play Again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;
