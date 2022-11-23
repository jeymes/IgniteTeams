import { Button } from "@components/Button";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header"
import { Hightlight } from "@components/Hightlight";
import { ListEmpty } from "@components/ListEmpty";
import { useState } from "react";
import { FlatList } from "react-native";
import * as S from "./styles"

import {useNavigation} from '@react-navigation/native';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('newgroups')
  }

  return (
    <S.Container>
      <Header/>
      <Hightlight
      title="Turmas"
      subtitle="jogue com a sua turma"
      />

      <FlatList
      data={groups}
      keyExtractor={item => item}
      renderItem={({ item}) => (
        <GroupCard
      title={item}
      />
      )}
      contentContainerStyle={groups.length === 0 && { flex:1}}
      ListEmptyComponent={() => (
        <ListEmpty message="Que tal cadastrar a primeira turma"/>
      )}
      showsVerticalScrollIndicator={false}
      />

      <Button
      onPress={handleNewGroup}
      title="Criar Nova Turma"
      />

      
    </S.Container>
  );
}