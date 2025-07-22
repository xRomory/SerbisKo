import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/api/axios";
import type { AuthContextType, AuthResponse } from "@/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAuthResponse = (response: AuthResponse) => {
    localStorage.setItem("token", response.access_token);
    localStorage.setItem(
      "user",
      JSON.stringify({
        first_name: response.first_name,
        last_name: response.last_name,
        email: response.email,
        phone_number: response.phone_number,
        address_line: response.address_line,
        region: response.region,
        city: response.city,
        role: response.role,
        user_id: response.user_id,
      })
    );
    setToken(response.access_token);
    setUser({
      first_name: response.first_name,
      last_name: response.last_name,
      email: response.email,
      phone_number: response.phone_number,
      address_line: response.address_line,
      region: response.region,
      city: response.city,
      role: response.role,
      user_id: response.user_id,
    });
  };

  const login = async (data: { email: string; password: string }) => {
    try {
      const response = await api.post("/auth/login", data);
      handleAuthResponse(response.data);
      setError("");
    } catch (err) {
      setError(
        "Error: " + (err instanceof Error ? err.message : String(error))
      );
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = {
    user,
    token,
    login,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be within an AuthProvider");

  return context;
};