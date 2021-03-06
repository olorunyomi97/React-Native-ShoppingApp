import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Hello Biggs</Text>
			<Image 
				source={{uri: 'https://randomuser.me/api/portraits/women/3.jpg'}}
				style={styles.img}	
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex:1, 
		justifyContent:'center', 
		alignItems:'center'
	},

	text: {
		color: 'darkslateblue', 
		fontSize: 30
	},

	img: {
		width: 100,
		height: 100,
		borderRadius: 50
	}
});

export default App;