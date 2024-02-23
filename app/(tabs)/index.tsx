import { useMemo, useState } from 'react';
import { View } from 'react-native';
import { ExploreHeader } from '@/components/ExploreHeader';
import { Listings } from '@/components/Listings';
import { Stack } from 'expo-router';
import listingsData from '@/assets/data/airbnb-listings.json';
import { Listing } from '@/interfaces/Listing';

const Page = () => {
  const [category, setCategory] = useState('Tiny homes');
  const items: Listing[] = useMemo(() => listingsData as any[], []);
  const onDataChanged = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={{ flex: 1, marginTop: 100 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChange={onDataChanged} />,
        }}
      />
      <Listings listings={items} category={category} />
    </View>
  );
};
export default Page;
