import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

export const planProgressCardStyles = StyleSheet.create({
    card: {
        backgroundColor: colors.surface,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 12,
    },
    iconWrapper: {
        width: 52,
        height: 52,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.textPrimary,
        marginBottom: 4,
    },
    value: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.textSecondary,
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.textSecondary,
        marginBottom: 10,
    },
    progressTrack: {
        width: 150,
        height: 10,
        borderRadius: 999,
        backgroundColor: '#E5E7EB',
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 999,
    },
    arrowButton: {
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
});