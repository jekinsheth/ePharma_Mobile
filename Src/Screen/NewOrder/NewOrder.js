import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {TextButton} from '../../Components/TextButton';

import DropDownPicker from 'react-native-dropdown-picker';
import {Header} from '../../Components/Header';
import {COLORS} from '../../Utils/colors';
import * as Theme from '../../Utils/Theme';
import styles from '../Login/styles';
const NewOrderScreen = ({navigation}) => {
  const [clientName, setClientName] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [price, setPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const medicines = [
    {label: 'Paracetamol', value: 'paracetamol', price: 5},
    {label: 'Amoxicillin', value: 'amoxicillin', price: 8},
    {label: 'Ibuprofen', value: 'ibuprofen', price: 6},
    {label: 'Cetirizine', value: 'cetirizine', price: 4},
    {label: 'Metformin', value: 'metformin', price: 7},
  ];
  const handleQuantityChange = text => {
    setQuantity(text);
    const selected = medicines.find(med => med.value === selectedMedicine);

    if (selected && text) {
      setPrice(`$${(selected.price * parseInt(text, 10)).toFixed(2)}`);
    } else {
      setPrice('');
    }
  };

  const addItemToOrder = () => {
    const selected = medicines.find(med => med.value === selectedMedicine);
    if (selected && quantity) {
      const itemTotal = selected.price * parseInt(quantity, 10);
      setOrderItems(prevItems => [
        ...prevItems,
        {...selected, quantity, total: itemTotal},
      ]);
      setTotalAmount(prevAmount => prevAmount + itemTotal);
      setPrice('');
      setQuantity('');
      setSelectedMedicine(null);
    }
  };
  const handleAddSubstactItem = (index, isAdd) => {
    const updatedItems = [...orderItems];
    const item = updatedItems[index];

    // Increase quantity and update total
    item.quantity = (
      isAdd ? parseInt(item.quantity, 10) + 1 : parseInt(item.quantity, 10) - 1
    ).toString();
    item.total = item.price * parseInt(item.quantity, 10);

    updatedItems[index] = item;
    setOrderItems(updatedItems);
    setTotalAmount(updatedItems.reduce((total, item) => total + item.total, 0));
  };

  const handleDeleteItem = index => {
    const updatedItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(updatedItems);
    setTotalAmount(updatedItems.reduce((total, item) => total + item.total, 0));
  };

  const addDuplicateItem = item => {
    setOrderItems(prevItems => [...prevItems, {...item}]);
  };

  const onPlaceOrderTap = () => {
    navigation.pop();
  };
  const renderOrderItem = ({item, index}) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemCard}>
        <Text style={styles.itemLabel}>{item.label}</Text>
        <Text style={styles.itemText}>Quantity: {item.quantity}</Text>
        <Text style={styles.itemText}>Total: ${item.total.toFixed(2)}</Text>

        <View style={styles.itemButtonsContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddSubstactItem(index, true)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddSubstactItem(index, false)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addDuplicateItem(item)}>
            <Text style={styles.buttonText}>Duplicate</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteItem(index)}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Header
          label={'New Order'}
          isPlaceOrderBtn={true}
          orderValue={totalAmount.toString() + '(' + orderItems.length + ')'}
          onPress={onPlaceOrderTap}
        />

        <View style={styles.viewEmailID}>
          <TextInput
            style={styles.textInputStyle}
            // fontFamily={FONTS.ROBOTO_REGULAR}
            fontSize={Theme.FONT_18PX}
            selectionColor={COLORS.black}
            underlineColor={COLORS.orange}
            placeholder="Client Name"
            value={clientName}
            onChangeText={text => setClientName(text)}
            theme={{
              colors: {
                text: COLORS.black,
                primary: COLORS.orange,
                placeholder: COLORS.black,
              },
            }}
            placeholderTextColor={COLORS.black}
          />
        </View>
        <View style={styles.viewEmailID}>
          <DropDownPicker
            style={styles.textInputStyle}
            open={open}
            value={selectedMedicine}
            items={medicines}
            setOpen={setOpen}
            setValue={setSelectedMedicine}
            placeholder="Choose a medicine"
          />
        </View>
        <View style={styles.viewEmailID}>
          <TextInput
            style={styles.textInputStyle}
            // fontFamily={FONTS.ROBOTO_REGULAR}
            fontSize={Theme.FONT_18PX}
            selectionColor={COLORS.black}
            underlineColor={COLORS.orange}
            placeholder="Quantity"
            value={quantity}
            onChangeText={handleQuantityChange}
            theme={{
              colors: {
                text: COLORS.black,
                primary: COLORS.orange,
                placeholder: COLORS.black,
              },
            }}
            placeholderTextColor={COLORS.black}
          />
          <TextInput
            style={styles.textInputStyle}
            // fontFamily={FONTS.ROBOTO_REGULAR}
            editable={false}
            fontSize={Theme.FONT_18PX}
            selectionColor={COLORS.black}
            underlineColor={COLORS.orange}
            placeholder="Value"
            value={price}
            theme={{
              colors: {
                text: COLORS.black,
                primary: COLORS.orange,
                placeholder: COLORS.black,
              },
            }}
            placeholderTextColor={COLORS.black}
          />
        </View>
        <TextButton
          style={styles.textButtonStyle}
          title="Add to cart"
          onPress={addItemToOrder}
        />
        <FlatList
          data={orderItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderOrderItem}
          style={{}}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewOrderScreen;
