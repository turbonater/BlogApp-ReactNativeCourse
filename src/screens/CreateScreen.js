import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import BlogPostForm from '../components/BlogPostForm'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { addBlogPost } = useContext(Context)
  return (
    <View
      style={{
        paddingTop: 20,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>
        Create a BlogPost
      </Text>
      <BlogPostForm
        onSubmit={(title, body) => {
          addBlogPost(title, body, () => {
            navigation.navigate('Index')
          })
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default CreateScreen
