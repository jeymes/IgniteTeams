import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Hightlight } from "@components/Hightlight";
import { ListEmpty } from "@components/ListEmpty";
import { useState, useCallback } from "react";
import { Alert, FlatList } from "react-native";
import * as S from "./styles";

import {useNavigation, useFocusEffect} from '@react-navigation/native';
import { groupsGetAll } from "@storage/group/groupGetAll";
import { Loading } from "@components/Loading";

export function Groups() {

  const [isLoading, setIsLoading] = useState(true);

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('newgroups')
  }

  async function fetchGroups(){
    try {

      setIsLoading(true);

      const data = await groupsGetAll();
      setGroups(data);

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível carregar as turmas.')
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  function handleOpenGroup(group: string) {
    navigation.navigate('players', {group});
  }

  return (
    <S.Container>

      <Header/>
      
      <Hightlight
      title="Turmas"
      subtitle="jogue com a sua turma"
      />

      {
        isLoading ? <Loading/> :
      <FlatList
      data={groups}
      keyExtractor={item => item}
      renderItem={({ item}) => (
        <GroupCard
      title={item}
      onPress={() => handleOpenGroup(item)}
      />

      )}
      contentContainerStyle={groups.length === 0 && { flex:1}}
      ListEmptyComponent={() => (
        <ListEmpty message="Que tal cadastrar a primeira turma"/>
      )}
      showsVerticalScrollIndicator={false}
      />
    }

      <Button
      onPress={handleNewGroup}
      title="Criar nova turma"
      />

    </S.Container>
  );
}