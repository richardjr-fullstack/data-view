"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function SignUpModal() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const supabase = createClientComponentClient();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccess(true);
            setEmail("");
            setPassword("");
            setOpen(false);
        }
        setLoading(false);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded"
            >
                Sign Up
            </button>
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
                        <h2 className="text-xl font-bold mb-4 text-black">Sign Up</h2>
                        <form onSubmit={handleSignUp} className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border px-3 py-2 rounded text-black"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full border px-3 py-2 rounded text-black"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            {error && <div className="text-red-600">{error}</div>}
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="px-3 py-1 bg-gray-300 rounded text-black"
                                    disabled={loading}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-3 py-1 bg-blue-600 text-white rounded"
                                    disabled={loading}
                                >
                                    {loading ? "Signing Up..." : "Sign Up"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {success && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
                    Signup successful! Please check your email to confirm.
                </div>
            )}
        </>
    );
}