import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";

export default function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.token);
      nav("/admin");
    } catch (ex) {
      setErr("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
        {err && <div className="mb-3 text-sm text-red-600">{err}</div>}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input value={username} onChange={e=>setUsername(e.target.value)} required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full border rounded px-3 py-2" />
          </div>
          <div className="flex items-center justify-between">
            <button className="px-4 py-2 bg-primary text-white rounded">Login</button>
          </div>
        </form>
        <p className="text-xs text-gray-500 mt-4">Use initial admin/admin123 (change in production)</p>
      </div>
    </div>
  );
}
