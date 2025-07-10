import { View, Text, StyleSheet, Image } from 'react-native';

export default function PhotoDetailScreen({ route }) {
    const { photo } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: photo.image_url }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title}>{photo.title}</Text>
                <Text style={styles.category}>{photo.category}</Text>
                <Text style={styles.description}>{photo.description}</Text>
                <Text style={styles.likes}>{photo.likes} ❤️</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 300,
    },
    details: {
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    category: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
    },
    likes: {
        fontSize: 16,
        color: 'red',
    },
});
