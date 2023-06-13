import {useState, useEffect} from 'react';
import {View, Text, Image, Alert, TouchableOpacity,BackHandler} from 'react-native';


const Game = ({route, navigation}) => {
  const name1 = route.params.name1;
  const name2 = route.params.name2;

  let [table, setTable] = useState([
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ]);
  let [nowPlaying, setNowPlaying] = useState(1);
  let [playedTimes, setPlayedTimes] = useState(0);
  function checkValid(row, column) {
    if (table[row][column] == 'x' || table[row][column] == 'o') {
    } else {
      let symbol = nowPlaying == 1 ? 'x' : 'o';
      const currentTable = [...table];
      currentTable[row][column] = symbol;
      setTable(currentTable);
      checkBoard();
    }
  }
  function clearBoard() {
    const clearTable = [
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ];
    // setTable([]);
    setTable([
      ['1', '2', '3'],
      ['4', '5', '6'],
      ['7', '8', '9'],
    ]);
    setPlayedTimes(0);
  }
  function checkBoard() {

    let winFlag = false;
    // HORIZONTAL
    if (
      (table[0][0] == table[0][1] && table[0][1] == table[0][2]) ||
      (table[1][0] == table[1][1] && table[1][1] == table[1][2]) ||
      (table[2][0] == table[2][1] && table[2][1] == table[2][2])
    ) {
      winFlag = true;
    }
    // CROSS
    else if (
      (table[0][0] == table[1][1] && table[1][1] == table[2][2]) ||
      (table[0][2] == table[1][1] && table[1][1] == table[2][0])
    ) {
      winFlag = true;
    }

    // VERTICAL
    else if (
      (table[0][0] == table[1][0] && table[1][0] == table[2][0]) ||
      (table[0][1] == table[1][1] && table[1][1] == table[2][1]) ||
      (table[0][2] == table[1][2] && table[1][2] == table[2][2])
    ) {
      winFlag = true;
    }
    if (winFlag == true) {
      const resetAction = navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Result',
            params: {
              name1: name1,
              name2: name2,
              status: 'Win',
              winner: nowPlaying,
            },
          },
        ],
      });
      navigation.dispatch(resetAction);
    } else {
      setPlayedTimes(playedTimes + 1);
      nowPlaying == 1 ? setNowPlaying(2) : setNowPlaying(1);
      if (playedTimes == 8) {
        const resetAction = navigation.reset({
          index: 0,
          routes: [
            {
              name: 'Result',
              params: {
                name1: name1,
                name2: name2,
                status: 'Draw',
                winner: 0,
              },
            },
          ],
        });
        navigation.dispatch(resetAction);
      }
    }
    // }
  }
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
          'Are you sure?',
          'Do you really want to exit the game?',
        [
          { text: 'No', style: 'cancel', onPress: () => {} },
          { text: 'Yes', onPress: () => navigation.goBack() },
        ],
        { cancelable: false }
      );
      return true; // Prevent default back action
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
              nowPlaying == 1 ? {borderWidth: 2, borderColor: 'white'} : null,
            ]}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
              {name1}
            </Text>
            <Image
              source={require('../assets/x.png')}
              style={{height: 33, width: 33, marginTop: 10}}
            />
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
              nowPlaying == 2 ? {borderWidth: 2, borderColor: 'white'} : null,
            ]}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
              {name2}
            </Text>
            <Image
              source={require('../assets/o.png')}
              style={{height: 40, width: 40, marginTop: 10}}
            />
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 300,
            backgroundColor: '#624AC1',
            marginTop: 60,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {table.map((row, rowIndex) => (
            <View style={{flexDirection: 'row'}}>
              {row.map((col, colIndex) => {
                return (
                  <TouchableOpacity
                    onPress={() => checkValid(rowIndex, colIndex)}
                    style={{
                      height: 90,

                      backgroundColor: '#101032',
                      //   height: '100%',
                      // borderWidth: 2,
                      marginHorizontal: 5,
                      marginVertical: 5,
                      width: '30%',
                      borderRadius: 25,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {/* <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>{item}</Text> */}
                    {col != 'x' && col != 'o' ? null : (
                      <Image
                        source={
                          col == 'x'
                            ? require('../assets/x.png')
                            : require('../assets/o.png')
                        }
                        style={{height: 40, width: 40}}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Game;
