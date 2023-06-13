import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/homePage';
import Game from "./screens/gamePage";
import Result from "./screens/resultsPage";

const stack = createNativeStackNavigator();

function AppNavigation(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Group>
                    <stack.Screen name="Home" component={Home} options={{headerShown:false}} />
                    <stack.Screen name="Game" component={Game} options={{headerShown:false}} />
                <stack.Screen name="Result" component={Result} options={{headerShown:false}} />
                </stack.Group>
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;