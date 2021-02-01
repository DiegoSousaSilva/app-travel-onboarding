import React, {useEffect, useState} from 'react';
import { Animated, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Dots, Wrapper } from './styles';

// Constants
import {images, theme} from '../../constants';
const {onboarding1, onboarding2, onboarding3} = images;

// Theme
const {COLORS, FONTS, SIZES} = theme; 

// Dummy Data
const onBoardings = [
  {
    title: "Let's Travelling",
    description: "Lorem ipson dolor sit amet, consetetur sadipscing elitr,sed diam.",
    img: onboarding1,
    id: 1,
  },
  {
    title: "Navigation",
    description: "Lorem ipson dolor sit amet, consetetur sadipscing elitr,sed diam.",
    img: onboarding2,
    id: 2,
  },
  {
    title: "Destination",
    description: "Lorem ipson dolor sit amet, consetetur sadipscing elitr,sed diam.",
    img: onboarding3,
    id: 3,
  },    
] 

const Onboarding = () => {

 // const [completed, setCompleted] = useState(false);
  const scrollX = new Animated.Value(0);

/*   useEffect(()=>{
    //To check if user has finished scrolling the onboarding pages
    scrollX.addListener(({value}) =>{
      if(Math.floor(value / SIZES.width) === onBoardings.length -1){
        setCompleted(true)
      }
    });

    return () => scrollX.removeListener();
  },[]) */

  // Render
  function renderContent() {
    return (
      <Animated.ScrollView 
        decelerationRate={0}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {x: scrollX}}},
        ], {useNativeDriver: false})}
      >
      {
        onBoardings.map((item, index) => (
          <View key={index} style={{width: SIZES.width}}>
            {/* Image */}
            <View 
              style={{flex: 1, alignItems:'center', justifyContent: 'center' }}
            >
              <Image
                source={item.img}
                resizeMode='cover'
                style={{
                  width: '100%',
                  height: '100%'
                }} 
              />
            </View>

            {/* Text */}
            <View 
              style={{
                position: 'absolute',
                bottom: '10%',
                left: 40,
                right: 40
              }}
            >
              <Text style={{...FONTS.h1, color: COLORS.gray, textAlign: 'center'}}>{item.title}</Text>
              <Text style={{...FONTS.body3, textAlign: 'center', marginTop: SIZES.base, color: COLORS.gray}}>{item.description}</Text>
            </View>
        
          {/* Button */}
            <TouchableOpacity
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: COLORS.blue, 
                width: 150,
                height: 60,
                paddingLeft: 20,
                justifyContent: 'center',
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
              }}
              onPress={()=>{ 
               let dot = item.id < 3 ? `Proximo ${index}`: `Let's Go ${index}`;
                console.log(`Pressed ${dot}` );
              }
              }
            >
              <Text style={{...FONTS.h2, color: COLORS.white}}>
                {index == onBoardings.length - 1 ? "Let's Go" : "Skip"}
              </Text> 
            </TouchableOpacity>    
          </View>
        ))
      }
    </Animated.ScrollView>
    )
  };

  function renderDots() {

    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View style={styles.dotContainer}>
        {
          onBoardings.map((item, index) =>{
            const opacity = dotPosition.interpolate({
              inputRange: [index -1, index, index + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp' 
            });
            const dotSize = dotPosition.interpolate({
              inputRange: [index -1, index, index + 1],
              outputRange: [SIZES.base, 17, SIZES.base],
              extrapolate: 'clamp'           
            })
            return(
              <Animated.View 
                key={`dot-${index}`} 
                opacity={opacity}
                style={{
                  width: dotSize,
                  height: dotSize,
                  borderRadius: 12,
                  backgroundColor: COLORS.blue,
                  marginHorizontal: 6,
                }}
              >
              </Animated.View>
            )
          })
        }
      </View>
    )
  }

  return (
    <Wrapper>
      <View>
        {renderContent()}
      </View>

      <View style={{position: 'absolute', bottom: SIZES.height > 700 ? '25%' : '16%'}}>
        {renderDots()}
      </View>
    </Wrapper>
  )
};

export default Onboarding;
 
const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: 'row',
    height: SIZES.padding,
    alignItems: 'center',
    justifyContent: 'center'
  }
})