import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
import {useNavigation} from '@react-navigation/native';
import { useState } from 'react';
import { Container, Content, Icon } from './styles';

export function NewGroup() {

  const [group, setGroup] = useState('')

  const navigation = useNavigation();

  function handleNew(){
    navigation.navigate('players', { group})
  }

  return (
    <Container>
        <Header showBackButton />
        <Content>
          <Icon/>
          <Hightlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
          />

          <Input
          placeholder='Nome da turma'
          onChangeText={text => setGroup(text)}
          />

          <Button
          onPress={handleNew}
          title="Criar"
          style={{marginTop: 20}}
          />
        </Content>
    </Container>
  );
}