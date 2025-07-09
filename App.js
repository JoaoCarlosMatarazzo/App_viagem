import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/prova1.png')} style={styles.image} />

      <Text style={styles.reservaNaoConfirmada}>
        Sua reserva não está confirmada.
      </Text>

      <Text style={styles.descricao}>
        Estamos esperando você em PUNTA CANA na República Dominicana.
      </Text>

      <View style={styles.lista}>
        <Text styles={styles.lista}>✔ Aéreo ida e volta</Text>
        <Text styles={styles.lista}>✔ Check-in: 26/06/2021 a partir das 15h</Text>
        <Text styles={styles.lista}>✔ Check-out: 28/06/2021 a partir das 12h</Text>
        <Text styles={styles.lista}>✔ 3 Diárias</Text>
        <Text styles={styles.lista}>✔ Café da manhã</Text>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>CONFIRMAR RESERVA</Text>
      </TouchableOpacity>

      <View style={styles.suite}>
        <Image source={require('./assets/suit.png')} style={styles.suiteImagem}/>
        <View>
          <Text style={styles.suiteTitulo}>Suíte Master</Text>
          <Text style={styles.suitePreco}>R$ 2.898,00</Text>
          <Text style={styles.suiteTitulo}>Quarto: 1 Adultos: 2</Text>
          <Text style={styles.suiteTitulo}>Crianças: 1</Text>
        </View>
      </View>

        <View style={styles.separator} />


      <Text style={styles.duvidas}>DÚVIDAS? (31) 3236-1900</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 30,

  },
  image: {
    width: '100%',
    height: 360,
    flex: 1,
  },
  reservaNaoConfirmada: {
    color: 'orange',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  descricao: {
    fontSize: 19.5,
    marginBottom: 10,
    fontWeight: "bold",
    marginLeft: 10,
  },
  lista: {
    fontSize: 19.5,
    marginBottom: 20, 
    marginLeft: 20,
    fontWeight: "bold",
  },
  botao: {
    backgroundColor: "#4CAF50",
    paddingVertical: 20,  
    paddingHorizontal: 10,  
    width: 200,  
    alignItems: 'center',
    marginLeft: 100,
    marginTop: 5,
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,  
  },

  suite: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  suiteImagem: {
    width: 180,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  suiteTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  suitePreco: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20, 

  },
  duvidas: {
    color: "#007AFF",
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: "bold",

  },
    separator: {
    height: 5,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
});
