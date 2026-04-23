import { StyleSheet } from 'react-native';
import {colors} from "../../../theme";

export const authInputStyles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 8,
        paddingHorizontal:16,
        paddingVertical:16,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#080616',
    },
    input: {
        width: '100%',
        height: 56,
        backgroundColor: colors.inputBackground,
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: colors.textPrimary,
        fontWeight: '500',
        borderWidth: 1,
        borderColor: colors.border,
    },
    inputError: {
        borderColor: colors.borderError,
    },
    inputDisabled: {
        backgroundColor: colors.disabledBackground,
        color: colors.disabledText,
    },
});