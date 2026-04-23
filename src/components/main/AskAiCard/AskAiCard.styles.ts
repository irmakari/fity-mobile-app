import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

export const askAiCardStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: 20,
        paddingVertical: 18,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: colors.border,
    },
    iconWrapper: {
        width: 64,
        height: 64,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: colors.textPrimary,
        marginBottom: 8,
    },
    description: {
        fontSize: 15,
        lineHeight: 22,
        fontWeight: '500',
        color: colors.textSecondary,
        paddingRight: 8,
    },
});