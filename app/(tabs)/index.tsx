import ListHeading from "@/components/ListHeading";
import SubCar from "@/components/SubCar";
import UpcomingSubCard from "@/components/UpcomingSubCard";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency, formatSubscriptionDateTime } from "@/lib/utils";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
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
          renderItem={({ item }) => <UpcomingSubCard data={item} />}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text className="home-empty-state">No Upcoming Subscriptions</Text>}
         />
      </View>

      <View>
        <ListHeading title="All Subscriptions" />
        <FlatList
          data={HOME_SUBSCRIPTIONS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SubCar {...item} />}
          ListEmptyComponent={<Text className="home-empty-state">No Upcoming Subscriptions</Text>}
         />
      </View>
    </SafeAreaView>
  );
}