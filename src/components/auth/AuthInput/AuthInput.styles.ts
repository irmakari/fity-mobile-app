import { StyleSheet } from 'react-native';
import {colors} from "@/theme";

export const authInputStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical:16,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#080616',
        marginBottom: 8,
    },
    inputWrapper: {
        width: '100%',
        height: 56,
        backgroundColor: colors.inputBackground,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: colors.border,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: colors.textPrimary,
        fontWeight: '500',
    },
    inputError: {
        borderColor: colors.borderError,
    },
    inputDisabled: {
        backgroundColor: colors.disabledBackground,
    },
    iconContainer: {
        marginLeft: 8,
    },
});