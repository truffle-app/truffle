import React, { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import PageWrapper from './PageWrapper'
import { useLocation } from 'react-router-native'

const PostPage = () => {
    const location = useLocation()
    const { imageUrl, title } = location.state

    return (
        <PageWrapper headerText='Post' showBackButton={true}>
            <View style={styles.container}>
                <Image source={{ uri: imageUrl }} style={styles.postImage} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </PageWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    backButton: {
        marginBottom: 20
    },
    postImage: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }
})

export default PostPage
