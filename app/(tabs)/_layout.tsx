import clsx from "clsx";
import React from 'react'
import { Tabs } from 'expo-router'
import { tabs } from '@/constants/data'
import { Image, View } from 'react-native'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, components } from "@/constants/theme";

const tabBar = components.tabBar;

export default function TabLayout() {
    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
                },
                tabBarIconStyle: {
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    alignItems: 'center',
                }
            }}
        >
            {tabs.map((t) => (
                <Tabs.Screen
                    key={t.name}
                    name={t.name}
                    options={{
                        title: t.title,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon focused={focused} icon={t.icon} />
                        )
                    }}
                />
            ))}
        </Tabs>
    )
}

function TabIcon({ focused, icon }: TabIconProps) {
    return (
        <View className='tabs-icon'>
            <View className={clsx('tabs-pill', focused && 'tabs-active')}>
                <Image source={icon} resizeMode="contain" className="tabs-glyph" />
            </View>
        </View>
    )
}