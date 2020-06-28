import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ImageBackground,Image} from 'react-native';
import {Heart, ArrowLeft, Bookmark,MapPin} from '../components/icons';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
const Detail = ({route, navigation}) => {
  //const {travelId} = route.params;
const [recentImage,setRecentImage] = useState({
  uri:
    'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',
})
  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          'https://i.insider.com/58936e390849ec1a008b4619?width=800&format=jpeg&auto=webp',
      },
      title: 'Switzerland',
      key: '1',
    },
    {
      image: {
        uri:
          'https://www.newzealand.com/assets/Tourism-NZ/Fiordland/img-1536137761-110-7749-p-7ECF7092-95BD-FE18-6D4107E2E42D067E-2544003__aWxvdmVrZWxseQo_FocalPointCropWzQyMCw5NjAsNTAsNTAsNzUsImpwZyIsNjUsMi41XQ.jpg',
      },
      title: 'New Zeland',
      key: '2',
    },
    {
      image: {
        uri:
          'https://www.gazetebirlik.com/thumbmaker.php?src=https://www.gazetebirlik.com/modules/blog/dataimages/IMG_2979C6-CE7E2C-3AB7C2-AF0E5E-F80814-8E08EB.jpg&w=750&h=500&s=1&a=c',
      },
      title: 'Rome',
      key: '3',
    },
    {
      image: {
        uri:
          'https://i2.milimaj.com/i/milliyet/75/750x0/5e01e37e55427e08e81cd601',
      },
      title: 'Tahiti',
      key: '4',
    },
  ]);
useEffect(() => {
  
  // let travelId = JSON.stringify(route.params.travelId);
  // travelId = parseInt(travelId);
  // let myPic = gallery[travelId]
  // console.log(myPic)
 
})
  const goBack =()=>{
    navigation.goBack()
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={recentImage}
        style={styles.imageBgStyle}
        imageStyle={styles.imageStyle}>
        <Text style={styles.Tagline}>Discover Switzerland</Text>
        <Text style={styles.Placename}>
          Explore the scenic beauty of Switzerland
        </Text>
        <View style={{position: 'absolute', top: 40, left: 20}}>
          <TouchableOpacity
          onPress ={goBack}
            style={{
              backgroundColor: '#ff6200',
              padding: 10,
              borderRadius: 40,
              color: '#fff',
            }}>
            <ArrowLeft color="white" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', top: 40, right: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ff6200',
              padding: 10,
              borderRadius: 40,
              color: '#fff',
            }}>
            <Heart color="white" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', bottom: -20, right: 20}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#ff6200',
              padding: 10,
              borderRadius: 40,
              color: '#fff',
            }}>
            <Bookmark color="white" size={24} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <ScrollView>
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionContent}>
            Venice is unique environmentally, architecturally, and historically,
            and in its days as a republic the city was styled la serenissima
            (“the most serene” or “sublime”). It remains a major Italian port in
            the northern Adriatic Sea and is one of the world's oldest tourist
            and cultural centres. Since the fall of the Venetian republic in
            1797, the city has held an unrivaled place in the Western
            imagination and has been endlessly described in prose and verse. 
            
            The luminous spectacle of ornate marbled and frescoed palaces, bell
            towers, and domes reflected in the sparkling waters of the lagoon
            under a blue.
          </Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            {gallery.map(x => {
              return (
                <View style={{paddingLeft: 16}} key={x.key}>
                  <View>
                    <Image
                      source={x.image}
                      style={{
                        width: 150,
                        height: 250,
                        marginRight: 14,
                        borderRadius: 10,
                      }}
                    />
                    <View style={styles.ImageOverlay} />
                    <MapPin
                      color="white"
                      size={16}
                      style={styles.imageLocatianIcon}
                    />
                    <Text style={styles.ImageText}> {x.title} </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  imageBgStyle: {
    height: 380,
    justifyContent: 'flex-end',
  },
  Tagline: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginVertical: 6,
  },
  Placename: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 14,
    marginBottom: 30,
  },
  descriptionView: {
    padding: 15,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionContent: {
    fontSize: 18,
    fontWeight: 'normal',
    opacity: 0.5,
  },
  ImageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.3,
    borderRadius: 10,
  },imageLocatianIcon: {
    position: 'absolute',
    marginTop: 4,
    left: 10,
    bottom: 10,
  },
  ImageText: {
    position: 'absolute',
    color: 'white',
    marginTop: 4,
    fontSize: 14,
    left: 35,
    bottom: 10,
  },
});
export default Detail;
