import React, { useState, useCallback } from 'react';
import { View, ActivityIndicator } from "react-native";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { PlanProgressCard } from "@/components/main/PlanProgressCard";
import { globalStyles } from "@/theme";
import { HomeGreetingHeader } from "@/components/main/HomeGreetingHeader";
import { AskAiCard } from "@/components/main/AskAiCard";
import { MainStackParamList } from '@/navigation/MainNavigator';
import { HydrationService } from '@/collections/hydration/hydration.service';
import { useAuth } from '@/context/AuthContext';

const HomeScreenPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const { user, logout } = useAuth();
    const userId = Number(user?.id) || 1;

    const [hydrationData, setHydrationData] = useState({
        current: 0,
        goal: 2000,
        progress: 0
    });
    const [loading, setLoading] = useState(true);

    const fetchHydration = async () => {
        try {
            const [goalData, logsData] = await Promise.all([
                HydrationService.getGoal(userId),
                HydrationService.getLogs(userId)
            ]);

            const total = logsData.reduce((acc, log) => acc + log.amountMl, 0);
            const goal = goalData?.dailyGoalMl || 2000;
            
            setHydrationData({
                current: total,
                goal: goal,
                progress: Math.min(total / goal, 1)
            });
        } catch (error) {
            console.error('Error fetching hydration on home:', error);
        } finally {
            setLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchHydration();
        }, [])
    );

    return (
        <View style={globalStyles.container}>
            <HomeGreetingHeader
                userName={user?.name || "User"}
                onProfilePress={() => console.log('profile')}
                onLogoutPress={logout}
            />
            <PlanProgressCard
                title="Hydration"
                value={`${hydrationData.current / 1000} L / ${hydrationData.goal / 1000} L`}
                progress={hydrationData.progress}
                accentColor="#60A5FA"
                iconName="water-outline"
                onPress={() => navigation.navigate('HydrationDetail')}
            />
            <PlanProgressCard
                title="Leg workout"
                value="15 min / 25 min"
                subtitle="2 exercises remaining"
                progress={0.6}
                accentColor="#A855F7"
                iconName="barbell-outline"
                onPress={() => console.log('workout')}
            />
            <PlanProgressCard
                title="Nutrition"
                value="1300 / 2100"
                progress={0.62}
                accentColor="#EF4444"
                iconName="nutrition-outline"
                onPress={() => console.log('nutrition')}
            />
            <AskAiCard
                title="Ask AI"
                description="Your personal health coach can help you stay on track today."
                onPress={() => console.log('ask ai')}
            />
        </View>
    );
};

export default HomeScreenPage;