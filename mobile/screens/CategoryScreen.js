import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const API_BASE_URL = 'http://your-rails-api-url';

export default function CategoryScreen({ route, navigation }) {
    const { category } = route.params;
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/category/${category}`);
                setPhotos(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPhotos();
    }, [category]);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{category}</Text>
            <FlatList
                data={photos}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.photoItem}
                        onPress={() => navigation.navigate('PhotoDetail', { photo: item })}
                    >
                        <Image source={{ uri: item.image_url }} style={styles.photoImage} />
                        <Text style={styles.photoTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
        textAlign: 'center',
    },
    photoItem: {
        flex: 1,
        margin: 8,
        alignItems: 'center',
    },
    photoImage: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    photoTitle: {
        marginTop: 8,
        textAlign: 'center',
    },
});
