"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import type { Player } from "./types";

type Props = {
  onPlayerAdded: () => void;
};

export default function AddPlayerForm({ onPlayerAdded }: Props) {
  const [form, setForm] = useState<Partial<Player>>({});

  // Insert Player
  const addPlayer = async () => {
    if (!form.player_name) return;
    const { error } = await supabase.from("players").insert([form]);
    if (error) {
      console.error(error);
      return;
    }
    setForm({});
    onPlayerAdded();
  };

  return (
    <div className="space-y-2 mb-6 flex flex-col w-full xl:w-1/4 m-auto border p-4 rounded">
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
  );
}
