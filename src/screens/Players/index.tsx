import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { Header } from '@components/Header';
import { Hightlight } from '@components/Hightlight';
import { Input } from '@components/Input';
import { ListEmpty } from '@components/ListEmpty';
import { PlayersCard } from '@components/PlayersCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

export function Players() {

  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);

  return (
    <Container>
        <Header showBackButton/>

        <Hightlight
        title='Nome da turma'
        subtitle='adicione a galera e separe os times'
        />

        <Form>
        <Input
        placeholder='Nome da pessoa'
        autoCorrect={false}
        />

        <ButtonIcon
        icon="add"
        />
        </Form>
        <HeaderList>
        <FlatList
        data={['Time A', 'Time B']}
        keyExtractor={item => item}
        renderItem={({ item}) => (
          <Filter
        title={item}
        isActive={item === team}
        onPress={() => setTeam(item)}
        />
        )}
        horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
        </HeaderList>

        <FlatList
        data={players}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <PlayersCard
          name={item}
          onRemove={() => { }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty
          message="Não há pessoas nesse time."
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1}
        ]}
        />

        <Button
        type='SECONDARY'
        title='Remover Turma'
        />
        
    </Container>
  );
}