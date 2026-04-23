import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@/theme/colors';
import {homeGreetingHeaderStyles} from "@/components/main/HomeGreetingHeader/HomeGreetingHeader.styles";
import {THomeGreetingHeaderProps} from "@/components/main/HomeGreetingHeader/HomeGreetingHeader.type";

export default function HomeGreetingHeader({
                                               userName,
                                               onProfilePress,
                                               onLogoutPress,
                                           }: THomeGreetingHeaderProps) {
    return (
        <View style={homeGreetingHeaderStyles.container}>
            <TouchableOpacity
                style={homeGreetingHeaderStyles.leftSection}
                onPress={onProfilePress}
                activeOpacity={0.85}
            >
                <View style={homeGreetingHeaderStyles.avatarWrapper}>
                    <Ionicons name="person-outline" size={26} color={colors.primary} />
                </View>

                <View style={homeGreetingHeaderStyles.textWrapper}>
                    <Text style={homeGreetingHeaderStyles.greetingText}>Welcome back</Text>
                    <Text style={homeGreetingHeaderStyles.nameText}>Hi, {userName}</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={homeGreetingHeaderStyles.logoutButton}
                onPress={onLogoutPress}
                activeOpacity={0.85}
            >
                <Ionicons name="log-out-outline" size={24} color={colors.textSecondary} />
            </TouchableOpacity>
        </View>
    );
}