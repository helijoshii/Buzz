import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Share, Button, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=tesla&from=2024-09-10&sortBy=publishedAt&apiKey=5fcc7e55cdb243eba9162bf28d2a1661'
      );
      setNews(response.data.articles);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchNews(); // Fetch latest news
    setRefreshing(false); // Stop refreshing
  };

  useEffect(() => {
    fetchNews(); // Fetch news on component mount
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const shareArticle = async (title, url) => {
    try {
      const result = await Share.share({
        message: `Check out this article: ${title}\n${url}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Shared with activity type:', result.activityType);
        } else {
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View style={styles.newsItem}>
            {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <TouchableOpacity onPress={() => shareArticle(item.title, item.url)} style={styles.shareIcon}>
              <Icon name="share" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        )}
        refreshing={refreshing} // Add refreshing state
        onRefresh={onRefresh} // Add onRefresh function
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#efedf5',
  },
  newsItem: {
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#333',
  },
  shareIcon: {

    alignItems: 'flex-end',
  },
});

export default Home;
