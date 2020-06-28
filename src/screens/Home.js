import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Search, Menu, Bell, MapPin} from '../components/icons';

const Home = ({navigation}) => {
  const goToDetail = (id) => {
    navigation.navigate('Detail',{travelId :id});
  };
  const image = {
    uri:
      'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  };

  const recentImage = {
    uri:
      'https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  };

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

  return (
    <View style={{flexGrow: 1, height: '100%'}}>
      <StatusBar barStyle='light-content' />
      <View>
        <ImageBackground
          source={image}
          style={styles.backgroundImage}
          imageStyle={{borderBottomRightRadius: 65}}>
          <View style={styles.darkOverlay} />
          <View style={styles.searchContainer}>
            <Text style={styles.userGreet}>Hi ,Akshay</Text>
            <Text style={styles.userText}>
              Where would you like to go today ?
            </Text>
          </View>
          <View>
            <TextInput
              style={styles.searchBox}
              placeholder="Search Destination"
              placeholderTextColor="#666"
            />
            <Search size="22" color="#666" style={styles.searchIcon} />
          </View>
          <Menu color="#fff" style={styles.menuIcon} />
          <Bell color="#fff" style={styles.notifIcon} />
        </ImageBackground>
      </View>
      <ScrollView style={{paddingBottom: 60}}>
        <View style={{padding: 16}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>Top Trending</Text>
        </View>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            {gallery.map(x => {
              return (
                <View style={{paddingLeft: 16}} key={x.key}>
                  <TouchableOpacity onPress={()=>goToDetail(x.key)}>
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
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View>
          <View
            style={{
              padding: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>
              Recently Viewed
            </Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#ff6200'}}>
              View All
            </Text>
          </View>

          <Image
            source={recentImage}
            style={{
              width: '92%',
              height: 250,
              borderRadius: 10,
              alignSelf: 'center',
            }}
          />
          <View style={{position: 'absolute', bottom: 0, padding: 16}}>
            <View style={{flexDirection: 'row'}}>
              <MapPin
                color="white"
                size={20}
                style={{marginLeft: 10, position: 'relative', top: 4}}
              />
              <Text
                style={{
                  fontSize: 22,
                  color: 'white',
                  fontWeight: 'normal',
                  marginBottom: 10,
                  marginHorizontal: 10,
                }}>
                Venice
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'white',
                fontWeight: 'normal',
                marginBottom: 4,
                marginLeft: 16,
                opacity: 0.7,
              }}>
              Venice ,the capital of northern Italy's Veneto Region in the
              Adriatic Sea
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: 270,
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    backgroundColor: '#000',
    opacity: 0.2,
    borderBottomRightRadius: 65,
  },
  userGreet: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
  },
  userText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'white',
  },
  searchContainer: {
    paddingTop: 100,
    paddingLeft: 16,
  },
  searchBox: {
    marginTop: 16,
    backgroundColor: '#fff',
    paddingLeft: 24,
    padding: 12,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    width: '90%',
  },
  searchIcon: {
    position: 'absolute',
    top: 25,
    right: 60,
    opacity: 0.6,
  },
  menuIcon: {
    position: 'absolute',
    top: 40,
    left: 16,
  },
  notifIcon: {
    position: 'absolute',
    top: 40,
    right: 16,
  },
  ImageOverlay: {
    width: 150,
    height: 250,
    marginRight: 8,
    position: 'absolute',
    backgroundColor: '#000',
    opacity: 0.2,
    borderRadius: 10,
  },
  imageLocatianIcon: {
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
export default Home;
