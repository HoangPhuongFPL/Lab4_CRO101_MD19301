import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';

type ContactType = {
  name: string;
  email: string;
  position: string;
  photo: string;
};

const DATA: ContactType[] = [
  {
    name: 'Nguyễn Văn 1',
    email: '1@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
  {
    name: 'Nguyễn Văn 2',
    email: '2@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
  {
    name: 'Nguyễn Văn 3',
    email: '3@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
  {
    name: 'Nguyễn Văn 4',
    email: '4@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
  {
    name: 'Nguyễn Văn 5',
    email: '5@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
  {
    name: 'Nguyễn Văn 6',
    email: '6@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
  {
    name: 'Nguyễn Văn 7',
    email: '7@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
  {
    name: 'Nguyễn Văn 8',
    email: '8@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
  {
    name: 'Nguyễn Văn 9',
    email: '9@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
  {
    name: 'Nguyễn Văn 10',
    email: '10@gmail.com',
    position: 'Developer',
    photo: 'https://anhdepfree.com/wp-content/uploads/2020/11/hinh-nen-phong-canh-tinh-yeu.jpg',
  },
];

const ContactItem: React.FC<{ contact: ContactType }> = ({ contact }) => {
  return (
    <View style={styles.listItem}>
      {/* <Image source={{ uri: contact.photo }} style={styles.avatar} /> //khong hien thi anh dang tim cach fix */}

      <Image source={require('../assets/images/anh-meo-de-thuong-cute-nhat.jpg')} style={styles.avatar} />

      <View style={styles.bodyItem}>
        <Text style={styles.nameText}>{contact.name}</Text>
        <Text style={styles.emailText}>{contact.email}</Text>
        <Text style={styles.positionText}>{contact.position}</Text>
      </View>

      <Text style={styles.callText}>Call</Text>
    </View>
  );
};

const bt1 = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => <ContactItem contact={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bodyItem: {
    flex: 1,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  positionText: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
  },
  callText: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default bt1;