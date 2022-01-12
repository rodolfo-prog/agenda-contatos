import React, { useContext, useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';
import UsersContext from '../context/UsersContext';


export default ({route, navigation}) => {
    const [ user, setUser ] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)
    return(
    
        <View style={style.form}>
            <Text>Nome Completo</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="  Informe o nome"
                value={user.name} />

            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="  Informe o e-mail"
                value={user.email} />

            <Text>Telefone</Text>
            <TextInput
                style={style.input}
                keyboardType={'phone-pad'}
                onChangeNumber={phone => setUser({ ...user, phone })}
                placeholder="  (DDD) 00000-0000"
                value={user.phone} /> 

            <Text>Data de Nascimento</Text>
            <TextInput
                style={style.input}
                onChangeNumber={data => setUser({ ...user, data })}
                placeholder="Data de nascimento"
                value={user.data} />    

            <Text>Endereço</Text>
            <TextInput
                style={style.input}
                onChangeNumber={adress => setUser({ ...user, adress })}
                placeholder="  Informe o endereço"
                value={user.adress} />    

            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="  Informe URL do Avatar"
                value={user.avatarUrl} />    
            <Button 
                title="Salvar"
                onPress={() => {
                    dispatch(({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    }))
                    navigation.goBack()
                }}
            />  
        </View>
    
    )
}

const style = StyleSheet.create({
    form: {
        padding: 15
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 15        
    },
    dateCompoment: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 15
    }
})