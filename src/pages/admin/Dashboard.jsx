import React, { useEffect, useState } from "react";
import { fetchContacts } from "../../api";

export default function Dashboard(){
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [page, setPage] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchContacts(token, page, 20);
        setContacts(data.contacts);
      } catch (e) {
        setErr("Failed to load contacts");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [page, token]);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-white p-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Admin Dashboard</div>
        <div className="flex items-center gap-4">
          <button onClick={logout} className="bg-white text-primary px-3 py-1 rounded">Logout</button>
        </div>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Contacts</h2>
          <div className="text-sm text-gray-600">Page {page+1}</div>
        </div>

        {loading ? (
          <div>Loading...</div>
        ) : err ? (
          <div className="text-red-600">{err}</div>
        ) : contacts.length === 0 ? (
          <div>No recent contacts</div>
        ) : (
          <div className="space-y-3">
            {contacts.map(c => (
              <div key={c.id} className="bg-white p-4 rounded shadow">
                <div className="flex justify-between">
                  <div>
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-sm text-gray-600">{c.email} • {c.phone}</div>
                  </div>
                  <div className="text-sm text-gray-500">{new Date(c.createdAt).toLocaleString()}</div>
                </div>
                <div className="mt-2 text-sm text-gray-700">{c.message}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex gap-2">
          <button disabled={page===0} onClick={()=>setPage(p => Math.max(0,p-1))} className="px-3 py-1 bg-white border rounded">Previous</button>
          <button onClick={()=>setPage(p => p+1)} className="px-3 py-1 bg-white border rounded">Next</button>
        </div>
      </main>
    </div>
  );
}
