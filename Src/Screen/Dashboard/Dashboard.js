import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../../Components/Header';
import {SPACING} from '../../Utils/Theme';
import styles from './styles';
import NavigationName from '../../Navigation/NavigationName';

const Card = ({title, value}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );
};

const orders = [
  {
    id: '1',
    person: 'John Doe',
    medicines: [
      {name: 'Paracetamol', quantity: 2, totalCost: '$10'},
      {name: 'Ibuprofen', quantity: 1, totalCost: '$8'},
    ],
    deliveryDate: '2025-04-05',
    total: '$18',
    expanded: true,
  },
  {
    id: '2',
    person: 'Jane Smith',
    medicines: [
      {name: 'Amoxicillin', quantity: 1, totalCost: '$15'},
      {name: 'Cetirizine', quantity: 2, totalCost: '$8'},
    ],
    deliveryDate: '2025-04-06',
    total: '$23',
    expanded: false,
  },
];

const OrderItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.orderItem}>
      <Text style={{...styles.orderText, fontWeight: 'bold'}}>
        {item.person}
      </Text>
      {item.expanded && (
        <View>
          {item.medicines.map((med, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 4,
              }}>
              <Text style={styles.orderDetails}>
                {med.name} ({med.quantity}pcs)
              </Text>
              <Text style={styles.orderDetails}>{med.totalCost}</Text>
            </View>
          ))}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 4,
            }}>
            <Text style={styles.orderDetails}>Delivery:</Text>
            <Text style={styles.orderDetails}>{item.deliveryDate}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const Dashboard = ({navigation}) => {
  const btnNewOrderTap = () => {
    navigation.navigate(NavigationName.NEWORDER);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header label={'Your Orders!'} />
      <View style={styles.cardContainer}>
        <Card title="Monthly Orders" value="120" />
        <Card title="Yearly Orders" value="1450" />
      </View>
      <View style={styles.cardContainer}>
        <Card title="Scheduled Orders" value="40" />
        <Card title="Waiting Orders" value="20" />
      </View>
      <View style={{marginHorizontal: SPACING}}>
        <Text style={styles.sectionTitle}>Open Orders</Text>
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={OrderItem}
        />
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={btnNewOrderTap}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
