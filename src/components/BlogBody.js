import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BlogBody = ({
  title,
  body,
  onIconPress,
  id,
  showBody,
  showIcon,
  onPress
}) => {
  return (
    <View style={styles.BlogBodyContainer}>
      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <TouchableOpacity onPress={() => onPress('Show', { id })}>
          <Text style={styles.Title}>{title}</Text>
        </TouchableOpacity>
        {showIcon && (
          <TouchableOpacity onPress={() => onIconPress(id)}>
            <MaterialIcons
              name="delete"
              size={24}
              color="black"
              style={{ alignSelf: 'flex-end' }}
            />
          </TouchableOpacity>
        )}
      </View>
      {showBody && (
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            marginTop: 20,
            borderRadius: 5
          }}
        >
          <Text style={styles.Body}>{body}</Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  BlogBodyContainer: { backgroundColor: '#eeeeee', padding: 20 },
  Title: { fontSize: 18, fontWeight: 'bold' },
  Body: {}
})

export default BlogBody
