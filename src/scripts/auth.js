import { supabase } from '../lib/supabase';

export async function verifyUser(email, password) {
    try {
        // Intenta iniciar sesión con el correo y la contraseña
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error('Error al iniciar sesión:', error.message);
            alert('Error: ' + error.message);
            return false;
        }

        // Si el inicio de sesión es exitoso
        alert('Inicio de sesión exitoso.');
        console.log('Usuario autenticado:', data.user);
        return true;
    } catch (err) {
        console.error('Error inesperado:', err);
        alert('Ocurrió un error inesperado. Por favor, intenta de nuevo.');
        return false;
    }
}