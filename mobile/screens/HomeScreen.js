import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const API_BASE_URL = 'http://your-rails-api-url';

export default function HomeScreen({ navigation }) {
    const [categories, setCategories] = useState([]);
    const [featuredPhotos, setFeaturedPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoriesRes, photosRes] = await Promise.all([
                    axios.get(`${API_BASE_URL}/categories`),
                    axios.get(`${API_BASE_URL}/photos`)
                ]);

                setCategories(categoriesRes.data.categories);
                setFeaturedPhotos(photosRes.data.slice(0, 5));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Featured Photos</Text>
            <FlatList
                horizontal
                data={featuredPhotos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('PhotoDetail', { photo: item })}>
                        <Image source={{ uri: item.image_url }} style={styles.featuredImage} />
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.title}>Categories</Text>
            <FlatList
                data={categories}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.categoryItem}
                        onPress={() => navigation.navigate('Category', { category: item })}
                    >
                        <Text style={styles.categoryText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 16,
    },
    featuredImage: {
        width: 200,
        height: 150,
        marginRight: 10,
        borderRadius: 8,
    },
    categoryItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    categoryText: {
        fontSize: 16,
    },
});
