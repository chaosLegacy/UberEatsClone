import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { getDocs, addDoc, updateDoc, deleteDoc, collection, doc, getDoc, query, orderBy, limit } from "firebase/firestore";
import { firestore } from '../firebase';
import StepIndicator from 'react-native-step-indicator';
import moment from 'moment';


const OrderCompleted = () => {
    const [lastOrder, setLastOrder] = useState({});
    const [position, setPosition] = useState(0);
    const ordersCollectionRef = collection(firestore, "orders");

    const status: Array<{ animation: string, label: string }> = [
        {
            animation: require('../assets/animations/cooking.json'),
            label: 'Preparing your order'
        },
        {
            animation: require('../assets/animations/food-wrapping.json'),
            label: 'Wrapping up your order'
        },
        {
            animation: require('../assets/animations/delivery-guy-waiting.json'),
            label: 'The driver picked up your food'
        },
        {
            animation: require('../assets/animations/food-on-it-way.json'),
            label: 'Your order is on it way to you'
        },
        {
            animation: require('../assets/animations/food-arrived.json'),
            label: 'Your order has arrived'
        }
    ]

    const customStyles = {
        stepIndicatorSize: 20,
        currentStepIndicatorSize: 25,
        separatorStrokeWidth: 15,
        currentStepStrokeWidth: 3,
        stepStrokeWidth: 3,
        stepStrokeCurrentColor: '#7eaec4',
        stepStrokeFinishedColor: '#ffffff',
        stepStrokeUnFinishedColor: '#ffffff',
        separatorFinishedColor: '#7eaec4',
        separatorUnFinishedColor: '#dedede',
        stepIndicatorFinishedColor: '#7eaec4',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 0,
        currentStepIndicatorLabelFontSize: 0,
        stepIndicatorLabelCurrentColor: 'transparent',
        stepIndicatorLabelFinishedColor: 'transparent',
        stepIndicatorLabelUnFinishedColor: 'transparent',
        labelColor: '#999999',
        labelSize: 0,
        currentStepLabelColor: '#7eaec4',
    };

    const onStepProgress = () => {
        setTimeout(() => {
            position < status.length - 1 ? setPosition(position + 1) : setPosition(0);
        }, 6000);
    };

    const createOrder = async () => {
        try {
            await addDoc(ordersCollectionRef, {
                name: 'value',
                name2: 'value2'
            })
        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const updateOrder = async (docId: string, data: object) => {
        try {
            const fields = {
                something: 'value',
                ...data
            }
            const ordersDoc = doc(ordersCollectionRef, 'orders', docId);
            await updateDoc(ordersDoc, fields)
        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const deleteOrder = async (docId: string) => {
        try {
            const ordersDoc = doc(ordersCollectionRef, 'orders', docId);
            await deleteDoc(ordersDoc);
        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const getOrder = async (docId: string) => {
        try {
            const ordersDoc = doc(ordersCollectionRef, 'orders', docId);
            await getDoc(ordersDoc);
        }
        catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    const loadLastOrder = async () => {
        try {

            const q = query(ordersCollectionRef, orderBy("createdAt"), limit(1));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                const data = { ...doc.data(), id: doc.id }; // it helpful to update a single document using doc id
                console.log(`${doc.id} => ${doc.data()}`);
                setLastOrder(doc.data())
            });

        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    useEffect(() => {
        // loadLastOrder();
        const unsubscribe = onStepProgress();
        return unsubscribe;
    }, [position]);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#fff',
            marginTop: -200
        }}>
            <LottieView
                style={{
                    height: 100,
                    alignSelf: 'center',
                    marginBottom: 30
                }}
                source={require('../assets/animations/check-mark.json')}
                autoPlay
                speed={0.5}
                loop={false}
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 30,
            }}>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                }}>{moment().format('h:mm')}</Text>
                <Text style={{ color: '#999' }}>Estimated Arrival</Text>
            </View>

            <StepIndicator
                customStyles={customStyles}
                currentPosition={position}
            />

            <View style={{
                paddingHorizontal: 30
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginTop: 10,
                }}>{status[position].label}</Text>
                <Text style={{
                    fontSize: 15,
                    color: '#999'
                }}>Last arrived by {moment().add(30, 'minute').format('h:mm')}</Text>
            </View>
            <LottieView
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '58%'
                }}
                source={status[position].animation}
                autoPlay
                speed={0.5}
                loop={false}
            />
        </View>
    )
}

export default OrderCompleted
