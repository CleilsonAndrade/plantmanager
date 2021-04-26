import React from 'react';
import {
    StyleSheet,
    Alert,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import { Button } from '../components/Button';

import waterDrop from '../assets/waterdrop.png'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSave(){
    return(
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri 
                    uri=''
                    height={150}
                    width={150}
                />
                <Text style={styles.plantName}>
                    Nome da planta
                </Text>
                <Text style={styles.plantAbout}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam enim deleniti error necessitatibus. 
                </Text>
            </View>
            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image 
                        source={waterDrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad eaque impedit pariatur temporibus, autem laudantium architecto soluta ab esse sit explicabo sint blanditiis quasi eos quod et error cumque mollitia.
                    </Text>
                </View>
                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>
                <Button 
                    title='Cadastrar planta'
                    onPress={() => {}}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape,
    },
    plantInfo:{
        
    },
    plantName:{

    },
    plantAbout:{
        
    },
    controller:{

    },
    tipContainer:{

    },
    tipImage:{

    },
    tipText:{

    },
    alertLabel:{

    },
});