import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

export default function App() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleEmail = async () => {
    if (!subject || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const options = {
      subject: subject, //subject: assunto do e-mail.
      recipients: ['gugadk000@gmail.com'], //recipients: lista de destinatários do e-mail.
      body: message, //body: corpo da mensagem.
      isHtml: false, //isHtml: define se o corpo da mensagem está em HTML (neste caso, é false)
    };

    const result = await MailComposer.composeAsync(options); //Usa MailComposer.composeAsync(options) para abrir o aplicativo de e-mail com as configurações fornecidas.    

    if (result.status === 'sent') {
      Alert.alert('Sucesso', 'E-mail enviado com sucesso!');
    } else {
      Alert.alert('Erro', 'Falha ao enviar o e-mail.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{
        alignItems : 'center',
        marginBottom : 20
      }}>
        <Text style={{fontSize : 30, fontWeight : 'bold'}}>Enviar Email</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Assunto"
        value={subject}
        onChangeText={setSubject}
      />
      <TextInput
        style={styles.textArea}
        placeholder="Digite sua mensagem"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <Button title="Enviar E-mail" onPress={handleEmail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop : 50
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    textAlignVertical: 'top',
  },
});
