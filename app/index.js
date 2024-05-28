import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';

import {
  Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome
} from '../components';

export default function Home() {
  const router = useRouter();

  const renderHeader = () => (
    <View>
      <Welcome />
    </View>
  );

  const renderItem = ({ item }) => {
    switch (item.type) {
      case 'Popularjobs':
        return <Popularjobs />;
      case 'Nearbyjobs':
        return <Nearbyjobs />;
      default:
        return null;
    }
  };

  const data = [
    { key: '1', type: 'Popularjobs' },
    { key: '2', type: 'Nearbyjobs' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          title: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
        }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: SIZES.medium }}
      />
    </SafeAreaView>
  );
}
