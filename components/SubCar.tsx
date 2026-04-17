import { View, Text, Image } from 'react-native'
import React from 'react'
import { formatCurrency, formatSubscriptionDateTime } from '@/lib/utils'

export default function SubCar({ name, price, currency, icon, billing, color, category, plan, renewalDate }: SubscriptionCardProps) {
    return (
        <View style={color ? { backgroundColor: color } : undefined} className={`sub-card bg-card ${color}`}>
            <View className='sub-head'>
                <View className='sub-main'>
                    <Image source={icon} className='sub-icon' />
                    <View className='sub-copy'>
                        <Text numberOfLines={1} className='sub-title'>
                            {name}
                        </Text>
                        <Text numberOfLines={1} ellipsizeMode='tail' className='sub-meta'>
                            {category?.trim() || plan?.trim() || (renewalDate ? formatSubscriptionDateTime(renewalDate) : '')}
                        </Text>
                    </View>
                </View>

                <View className='sub-price-box'>
                    <Text className='sub-price'>
                        {formatCurrency(price, currency)}
                    </Text>
                    <Text className='sub-billing'>
                        {billing}
                    </Text>
                </View>
            </View>
        </View>
    )
}