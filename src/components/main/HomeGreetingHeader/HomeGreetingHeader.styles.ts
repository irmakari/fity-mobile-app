import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

export const homeGreetingHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.surface,
        borderRadius: 24,
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: colors.border,
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 12,
    },
    avatarWrapper: {
        width: 56,
        height: 56,
        borderRadius: 18,
        backgroundColor: '#EEF2FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14,
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
    },
    greetingText: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.textSecondary,
        marginBottom: 2,
    },
    nameText: {
        fontSize: 26,
        fontWeight: '800',
        color: colors.textPrimary,
    },
    logoutButton: {
        width: 48,
        height: 48,
        borderRadius: 16,
        backgroundColor: '#F8FAFC',
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
});