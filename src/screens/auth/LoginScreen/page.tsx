import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { AuthInput } from '@/components/auth/AuthInput';
import { globalStyles } from '@/theme';
import { AuthButton } from '@/components/auth/AuthButton';
import { AuthLinkText } from '@/components/auth/AuthLinkText';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { AuthLogo } from '@/components/auth/AuthLogo';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { postLogin } from '@/collections/auth/auth.service';
import { useAuth } from '@/context/AuthContext';
import { AuthStackParamList } from '@/navigation/AuthNavigator';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

const LoginScreen = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        try {
            setLoading(true);

            const cleanedEmail = email.trim().toLowerCase();
            const cleanedPassword = password.trim();

            console.log('Attempting login with:', { cleanedEmail, cleanedPassword });

            const response = await postLogin({
                email: cleanedEmail,
                password: cleanedPassword,
            });

            console.log('Login API response:', response);

            // Client-side filtreleme: API tüm kullanıcıları döndürüyor
            const matchedUser = response.find(
                (user: any) =>
                    user.email === cleanedEmail && user.password === cleanedPassword
            );

            if (matchedUser) {
                console.log('Login successful:', matchedUser);
                login(matchedUser);
            } else {
                console.log('No user matched the credentials');
                Alert.alert('Hata', 'Geçersiz e-posta veya şifre');
            }
        } catch (error) {
            console.error('login error:', error);
            Alert.alert('Hata', 'Giriş yapılırken bir hata oluştu');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.authContainer}>
                <AuthLogo />

                <AuthHeader
                    title="Welcome Back"
                    description="Log in to continue your fitness journey."
                />

                <AuthInput
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={setEmail}
                />

                <AuthInput
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={setPassword}
                />

                <View style={globalStyles.linkContainer}>
                    <AuthLinkText
                        label="Forgot Password?"
                        onPress={() => navigation.navigate('ForgotPassword')}
                    />
                </View>

                <AuthButton
                    label="LOGIN"
                    onPress={handleLogin}
                    loading={loading}
                />
            </View>
        </View>
    );
};

export default LoginScreen;