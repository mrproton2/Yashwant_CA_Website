const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080/api";

export async function login(username, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({username, password})
  });
  if (!res.ok) throw new Error("Invalid credentials");
  return res.json(); // { token }
}

export async function fetchContacts(token, page=0, size=20) {
  const res = await fetch(`${API_URL}/contacts?page=${page}&size=${size}`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Failed to fetch contacts");
  return res.json();
}
