import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { AuthInputProps } from './AuthInput.type';
import { authInputStyles } from './AuthInput.styles';
import { colors } from '../../../theme';

const AuthInput = ({
                       value,
                       onChange,
                       placeholder,
                       label,
                       type = 'text',
                       error = false,
                       disabled = false,
                       required = false,
                   }: AuthInputProps) => {
    return (
        <View style={authInputStyles.container}>
            {!!label && (
                <Text style={authInputStyles.label}>
                    {label}
                    {required ? ' *' : ''}
                </Text>
            )}

            {type === 'email' && (
                <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    editable={!disabled}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={[
                        authInputStyles.input,
                        error && authInputStyles.inputError,
                        disabled && authInputStyles.inputDisabled,
                    ]}
                    placeholderTextColor={colors.inputPlaceholder}
                />
            )}

            {type === 'password' && (
                <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    editable={!disabled}
                    secureTextEntry
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={[
                        authInputStyles.input,
                        error && authInputStyles.inputError,
                        disabled && authInputStyles.inputDisabled,
                    ]}
                    placeholderTextColor={colors.inputPlaceholder}
                />
            )}

            {type === 'text' && (
                <TextInput
                    value={value}
                    onChangeText={onChange}
                    placeholder={placeholder}
                    editable={!disabled}
                    autoCapitalize="sentences"
                    style={[
                        authInputStyles.input,
                        error && authInputStyles.inputError,
                        disabled && authInputStyles.inputDisabled,
                    ]}
                    placeholderTextColor={colors.inputPlaceholder}
                />
            )}
        </View>
    );
};

export default AuthInput;