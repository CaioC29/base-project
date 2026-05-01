import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarButton: HapticTab,
			}} initialRouteName='home'>
			<Tabs.Screen
				name="home"
				options={{
					title: 'Feed',
					tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="usuario"
				options={{
					title: 'Perfil',
					tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
				}}
			/>
		</Tabs>
	);
}
