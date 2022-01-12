import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements'; 
import { Button } from 'react-native-elements/dist/buttons/Button';
import UsersContext from '../context/UsersContext';

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário',  'Deseja excluir o usuário', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }            
            },
            {
                text: 'Não'
            }
        ])
    }
    
    function getUserItem({ item: user }) {
        return (     
            <ListItem
                Button
                onPress={() => props.navigation.navigate('UserForm', user)}
                bottomDivider  
                >
               <Avatar
                    title={user.name}
                    source={{ uri: user.avatarUrl }}
                />                
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
                <Button 
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type='clear' 
                    icon={<Icon name='edit' color='orange'/>}                 
                />
                <Button 
                    onPress={() => confirmUserDeletion(user)}
                    type='clear' 
                    icon={<Icon name='delete' color='red'/>}                 
                />
            </ListItem>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    )
}