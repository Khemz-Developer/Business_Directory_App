import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import BusinessListCardExplore from "./BusinessListCardExplore";

export default function ExploreBusinessList({ businessList }) {
  return (
    <ScrollView>
      <FlatList
        data={businessList}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View key={index}>
            <BusinessListCardExplore business={item} />
          </View>
        )}
      />
      <View style={{ height: 1000 }}></View>
    </ScrollView>
  );
}
