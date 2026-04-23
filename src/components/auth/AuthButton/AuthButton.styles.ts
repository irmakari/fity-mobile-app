import { StyleSheet } from 'react-native';
import { colors, typography } from '@/theme';

export const authButtonStyles = StyleSheet.create({
    button: {
        height: 56,
        borderRadius: 12,
        backgroundColor: colors.primaryButton,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    fullWidth: {
        width: '100%',
    },
    disabledButton: {
        backgroundColor: colors.disabledBackground,
    },
    text: {
        ...typography.button,
        color: colors.surface,
    },
    disabledText: {
        color: colors.disabledText,
    },
});