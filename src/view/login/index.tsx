"use client";

import React, { useState } from "react";
import { supabase } from "../../lib/supabaseClient"

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            // Auth successful, you can redirect or update UI here
            window.location.reload();
            setSuccess(true);
        }
        setLoading(false);
    };

    return (
        <form onSubmit={handleLogin} style={{ maxWidth: 300, margin: "auto" }}>
            <h2>Login</h2>
            <div>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                    style={{ width: "100%", marginBottom: 8 }}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                    style={{ width: "100%", marginBottom: 8 }}
                />
            </div>
            {error && <div style={{ color: "red", marginBottom: 8 }}>{error}</div>}
            <button type="submit" disabled={loading} style={{ width: "100%" }}>
                {loading ? "Logging in..." : "Login"}
            </button>

            {success && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
                    Login successful! Welcome back.
                </div>
            )}
        </form>
    );
};

export default Login;