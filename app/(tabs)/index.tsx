import ListHeading from "@/components/ListHeading";
import SubCar from "@/components/SubCar";
import UpcomingSubCard from "@/components/UpcomingSubCard";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency, formatSubscriptionDateTime } from "@/lib/utils";
import { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);

  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <View className="flex-1">
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View className="home-header">
                <View className="home-user">
                  <Image source={images.avatar} className="home-avatar" />
                  <Text className="home-user-name">{HOME_USER.name} </Text>
                </View>

                <Image source={icons.add} className="home-add-icon" />
              </View>

              {/* Balance Card */}
              <View className="home-balance-card">
                <Text className="home-balance-label">Balance</Text>

                <View className="home-balance-row">
                  <Text className="home-balance-amount">{formatCurrency(HOME_BALANCE.amount)}</Text>
                  <Text className="home-balance-date">{formatSubscriptionDateTime(HOME_BALANCE.nextRenewalDate)}</Text>
                </View>
              </View>

              <View>
                <ListHeading title="Upcoming" />
                <FlatList
                  data={UPCOMING_SUBSCRIPTIONS}
                  keyExtractor={(item) => item.id}
                  horizontal
                  renderItem={({ item }) => <UpcomingSubCard {...item} />}
                  showsHorizontalScrollIndicator={false}
                  ListEmptyComponent={<Text className="home-empty-state">No Upcoming Subscriptions</Text>}
                />
              </View>

              <ListHeading title="All Subscriptions" />
            </>
          )}
          data={HOME_SUBSCRIPTIONS}
          keyExtractor={(item) => item.id}
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 24 }}
          renderItem={({ item }) => (
            <SubCar
              {...item}
              expanded={expandedSubscriptionId === item.id}
              onPress={() => setExpandedSubscriptionId(expandedSubscriptionId === item.id ? null : item.id)}
            />
          )}
          extraData={expandedSubscriptionId}
          ItemSeparatorComponent={() => <View className="h-4" />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<Text className="home-empty-state">No Subscriptions Yet.</Text>}
          contentContainerClassName="pb-30"
        />
      </View>
    </SafeAreaView>
  );
}