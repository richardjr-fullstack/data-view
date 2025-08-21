"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

type Player = {
  id: number;
  player_name: string;
  player_weight: number;
  player_age: number;
  stats_point: number;
  assist: number;
  rebound: number;
  turnover: number;
};

export default function Table() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [form, setForm] = useState<Partial<Player>>({});

  // Fetch Players
  const fetchPlayers = async () => {
    const { data, error } = await supabase.from("players").select("*").order("id");
    if (error) console.error(error);
    else setPlayers(data || []);
  };

  // Insert Player
  const addPlayer = async () => {
    if (!form.player_name) return;
    const { error } = await supabase.from("players").insert([form]);
    if (error) console.error(error);
    setForm({});
    fetchPlayers();
  };

  // Update Player
  const updatePlayer = async (id: number, updates: Partial<Player>) => {
    const { error } = await supabase.from("players").update(updates).eq("id", id);
    if (error) console.error(error);
    fetchPlayers();
  };

  // Delete Player
  const deletePlayer = async (id: number) => {
    const { error } = await supabase.from("players").delete().eq("id", id);
    if (error) console.error(error);
    fetchPlayers();
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="container mx-auto p-24">
      <h2 className="text-2xl font-bold pb-4 text-center">🏀 Player Statistics 🏀</h2>
      <div className="flex gap-6 items-start">
        {/* Form */}
        <div className="space-y-2 mb-6 flex flex-col w-1/4 m-auto border p-4 rounded">
          <h1 className="text-2xl font-bold mb-4 text-center">🏀 Add Player 🏀</h1>
          <input
            placeholder="Name"
            value={form.player_name || ""}
            onChange={(e) => setForm({ ...form, player_name: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            placeholder="Weight"
            type="number"
            value={form.player_weight || ""}
            onChange={(e) => setForm({ ...form, player_weight: Number(e.target.value) })}
            className="border p-2 rounded"
          />
          <input
            placeholder="Age"
            type="number"
            value={form.player_age || ""}
            onChange={(e) => setForm({ ...form, player_age: Number(e.target.value) })}
            className="border p-2 rounded"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              placeholder="Points "
              type="number"
              value={form.stats_point || ""}
              onChange={(e) => setForm({ ...form, stats_point: Number(e.target.value) })}
              className="border p-2 rounded"
            />
            <input
              placeholder="Assist"
              type="number"
              value={form.assist || ""}
              onChange={(e) => setForm({ ...form, assist: Number(e.target.value) })}
              className="border p-2 rounded"
            />
            <input
              placeholder="Rebound"
              type="number"
              value={form.rebound || ""}
              onChange={(e) => setForm({ ...form, rebound: Number(e.target.value) })}
              className="border p-2 rounded"
            />
            <input
              placeholder="Turnover"
              type="number"
              value={form.turnover || ""}
              onChange={(e) => setForm({ ...form, turnover: Number(e.target.value) })}
              className="border p-2 rounded"
            />
          </div>
          <button
            onClick={addPlayer}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Player
          </button>
        </div>

        {/* Table */}
        <table className="table-auto border-collapse border w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 text-black">Name</th>
              <th className="border px-2 text-black">Weight</th>
              <th className="border px-2 text-black">Age</th>
              <th className="border px-2 text-black">Points</th>
              <th className="border px-2 text-black">Assist</th>
              <th className="border px-2 text-black">Rebound</th>
              <th className="border px-2 text-black">Turnover</th>
              <th className="border px-2 text-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p) => (
              <tr key={p.id}>
                <td className="border px-2 text-center">{p.player_name}</td>
                <td className="border px-2 text-center">{p.player_weight}</td>
                <td className="border px-2 text-center">{p.player_age}</td>
                <td className="border px-2 text-center">{p.stats_point}</td>
                <td className="border px-2 text-center">{p.assist}</td>
                <td className="border px-2 text-center">{p.rebound}</td>
                <td className="border px-2 text-center">{p.turnover}</td>
                <td className="border p-2 space-x-2 text-center">
                  <button
                    onClick={() => updatePlayer(p.id, { stats_point: p.stats_point + 1 })}
                    className="bg-green-500 text-white px-2 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deletePlayer(p.id)}
                    className="bg-red-500 text-white px-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
